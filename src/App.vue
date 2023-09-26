<template>
  <ion-app :class="{ 'keyboard-open': isKeyboardOpen }">
    <ion-router-outlet/>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { ref, onMounted, onUnmounted } from 'vue';

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

/* Stile per il corpo quando la tastiera è attiva */
.keyboard-open {
  height: calc(100% - var(--keyboard-height));
  overflow: hidden;
}
</style>