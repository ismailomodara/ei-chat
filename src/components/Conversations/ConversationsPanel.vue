<template>
  <div class="ei-conversations-panel">
    <div class="ei-conversations-panel--header">
      <h5 class="title">Bashir Hamza</h5>
      <div class="actions">
        <div class="action">
          <i class="ei-icon--search" />
        </div>
      </div>
    </div>
    <div class="ei-conversations-panel--body"></div>
  </div>
</template>

<script>
// import { defineAsyncComponent } from "vue";

export default {
  name: "ConversationsPanel",
  components: {
    // EiConversation: defineAsyncComponent(() => import("@/components/Conversations/Conversation.vue"))
  }
}
</script>

<style lang="scss" scoped>
.ei-conversations-panel {
  width: calc(100% - var(--conversations-panel));
  height: 100%;
  background: var(--background-primary);

  &--header {
    height: var(--tab-height);
    padding: 0 var(--tab-padding);
    background-color: var(--brand-white);
    border-left: 1px solid var(--border-color);
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

  &--body {
    padding: 30px;
    overflow-y: scroll;
    max-height: calc(100vh - 100px);
  }
}
</style>
