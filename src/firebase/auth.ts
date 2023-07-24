import firebase from "@/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { UserAuth } from "@/models/users";
import { FirebaseResponse } from "@/models/firebase";

const getEmail = (username: string): string => {
  return username + "@ei-chat.io"
}
const getPassword = (key: number): string => {
  return "0x" + key
}

const getError = (code: string) => {
  const codes = {
    "auth/user-not-found": "Your username or password is incorrect.",
    "auth/email-already-in-use": "The username is taken.",
    "auth/weak-password": "Your passkey is weak.",
    "auth/wrong-password": "Your username or password is incorrect."
  }

  return {
    // @ts-ignore
    message: codes[code],
    status: 400,
    data: null
  }
}

class Auth {
  public register = async (payload: UserAuth): Promise<FirebaseResponse>  => {
    return new Promise((resolve,reject) => {
      createUserWithEmailAndPassword(firebase, getEmail(payload.username), getPassword(payload.key))
        .then((response) => {
          resolve({
            status: 200,
            message: "Account created successfully",
            data: response.user
          })
        })
        .catch(error => {
          reject(getError(error.code))
        })

    })
  }

  public login = async (payload: UserAuth): Promise<FirebaseResponse> => {
    return new Promise((resolve,reject) => {
      signInWithEmailAndPassword(firebase, getEmail(payload.username), getPassword(payload.key))
        .then((response) => {
          resolve({
            status: 200,
            message: "Login successfully",
            data: response.user
          })
        })
        .catch(error => {
          reject(getError(error.code))
        })
    })
  }

  public logout = async (): Promise<FirebaseResponse> => {
    return new Promise((resolve,reject) => {
      signOut(firebase)
        .then(() => {
          resolve({
            status: 200,
            message: "Logged out",
            data: null
          })
        })
        .catch(error => {
          reject(getError(error.code))
        })

    })
  }
}

export default new Auth
