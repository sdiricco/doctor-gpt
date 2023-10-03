import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { SUPABASE_AUTH_KEY } from "@/constants";
import * as supabase from "@/services/supabase";
import { AppError } from "@/errors";
import { Session, User } from "@supabase/supabase-js";
import router from "@/router"

type UserInfo =
  | {
      user: User | null;
      session: Session | null;
    }
  | {
      user: null;
      session: null;
    }
  | any;

interface IState {
  userInfo: UserInfo;
  errorMessage: string;
  form: {
    email: string;
    password: string;
  };
}
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useAuthStore = defineStore("auth", {
  state: (): IState => ({
    userInfo: useLocalStorage(SUPABASE_AUTH_KEY, {}),
    errorMessage: "",
    form: {
      email: "",
      password: "",
    },
  }),
  getters: {
    getUserId(state): string | undefined {
      return 'user' in state.userInfo ? state.userInfo.user!.id : undefined
    },
  },
  actions: {
    //Registration
    async signUp() {
      const { email, password } = this.form;
      this.errorMessage = "";
      try {
        await supabase.signUp({ email, password });
      } catch (error) {
        this.handleError(error);
      }
    },

    //Login
    async signIn() {
      const { email, password } = this.form;
      this.errorMessage = "";
      try {
        await supabase.signIn({ email, password });
        router.push('/home')
      } catch (error) {
        this.handleError(error);
      }
    },

    //handle error
    handleError(error: any) {
      if (error instanceof AppError) {
        this.errorMessage = error.message;
      }
    },
  },
});
