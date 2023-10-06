import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { SUPABASE_AUTH_KEY } from "@/constants";
import * as supabase from "@/services/supabase";
import { AppError } from "@/errors";
import { Session, User } from "@supabase/supabase-js";
import { useAuthStore } from "@/store/auth";
import { execGpt, useGpt, IMessage } from "@/services/gpt";
import { marked } from "marked";
import { Ref } from "vue";
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application

interface IState {
  userInput: string;
  gpt: {
    messageAssistant: Ref<IMessage>;
    messages: Ref<IMessage[]>;
    status: Ref<number>;
    systemMessage: Ref<IMessage>;
  };
  conversation: any[];
}

export const useMainStore = defineStore("main", {
  state: (): IState => ({
    userInput: "",
    gpt: useGpt(),
    conversation: [],
  }),
  getters: {
    getIncognito() {
      return useAuthStore().incognito;
    },
    getUserId() {
      return useAuthStore().getUserId;
    },
    getGptStatus(state) {
      return state.gpt.status;
    },
    getMessageExtended(state) {
      const messageAssistant = state.gpt.messageAssistant;
      return {
        ...messageAssistant,
        ...{ contentHtml: marked.parse(messageAssistant.content) },
      };
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
    sendMessage() {
      execGpt(this.userInput.toString());
      this.userInput = ''
    },

    async saveCurrentConversation(){
      if (!this.getUserId) {
        console.log('Missing user ID')
        return;
      }
      
    },

    //delete current conversation
    async deleteCurrentConversation() {
      this.gpt.messages = []
    },

    //get conversation history from DB
    async getConversationHistory() {
      if (!this.getUserId) {
        console.log('Missing user ID')
        return;
      }
      const response = await supabase.readAllRows({ user_id: this.getUserId });
      this.conversation = response;
      this.gpt.messages = response.map((message:any) => ({ role: message.role, content: message.content }));
    },
  },
});
