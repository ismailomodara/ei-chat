import { createPinia, defineStore } from 'pinia'
import firebase from "@/firebase";
import auth from "@/services/auth";
import {UserAuth} from "@/models/users";

export const useStore = defineStore('store', {
  state: () => {
    return {
      authenticated: false,
      user: {},
      conversations: [],
    }
  },
  actions: {
    setUser() {
      firebase.onAuthStateChanged((user) => {
        console.log(user)
        if (user) {
          this.user = user;
          this.authenticated = true;
        } else {
          this.authenticated = false;
          this.user = {};
        }
      });
    },
    LOGIN(payload: UserAuth) {
      auth.login(payload).then(response => {
        console.log({ login: response})

      }).catch(error => {
        console.log(error)
      })
    }
  }
})

export default createPinia()
