<template>
  <div class="ei-app-layout">
    <aside class="ei-app-layout--sidenav">
      <div class="ei-app-layout--sidenav__logo">
        <h3>EiChat</h3>
      </div>
      <ul class="ei-app-layout--sidenav__menu">
        <li
          v-for="route in routes"
          :key="route.name"
          :class="{
						active: currentRoute === route.name,
						disabled: !route.active
					}"
          @click="$router.push({ name: route.path })">
          <span class="icon"><i :class="`ei-icon--${route.icon}`" /></span>
          <span class="label">{{ route.label }}</span>
        </li>
      </ul>
			<p @click="logout">Logout</p>
    </aside>
    <div class="ei-app-layout--body">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from "vue-router";
import { useStore } from "@/store";

const store = useStore();

const routes = [
	{
		name: 'dashboard',
		label: 'Dashboard',
		path: 'dashboard',
		icon: 'grid',
		active: false
	},
	{
		name: 'conversations',
		label: 'Conversations',
		path: 'conversations',
		icon: 'message-square',
		active: true
	},
	{
		name: 'settings',
		label: 'Settings',
		path: 'settings',
		icon: 'settings',
		active: false
	}
]

const currentRoute = computed(() => useRoute().name);

store.setUser();
</script>

<style lang="scss" scoped>
.ei-app-layout {
  height: 100vh;
  width: 100%;
  background: var(--brand-white);
  display: grid;
  grid-template-columns: var(--sidenav-width) calc(100% - 300px);

  &--sidenav {
    width: 100%;
    height: 100%;
    position: relative;

    &__logo {
      height: var(--tab-height);
      padding: 0 var(--tab-padding);
      border-bottom: 1px solid var(--border-color);
      display: grid;
      justify-content: center;
      align-content: center;
    }

    &__menu {
      list-style-type: none;
      margin: 0;
      padding: var(--tab-padding);
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 10px;

      li {
        padding: 15px;
        display: grid;
        grid-template-columns: 24px auto;
        grid-column-gap: 15px;
        cursor: pointer;
        border-radius: 8px;
        background-color: transparent;
        transition: background-color 0.2s ease-out;

        .icon {
          height: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0.74;

          i {
            font-size: 1.25rem;
          }
        }

        .label {
          color: var(--text-primary);
        }

        &.active {
          background-color: var(--brand-primary);
          transition: background-color 0.2s ease-in;

          .icon {
            opacity: 1;

            i {
              color: var(--brand-white);
            }
          }

          .label {
            color: var(--brand-white) !important;
            transition: color 0.2s ease-in;
          }
        }

				&.disabled {
					cursor: not-allowed;
					//pointer-events: none;
				}
      }
    }
  }

  &--body {
    background: var(--background-primary);
    height: 100%;
  }
}
</style>
