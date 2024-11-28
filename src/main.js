import { createApp } from 'vue';
// import './style.css'
// Import globale styles
import './styles/main.scss';
import App from './App.vue';

// Import Element Plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(ElementPlus);

app.mount('#app');
