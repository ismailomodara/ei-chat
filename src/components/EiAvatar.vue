<template>
  <div class="ei-avatar" :style="{ height: `${size}px`, width: `${size}px`}">
    <img v-if="src" :src="src" :alt="alt" />
    <span>J</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "EiAvatar",
  props: {
    src: String,
    alt: String,
    size: {
      type: Number,
      default: 48
    },
    fit: {
      type: String,
      default: 'cover'
    }
  }
})
</script>

<style scoped lang="scss">
.ei-avatar {
  height: 48px;
  width: 48px;
  border-radius: 100%;
  background-color: var(--background-primary);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
    object-fit: contain;

    &.alt {
      object-fit: contain;
    }
  }

  span {
    color: var(--text-primary);
    font-size: 1.5rem;
    font-weight: 500;
  }
}
</style>
