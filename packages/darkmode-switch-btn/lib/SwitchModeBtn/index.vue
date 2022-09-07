<template>
  <el-dropdown @command="handleCommand" class="switchModeBtn">
    <span class="themeBtn">
      <span class="icon icon-theme" :class="getModeClass"></span> Theme<i
        class="el-icon-arrow-down el-icon--right"
      ></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="os-default" class="itemBtn"
        ><span class="os-default-icon"></span> OS_Default</el-dropdown-item
      >
      <el-dropdown-item command="light" class="itemBtn"
        ><span class="light-icon"></span>Light</el-dropdown-item
      >
      <el-dropdown-item command="dark" class="itemBtn"
        ><span class="dark-icon"></span>Dark</el-dropdown-item
      >
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";
import { Dropdown, DropdownMenu, DropdownItem } from "element-ui";

const modeList = {
  "os-default": "os-default-icon",
  light: "light-icon",
  dark: "dark-icon",
};

export default {
  name: "SwitchModeBtn",
  components: {
    "el-dropdown": Dropdown,
    "el-dropdown-menu": DropdownMenu,
    "el-dropdown-item": DropdownItem,
  },
  created(){
    const theme = window.localStorage.getItem("theme");
    if(theme){
      this.mode=theme;
    }
    const html = document.documentElement;
    if (window && html) {
      // 插入 meta 标签
      var oMeta = document.createElement("meta");
      oMeta.content = "light dark";
      oMeta.name = "color-scheme";
      document.getElementsByTagName("head")[0].appendChild(oMeta);
      html.className = theme;
      html.style.backgroundColor = "";
    }
  },
  computed: {
    getModeClass() {
      console.log(this.mode)
      console.log(modeList[this.mode])
      return modeList[this.mode];
    },
  },
  data() {
    return { mode: "os-default" };
  },
  methods: {
    handleCommand(theme) {
      const html = document.documentElement;
      if (window && html) {
        html.className = theme;
        html.style.backgroundColor = "";
        window.localStorage.setItem("theme", theme);
        this.mode = theme;
      }
    },
  },
};
</script>

<style scoped>
.el-dropdown-menu {
  background-color: var(--background-primary);
}
.os-default-icon,
.light-icon,
.dark-icon {
  display: inline-block;
  height: 16px;
  width: 16px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 8px;
  background-color: var(--text-primary);
}
.itemBtn {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: var(--text-primary);
}
.os-default-icon {
  mask-image: url("../src/assets/os-default.svg");
}
.light-icon {
  mask-image: url("../src/assets/light.svg");
}
.dark-icon {
  mask-image: url("../src/assets/dark.svg");
}

.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: var(--button-secondary-hover);
  color: var(--text-primary-hover);
}
</style>
<style lang="scss">
@import "../src/style/theme.scss";
.switchModeBtn {
  .themeBtn {
    font-weight: 500;
    padding:5px 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: var(--text-primary);
    border: 1px solid var(--border-primary);
    cursor: pointer;
   
  }
  .themeBtn:hover{
    --button-bg: var(--border-secondary);
  }

  .icon-theme {
    display: inline-block;
    height: 16px;
    width: 16px;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: var(--text-primary);
  }
}
</style>
