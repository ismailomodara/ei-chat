<template>
  <div class="conversations">
    <ei-conversations />
    <ei-conversations-panel />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "Conversations",
  components: {
    EiConversations: defineAsyncComponent(() => import("@/components/Conversations/Conversations.vue")),
    EiConversationsPanel: defineAsyncComponent(() => import("@/components/Conversations/ConversationsPanel.vue"))
  }
}
</script>

<style lang="scss" scoped>
.conversations {
  display: flex;
  height: 100%;
}
</style>
