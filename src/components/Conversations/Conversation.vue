<template>
  <div class="ei-message">
    <ei-avatar />
    <div class="ei-message-content">
      <div class="ei-message-content--text">
        <h6>Ismail Omodara</h6>
        <p>Would you like some sushi?</p>
      </div>
      <div class="ei-message-content--info">
        <span class="time">Yesterday</span>
        <span class="status">
          <span v-if="status === 'read'" class="read">
            <i class="ei-icon--check" />
          </span>
          <span  v-else class="unread">2</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {defineAsyncComponent, defineComponent} from 'vue'

export default defineComponent({
  name: "EiConversation",
  components: {
    EiAvatar: defineAsyncComponent(() => import("@/components/EiAvatar.vue"))
  },
  props: ['status']
})
</script>

<style scoped lang="scss">
.ei-message {
  padding: 15px 20px;
  display: flex;
  cursor: pointer;

  &-avatar {
    height: 48px;
    width: 48px;
    border-radius: 100%;
    background-color: var(--brand-primary);
  }

  &-content {
    margin-left: 10px;
    width: calc(100% - 58px);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &--text {
      h6 {
        font-size: 1.05rem;
        margin-bottom: 5px;
        color: var(--text-secondary);
      }

      p {
        font-size: 0.875rem;
        color: var(--text-tertiary);
      }
    }

    &--info {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: flex-end;

      .time {
        color: var(--text-tertiary);
        font-size: 0.75rem;
        display: inline-block;
        margin-bottom: 12px;
      }

      .status {
        .read i {
          color: var(--online);
        }
        .unread {
          background-color: var(--notification);
          height: 18px;
          width: 18px;
          border-radius: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
