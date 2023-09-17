<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>DOCTOR AI</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="main">
        <div class="container">
          <ion-input class="custom-input" label-placement="floating" fill="outline" v-model="input" :clear-input="true"></ion-input>
          <ion-fab-button @click="onClick">
            <ion-icon :icon="sendOutline" ></ion-icon>
          </ion-fab-button>
        </div>
        <ion-textarea :auto-grow="true" :value="message"> </ion-textarea>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonTextarea, IonFabButton, IonIcon } from "@ionic/vue";
import { add, sendOutline } from 'ionicons/icons';
import { useGpt, execGpt } from "@/services/gpt";

const input = ref("");
const { message } = useGpt();
async function onClick() {
  await execGpt(input.value);
}
</script>

<style scoped>
.main {
  margin: 16px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.custom-input {
  border: 2px solid #666;
  border-radius: 32px;
  margin-right: 8px;
  background: transparent;
  padding: 8px !important;
}
</style>
