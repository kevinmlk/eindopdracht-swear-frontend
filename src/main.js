import { createApp } from 'vue';
// import './style.css'
// Import globale styles
import './styles/main.scss';
import App from './App.vue';

// Import router
import router from './router';

// Import Element Plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// Import Element Plus Icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);

app.use(ElementPlus);

// Register Element Plus Icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// Use router
app.use(router);

app.mount('#app');
