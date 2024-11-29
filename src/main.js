import { createApp } from 'vue';
// import './style.css'
// Import globale styles
import './styles/main.scss';
import App from './App.vue';

// Import Element Plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// Import Element Plus Icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// Register Element Plus Icons
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const app = createApp(App);

app.use(ElementPlus);

app.mount('#app');
