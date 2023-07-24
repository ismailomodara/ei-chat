import Auth from "@/firebase/auth";
import Users from "@/firebase/users";
import { UserAuth, User } from "@/models/users";
import { FirebaseResponse } from "@/models/firebase";

export default {
  register: (payload: UserAuth) => {
    return Auth.register(payload).then((response: FirebaseResponse) => {
      return Users.store({
        username: payload.username,
        uid: response.data.uid
      })
    })
  },

  login: (payload: UserAuth) => {
    return Auth.login(payload).then(() => {
      return Users.show(payload.username)
    })
  },

  logout: () => Auth.logout()
}
