import './assets/main.css'

import { createApp, DirectiveBinding } from 'vue';
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
  // app.directive("text2number", {
  //   mounted(el) {
  //     el.addEventListener('input', convertnum);
  //   },
  //   unmounted(el) {
  //     el.removeEventListener('input', convertnum);
  //   }
  // });
  // function convertnum(event){
  //   const inputElement = event.target;
  //   const value = inputElement.value;
  //   const sanitizedValue = value.replace(/[^\d]/g, '');
  //   console.log(typeof sanitizedValue)
  //   const number = parseInt(sanitizedValue);
    
  //   event.target.value = parseInt(number);
  // }
  app.directive("salary-input", {
    mounted(el) {
      el.addEventListener('input', handleInput);
    },
  });
  function handleInput(event) {
    const inputElement = event.target;
    const value = inputElement.value;
    const sanitizedValue = value.replace(/[^\d]/g, '');
    const formattedValue = formatCurrency(sanitizedValue);
    inputElement.value = formattedValue;
  }
  function formatCurrency(value) {
    const number = parseFloat(value);
    const parts = Math.floor(number).toString().split(/(?=(?:\d{3})*(?:$))/);
    let formattedValue = parts.join(',');
    const decimalPart = value.includes('.') ? value.split('.')[1] : '';
    return formattedValue;
  }
  app.config.globalProperties.emitter = emitter;

app.use(router)
app.use(eventBus);
app.mount('#app')
