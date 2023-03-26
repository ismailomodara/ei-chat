<template>
  <div class="ei-conversations">
    <div class="ei-conversations-header">
      <h5 class="title">Messages</h5>
      <div class="actions">
        <div class="action">
          <i class="ei-icon--search" />
        </div>
      </div>
    </div>
    <div class="ei-conversations-content">
      <ei-conversation :status="'read'" />
      <ei-conversation />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "EiConversations",
  props: ['width'],
  components: {
    EiConversation: defineAsyncComponent(() => import("@/components/Conversations/Conversation.vue"))
  }
}
</script>

<style lang="scss" scoped>
.ei-conversations {
  width: var(--conversations-panel);
  background-color: var(--brand-white);
  height: 100%;
  border-left: 1px solid var(--border-color);

  &-header {
    height: var(--tab-height);
    padding: 0 var(--tab-padding);
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      color: var(--brand-primary)
    }

    .actions {
      display: flex;
      align-items: center;

      .action {
        cursor: pointer;
        padding: 12px;
        background-color: var(--background-secondary);
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  &-content {
    overflow-y: scroll;
    max-height: calc(100vh - 100px);
    padding: 20 0 var(--tab-padding);
  }
}
</style>
