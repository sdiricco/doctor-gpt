<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="h-full flex flex-column">
        <div class="header flex align-items-center justify-content-between surface-100 p-3 w-full border-bottom-2 surface-border">
          <div class="text-xl text-color-secondary font-bold">Doctor Ai</div>
          <div class="cursor-pointer" >
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
import {capitalize} from 'lodash'
import {storeToRefs} from "pinia"
import {useMainStore} from "@/store/main"

const mainStore = useMainStore()
const {userInput, getMessageExtended, getMessagesExtended, getGptStatus} = storeToRefs(mainStore)

const scrollToBottom = () => {
  const textArea:any = document.getElementById('textarea');
  textArea.scrollTop = textArea.scrollHeight
};

watch(getMessageExtended, scrollToBottom);
watch(getMessagesExtended, scrollToBottom, {deep: true});

async function onClick() {
  mainStore.sendMessageToGPT();
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
