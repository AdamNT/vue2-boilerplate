import Vue from "vue";
import Vuex from "vuex";
import VueToast from "vue-toast-notification";
import Vuelidate from "vuelidate";

import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import "./main.scss";
import "vue-toast-notification/dist/theme-sugar.css";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueToast);
Vue.use(Vuelidate);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
