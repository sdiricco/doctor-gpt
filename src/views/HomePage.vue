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
          <ion-input class="custom-input" label-placement="floating" fill="outline" v-model="input"></ion-input>
          <ion-button shape="round" @click="onClick">Invio</ion-button>
        </div>
        <div>
          {{ messageGpt }}
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton } from "@ionic/vue";
import useGpt from "@/services/gpt";

const input = ref("");
const messageGpt = ref("");
async function onClick() {
  const response = await useGpt(input.value);
  messageGpt.value = response.message;
}
</script>

<style scoped>


.main{
  margin: 32px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
}
.custom-input {
  border: 2px solid #666;
  border-radius: 32px;
  margin-right: 16px;
}
</style>
