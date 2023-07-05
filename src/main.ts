import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import eventBus from '@/Plugins/event-bus';
import mitt from 'mitt';
const emitter = mitt();
const app = createApp(App)

app.config.globalProperties.$filters = {
    nameLimit(value, size) {
      if (!value) return '';
      value = value.toString();
  
      if (value.length <= size) {
        return value;
      }
      return value.substr(0, size) + '...';
    }
  }
  app.config.globalProperties.emitter = emitter;

app.use(router)
app.use(eventBus);

app.mount('#app')
