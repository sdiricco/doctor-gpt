<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="h-full flex flex-column">
        <div class="header flex align-items-center justify-content-between surface-100 p-3 w-full border-bottom-2 surface-border">
          <div class="text-xl text-color-secondary font-bold">Doctor Ai</div>
          <div class="cursor-pointer" @click="onDelete">
              <i class="pi pi-trash text-color-secondary text-2xl"></i>
            </div>
        </div>
        <div class="overflow-auto flex flex-column justify-content-between h-full">
          <div id="textarea"  class="h-full overflow-auto surface-100 p-3" >
            <div v-for="(htmlMessageObj, index) in getMessagesExtended" :key="`message-${index}`" class="mb-4" :class="{'border-bottom-2 surface-border': index < getMessagesExtended.length - 1}">
              <div class="text-xl text-primary font-bold">{{ capitalize(htmlMessageObj.role) }}</div>
              <div class="text-color text-xl" v-html="htmlMessageObj.contentHtml"></div>
            </div>
            <div v-if="getGptStatus === 1">
              <div class="text-xl text-primary font-bold">{{ capitalize(getMessageExtended.role) }}</div>
              <div v-html="getMessageExtended.contentHtml" class="text-xl text-color"></div>
            </div>
          </div>
          <div class="flex align-items-end   surface-100 p-2 m-3 border-round-3xl">
            <Textarea v-model="userInput" autoResize rows="1" cols="2" class="surface-100 custom-textarea w-full border-round-3xl text-xl" />
            <div class="cursor-pointer m-2 mx-4" @click="onClick">
              <i class="pi pi-send text-primary text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { ref, onMounted,  watch, computed } from "vue";
import { IonContent, IonPage,} from "@ionic/vue";
import { useGpt, execGpt } from "@/services/gpt";
import { marked } from 'marked';
import {capitalize} from 'lodash'
import {insertRow, readAllRows, deleteAllRows} from "@/services/supabase"
import {storeToRefs} from "pinia"
import {useMainStore} from "@/store/main"
import * as supabase from "@/services/supabase"

const mainStore = useMainStore()
const {userInput, getMessageExtended, getMessagesExtended, getGptStatus} = storeToRefs(mainStore)

const scrollToBottom = () => {
  const textArea:any = document.getElementById('textarea');
  textArea.scrollTop = textArea.scrollHeight
};





//usare un meccanismo di code, creando una variabile tempMessages che contenga i messaggi da salvare su supabase.
// Quando c'è un nuovo messaggio verrà salvato in questa variabile e poi con un watcher verrà salvato su supabase
// watch(getMessagesExtended, async (values) => {
//   if (!isLoadingMessages.value) {
//     const message = values[values.length - 1];
//     const data = await insertRow({role: message.role, content: message.content})
//   }
//   isLoadingMessages.value = false;

// }, {deep: true})
watch(getMessageExtended, scrollToBottom);
watch(getMessagesExtended, scrollToBottom, {deep: true});

async function onClick() {
  mainStore.sendMessageToGPT();
}

async function onDelete(){
  await deleteAllRows();
  // isLoadingMessages.value = true;
  // const data = await readAllRows()
  // messages.value = data.map((message) => ({role: message.role, content: message.content}))
}

onMounted(async () => {
  scrollToBottom();
  await mainStore.getConversation();


});
</script>

<style scoped>
.custom-input {
  border: 2px solid #666;
  border-radius: 32px;
  margin-right: 8px;
  background: transparent;
  padding: 8px !important;
}

.custom-textarea {
  border: none;
  box-shadow: none;
}

.custom-textarea.p-inputtext:enabled:focus {
  box-shadow: none;
  border-color: transparent;
}
</style>
