<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="h-full flex flex-column">
        <div class="header p-4 w-full bg-primary">
          <div class="text-3xl">Doctor Ai v0.0.5</div>
        </div>
        <div class="overflow-auto flex flex-column h-full">
          <div class="flex align-items-center surface-100 p-2 m-3 border-round-3xl">
            <Textarea v-model="input" autoResize rows="1" cols="2" class="surface-100 custom-textarea w-full border-round-3xl text-xl" />
            <div class="cursor-pointer m-2 mx-4" @click="onClick">
              <i class="pi pi-send text-primary text-2xl"></i>
            </div>
          </div>
          <div class="p-2 overflow-auto">
            <Textarea :value="message" autoResize rows="1" cols="2" class="w-full custom-textarea text-xl" />
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, onBeforeUnmount } from "vue";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonTextarea, IonFabButton, IonIcon } from "@ionic/vue";
import { useGpt, execGpt } from "@/services/gpt";

const input = ref("");
const { message } = useGpt();
async function onClick() {
  await execGpt(input.value);
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
