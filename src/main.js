/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-31 16:23:45
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-08 10:29:55
 * @FilePath: /wui/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import App from "./App.vue";
import switchModeBtn from "darkmode-switch-btn";
Vue.use(switchModeBtn);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
