# `darkmode-switch-btn`

> 一个切换高亮/暗夜样式的组件

## Usage

```js
//main.js

import switchModeBtn from "darkmode-switch-btn";
Vue.use(switchModeBtn);

```
```Vue
//vue文件中
<switchModeBtn/>

```

```scss
//添加theme.scss文件，设置不同模式时的css值
//例如：
// 字体
$font-light-color-1: #1b1b1b;

$font-dark-color-1: #1b1b1b;

//背景
$bg-light-color-1: #fff;

$bg-dark-color-1: #1b1b1b;

@mixin light-theme {
    color-scheme: light;
    // 浏览器提供的元素 UI 中使用的颜色与配色方案的意图相匹配。例如滚动条、拼写检查下划线、表单控件等。
    --nav-bg:$bg-light-color-1
}
@mixin dark-theme {
    color-scheme: dark;
    // 浏览器提供的元素 UI 中使用的颜色与配色方案的意图相匹配。例如滚动条、拼写检查下划线、表单控件等。
    --nav-bg:$bg-dark-color-1
}


.light{
    @include light-theme
}
.dark{
    @include dark-theme
}
:root:not(.light):not(.dark){
    @media (prefers-color-scheme: light) {
        @include light-theme;
      }
    
      @media (prefers-color-scheme: dark) {
        @include dark-theme;
      }
}
```


