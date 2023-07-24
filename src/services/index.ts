import { FirebaseResponse } from "@/models/firebase";

export default {
  methods: {
    apiWrapper(callback: Function) {
      callback()
        .then((response: FirebaseResponse) => {
        return {
          ...response
        }
      }).catch((error: FirebaseResponse) => {
        alert(error.message)
        return {
          ...error
        }
      })
    }
  }
}
