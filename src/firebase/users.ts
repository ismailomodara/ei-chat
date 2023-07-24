import { getDatabase, ref, get, set, update, remove, child, onValue } from "firebase/database";
import { FirebasePath, FirebaseResponse } from "@/models/firebase";
import { User } from "@/models/users";

/**
 * Initialize Firebase Real-time Database
 */
const database = getDatabase()

class Users {
  public index = async (): Promise<FirebaseResponse> => {
    return new Promise((resolve,reject) => {
      get(child(ref(database), FirebasePath.USERS)).then((snapshot) => {
        resolve({
          status: 200,
          message: "Users fetched",
          data: snapshot.exists() ? snapshot.val() : null
        })
      }).catch((error) => {
        reject({
          error,
          status: 404,
          message: "Error fetching users",
          data: null
        })
      });
    })
  }

  public async store (payload: User): Promise<FirebaseResponse> {
    const path = FirebasePath.USERS + "/" + payload.username;
    return new Promise((resolve, reject) => {
      set(ref(database, path), payload)
        .then(() => {
          resolve({
            status: 200,
            message: "User created successfully",
            data: { ...payload }
          })
        }).catch((error) => {
          reject({
            error,
            status: 404,
            message: "Error creating user",
            data: null
          })
        })
    })
  }

  public async show (username: string): Promise<FirebaseResponse> {
    return new Promise((resolve, reject) => {
      get(child(ref(database), `users/${username}`))
        .then((snapshot) => {
          resolve({
            status: 200,
            message: "User fetched successfully",
            data: snapshot.exists() ? snapshot.val() : null
          })
        }).catch((error) => {
          console.error(error);
          reject({
            error,
            status: 404,
            message: null,
            data: null
          })
        });
    })
  }

  public async update (payload: User): Promise<FirebaseResponse> {

    const path = FirebasePath.USERS + "/" + payload.username;
    let updates = {
      [path + "/name"]: payload.name,
      [path + "/image"]: payload.image,
    }

    return new Promise((resolve, reject) => {
      update(ref(database), updates)
        .then(() => {
          console.log({ updateC: payload})
          this.show(payload.username).then(res => console.log({ updateCS: res}))
        })
        .catch((error) => {
          reject({
            error,
            success: false,
            message: "Error updating user",
            data: null
          })
        })
    })
  }

  public async destroy (username: string): Promise<FirebaseResponse> {
    const path = FirebasePath.USERS + "/" + username;
    return new Promise((resolve, reject) => {
      remove(ref(database, path))
        .then(() => {
          resolve({
            status: 200,
            message: "User deleted successfully",
            data: null
          })
        })
        .catch((error) => {
          reject({
            error,
            status: 404,
            message: "Error deleting user",
            data: null
          })
        })
    })
  }
}

export default new Users
