import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { SUPABASE_AUTH_KEY } from "@/constants";
import * as supabase from "@/services/supabase";
import { AppError } from "@/errors";
import { Session, User } from "@supabase/supabase-js";
import { useAuthStore } from "@/store/auth";
import { execGpt, useGpt } from "@/services/gpt";
import { marked } from "marked";
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useMainStore = defineStore("main", {
  state: () => ({
    userInput: "",
    gpt: useGpt(),
  }),
  getters: {
    getUserId() {
      return useAuthStore().getUserId;
    },
    getGptStatus(state){
      return state.gpt.status
    },
    getMessageExtended(state){
      const messageAssistant = state.gpt.messageAssistant
      return {
        ...messageAssistant,
        ...{contentHtml: marked.parse(messageAssistant.content)}
      }
    },
    getMessagesExtended(state) {
      return state.gpt.messages.map((messageObj: any) => ({
        ...messageObj,
        ...{ contentHtml: marked.parse(messageObj.content) },
      }));
    },
  },
  actions: {
    //send message to chat gpt
    sendMessageToGPT() {
      execGpt(this.userInput.toString());
    },

    //delete conversation
    async deleteConversation() {
      const user_id = this.getUserId
      if (!user_id) {
        return
      }
      await supabase.deleteAllRows();
      const data = await supabase.readAllRows({user_id});
      console.log(data);
    },

    async getConversation() {
      const user_id = this.getUserId
      if (!user_id) {
        return
      }
      const response = await supabase.readAllRows({user_id});
      this.gpt.messages = response.map((message) => ({role: message.role, content: message.content}))
    },
  },
});
