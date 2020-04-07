import Vue from "vue";
import App from "./App.vue";
// import BootstrapVue from "bootstrap-vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
// import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
// import Multiselect from "vue-multiselect";
// Vue.component("multiselect", Multiselect);
// import store from "./Store";

// Vue.use(vuetify);
// Vue.use(BootstrapVue);
// Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  // store,
  render: h => h(App)
}).$mount("#app");

<style scoped>
  *.
</style>