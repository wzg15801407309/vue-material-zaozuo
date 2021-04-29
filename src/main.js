import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// vue-material 插件的东西
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
// 解决icon不显示的问题
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(VueMaterial)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
