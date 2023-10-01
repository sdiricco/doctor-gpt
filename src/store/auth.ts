import { defineStore } from "pinia";
import {useLocalStorage} from '@vueuse/core';
import { SUPABASE_AUTH_KEY } from "@/constants";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useAuthStore = defineStore("auth", {
  state: () => ({
    userInfo: useLocalStorage(SUPABASE_AUTH_KEY, {}),
  }),
});
