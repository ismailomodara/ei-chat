export enum FirebasePath {
  STATUSES = "statuses",
  USERS = "users",
  GROUPS = "groups",
  CONVERSATIONS = "conversations",
  CONVERSATIONS_MEMBERS = "conversations_member",
  MESSAGES = "messages"
}

export interface FirebaseResponse {
  status: number
  message: string
  data: any,
}
