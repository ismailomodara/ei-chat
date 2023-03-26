import { createApp } from 'vue'

import App from './App.vue'

// Styling
import "@/assets/scss/ei-main.scss";

// Router
import router from './router';

const app = createApp(App)

app.use(router)
app.mount('#app')
