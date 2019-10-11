import Vue from "vue";
import App from "./App.vue";
import NavBar from "./components/NavBar.vue";

Vue.component("appNavbar", NavBar);

new Vue({
  render: h => h(App)
}).$mount("#app");
