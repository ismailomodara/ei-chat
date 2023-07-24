<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

import { computed } from "vue";
import { useRoute } from "vue-router";

const meta = computed(() => useRoute().meta);

const layout = computed(() => {
	const { layout } = meta && meta.value;
	return layout && layout === 'app' ? AppLayout : DefaultLayout;
})
</script>
