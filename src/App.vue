<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { LayoutType } from "@/types/layouts";

export default defineComponent({
  name: "App",

  components: {
    DefaultLayout: defineAsyncComponent(() => import("@/layouts/DefaultLayout.vue")),
    AppLayout: defineAsyncComponent(() => import("@/layouts/AppLayout.vue")),
  },

  computed: {
    layout(): LayoutType {
      const layout = this.$route.meta.layout
      return layout && layout === 'app' ? 'AppLayout' : 'DefaultLayout'
    }
  }
})
</script>
