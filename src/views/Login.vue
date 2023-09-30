<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div
        class="h-full px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center"
        style="background: linear-gradient(-225deg, #ac32e4, #7918f2 48%, #4801ff)">
        <div class="p-4 text-center lg:w-30rem" style="border-radius: 12px; color: rgba(255, 255, 255, 0.8)">
          <div class="text-5xl font-medium mb-7">Welcome to Doctor AI</div>
          <div class="text-xl text-white-alpha-60 font-medium mb-1">Email</div>
          <InputText
            type="text"
            class="appearance-none border-none p-3 w-full outline-none text-xl block mb-4 bg-white-alpha-10 text-white-alpha-60"
            v-model="email"
            style="border-radius: 30px" />
          <div class="text-xl text-white-alpha-60 font-medium mb-1">Password</div>
          <InputText
            type="text"
            class="appearance-none border-none p-3 w-full outline-none text-xl mb-8 bg-white-alpha-10 text-white-alpha-60"
            v-model="password"
            style="border-radius: 30px" />
          <Button
            @click="onClickSignIn"
            type="button"
            class="w-full appearance-none border-none p-3 w-full outline-none text-xl mb-4 font-medium bg-white-alpha-50 hover:bg-white-alpha-40 active:bg-white-alpha-20 text-white-alpha-80 cursor-pointer transition-colors transition-duration-150"
            style="border-radius: 30px"
            label="Sign In"></Button>
          <Button
            @click="onClickSignUp"
            type="button"
            class="w-full appearance-none border-none p-3 w-full outline-none text-xl mb-4 font-medium bg-white-alpha-50 hover:bg-white-alpha-40 active:bg-white-alpha-20 text-white-alpha-80 cursor-pointer transition-colors transition-duration-150"
            style="border-radius: 30px"
            label="Sign Up"></Button>
            <Button
            @click="onSkip"
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
import { ref } from "vue";
import { signIn, signUp } from "@/services/supabase";
import router from "@/router"

const email = ref("");
const password = ref("");

async function onClickSignIn() {
  const data = await signIn({
    email: email.value,
    password: password.value,
  });
  console.log(data)
  router.push('/home')
}

async function onSkip(){
  router.push('/home')
}

async function onClickSignUp(){
  const data = await signUp({
    email: email.value,
    password: password.value,
  });
  console.log(data)
}
</script>

<style scoped></style>
