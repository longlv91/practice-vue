import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import Router from 'vue-router';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import {
  VApp,
  VNavigationDrawer,
  VFooter,
  VToolbar,
  VFadeTransition
} from 'vuetify/lib';
import {
  Ripple
} from 'vuetify/es5/directives';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFadeTransition,
    VFooter,
    VToolbar
  },
  directives: {
    Ripple
  },
  iconfont: "md"
});
Vue.use(Router);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
