{{#if_eq vueVersion 'vue2'}}
import Vue from 'vue';
{{else}}
import { createApp } from 'vue';
{{/if_eq}}
import App from './App.vue'

{{#if_eq vueVersion 'vue2' }}
Vue.config.productionTip = false

{{/if_eq}}
{{#if_eq vueVersion 'vue2'}}
new Vue({
  render: h => h(App),
}).$mount('#app')
{{else}}
createApp(App).mount('#app')
{{/if_eq}}
