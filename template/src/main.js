{{#if_eq vueVersion 'vue2'}}
import Vue from 'vue';
{{#isEnabled plugins 'vue-router'}}
import router from "@/routes";
{{/isEnabled}}
{{#isEnabled plugins 'vuex'}}
import store from "@/store";
{{/isEnabled}}
{{else}}
import { createApp } from 'vue';
{{/if_eq}}
import "@/plugins";
import App from '@/App.vue';

{{#if_eq vueVersion 'vue2' }}
Vue.config.productionTip = false

{{/if_eq}}
{{#if_eq vueVersion 'vue2'}}
new Vue({
{{#isEnabled plugins 'vue-router'}}
  router,
{{/isEnabled}}
{{#isEnabled plugins 'vuex'}}
  store,
{{/isEnabled}}
  render: h => h(App),
}).$mount('#app')
{{else}}
createApp(App).mount('#app')
{{/if_eq}}
