/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-08-31 16:30:05
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-02 18:27:20
 * @FilePath: /wui/packages/wui/lib/wui.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import SwitchModeBtn from "./SwitchModeBtn/index.vue";
const components = [SwitchModeBtn];
const install = (Vue) => {
  components.forEach((c) => {
    Vue.component(c.name, c);
  });
};

/* 支持使用标签的方式引入 */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { SwitchModeBtn };

export default { install };
