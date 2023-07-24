import Users from "@/firebase/users";
import { User } from "@/models/users";

export default {
  index: () => Users.index(),

  store: (payload: User) => Users.store(payload),

  show: (username: string) => Users.show(username),

  update: (payload: User) => Users.update(payload),

  remove: (username: string) => Users.destroy(username),
}
