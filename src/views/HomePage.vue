<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="h-full flex flex-column">
        <div class="header surface-100 p-3 w-full border-bottom-2 surface-border">
          <div class="text-xl text-color-secondary font-bold">Doctor Ai</div>
        </div>
        <div class="overflow-auto flex flex-column justify-content-between h-full">
          <div id="textarea"  class="h-full overflow-auto surface-100 p-3" >
            <div v-for="(htmlMessageObj, index) in htmlMessages" :key="`message-${index}`" class="mb-4" :class="{'border-bottom-2 surface-border': index < htmlMessages.length - 1}">
              <div class="text-xl text-primary font-bold">{{ capitalize(htmlMessageObj.role) }}</div>
              <div class="text-color text-xl" v-html="htmlMessageObj.contentHtml"></div>
            </div>
            <div v-if="status === 1">
              <div class="text-xl text-primary font-bold">{{ capitalize(htmlMessage.role) }}</div>
              <div v-html="htmlMessage.contentHtml" class="text-xl text-color"></div>
            </div>
          </div>
          <div class="flex align-items-end   surface-100 p-2 m-3 border-round-3xl">
            <Textarea v-model="input" autoResize rows="1" cols="2" class="surface-100 custom-textarea w-full border-round-3xl text-xl" />
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

const input = ref("");

const scrollToBottom = () => {
  const textArea:any = document.getElementById('textarea');
  textArea.scrollTop = textArea.scrollHeight
};

onMounted(() => scrollToBottom());

const { messageAssistant, messages, status } = useGpt();

const htmlMessage = computed(()=> ({
  ...messageAssistant.value,
  ...{contentHtml: marked.parse(messageAssistant.value.content)}
}))
const htmlMessages = computed(() => messages.value.map((messageObj:any)=> ({
  ...messageObj,
  ...{contentHtml: marked.parse(messageObj.content)}
})))

watch(htmlMessage, scrollToBottom);
watch(htmlMessages, scrollToBottom, {deep: true});

async function onClick() {
  execGpt(input.value);
  input.value = ''
}
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
