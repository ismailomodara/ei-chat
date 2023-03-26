<template>
  <div class="ei-app-layout">
    <aside class="ei-app-layout--sidenav">
      <div class="ei-app-layout--sidenav__logo">
        <h3>EiChat</h3>
      </div>
      <ul class="ei-app-layout--sidenav__menu">
        <li
          v-for="item in menu"
          :key="item.name"
          :class="{ active: activeMenu === item.name }"
          @click="route(item.route)">
          <span class="icon"><i :class="`ei-icon--${item.icon}`" /></span>
          <span class="label">{{ item.label }}</span>
        </li>
      </ul>
    </aside>
    <div class="ei-app-layout--body">
      <slot />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "AppLayout",
  data() {
    return {
      menu: [
        {
          name: 'dashboard',
          label: 'Dashboard',
          route: 'dashboard',
          icon: 'grid'
        },
        {
          name: 'conversations',
          label: 'Conversations',
          route: 'conversations',
          icon: 'message-square'
        },
        {
          name: 'settings',
          label: 'Settings',
          route: 'settings',
          icon: 'settings'
        }
      ]
    }
  },
  computed: {
    activeMenu() {
      return this.$route.name
    }
  },
  methods: {
    route(route) {
      this.$router.push({ name: route })
    }
  }
})
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
      }
    }
  }

  &--body {
    background: var(--background-primary);
    height: 100%;
  }
}
</style>
