import { createApp } from 'vue'

import App from './App.vue'

// Styling
import "@/assets/scss/ei-main.scss";

// Router
import router from "@/router";

// Store
import store from "@/store";

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
