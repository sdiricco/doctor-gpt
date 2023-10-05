<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div
        class="h-full px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
        style="background: linear-gradient(-225deg, #dd9bfc,  #4801ff)">
        <div class="p-4 text-center lg:w-30rem" style="border-radius: 12px; color: rgba(255, 255, 255, 0.8)">
          <div class="text-5xl font-medium mb-4">Welcome to Doctor AI</div>
          <Message severity="error" v-if="authStore.errorMessage" @close="authStore.errorMessage = ''">{{ authStore.errorMessage }}</Message>

          <div class="text-xl text-white-alpha-60 font-medium mb-1">Email</div>
          <InputText
            type="text"
            class="appearance-none border-none p-3 w-full outline-none text-xl block mb-4 bg-white-alpha-10 text-white-alpha-60"
            v-model="authStore.form.email"
            style="border-radius: 30px" />
          <div class="text-xl text-white-alpha-60 font-medium mb-1">Password</div>
          <InputText
            type="password"
            class="appearance-none border-none p-3 w-full outline-none text-xl mb-8 bg-white-alpha-10 text-white-alpha-60"
            v-model="authStore.form.password"
            style="border-radius: 30px" />
          
          <Button
            @click="authStore.signIn"
            type="button"
            class="w-full appearance-none border-none p-3 w-full outline-none text-xl mb-4 font-medium bg-white-alpha-50 hover:bg-white-alpha-40 active:bg-white-alpha-20 text-white-alpha-80 cursor-pointer transition-colors transition-duration-150"
            style="border-radius: 30px"
            label="Sign In"></Button>
          <Button
            @click="authStore.signUp"
            type="button"
            class="w-full appearance-none border-none p-3 w-full outline-none text-xl mb-4 font-medium bg-white-alpha-50 hover:bg-white-alpha-40 active:bg-white-alpha-20 text-white-alpha-80 cursor-pointer transition-colors transition-duration-150"
            style="border-radius: 30px"
            label="Sign Up"></Button>
            <Button
            @click="authStore.skipLogin"
            type="button"
            class="w-full appearance-none border-none p-3 w-full outline-none text-xl mb-4 font-medium bg-white-alpha-50 hover:bg-white-alpha-40 active:bg-white-alpha-20 text-white-alpha-80 cursor-pointer transition-colors transition-duration-150"
            style="border-radius: 30px"
            label="Skip"></Button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonContent, IonPage } from "@ionic/vue";
import {useAuthStore} from "@/store/auth"

const authStore = useAuthStore();
</script>

<style scoped></style>
