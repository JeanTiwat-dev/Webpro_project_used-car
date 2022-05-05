import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vuelidate from 'vuelidate'

import '../public/css/style.css'

library.add(fas)

Vue.component('icon', FontAwesomeIcon)

Vue.use(Vuelidate)

Vue.config.productionTip = false

const DEFAULT_TITLE = 'Car247';
router.afterEach((to, from) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
