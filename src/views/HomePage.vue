<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Doctor Ai v0.0.2</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" >
      <div class="flex flex-column justify-content-between h-full" :class="{ 'keyboard-open': isKeyboardOpen }">
        <div class="p-2 overflow-auto">
          <ion-textarea :auto-grow="true" :value="message"> </ion-textarea>
        </div>
        <div class="w-full flex align-items-end surface-100">
          <Textarea v-model="input" autoResize rows="1" cols="2" class="surface-100 custom-textarea w-full" />
          <div class="cursor-pointer m-2 mx-4" @click="onClick">
            <i class="pi pi-send text-primary"></i>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonTextarea, IonFabButton, IonIcon } from "@ionic/vue";
import { useGpt, execGpt } from "@/services/gpt";

const input = ref("");
const { message } = useGpt();
async function onClick() {
  await execGpt(input.value);
}

const isKeyboardOpen = ref(false);
let windowHeight = window.innerHeight;

const calculateKeyboardHeight = () => {
  const newWindowHeight = window.innerHeight;
  const keyboardHeight = windowHeight - newWindowHeight;
  document.documentElement.style.setProperty('--keyboard-height', `${keyboardHeight}px`);
  isKeyboardOpen.value = keyboardHeight > 0;
};

onMounted(() => {
  window.addEventListener('resize', calculateKeyboardHeight);
  calculateKeyboardHeight();
});

onUnmounted(() => {
  window.removeEventListener('resize', calculateKeyboardHeight);
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

.keyboard-open {
  height: calc(100% - var(--keyboard-height));
  overflow: hidden;
}
</style>
