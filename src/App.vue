<template>
  <router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>

</template>

<style lang="scss">
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 0;
  margin: 0;
}

.van-popup {
  overflow: visible !important;
}

.van-popover__content {
  border: 1px solid #ccc;
}

#app {
  height: 100%;
  font-family: -apple-system,
  BlinkMacSystemFont,'Helvetica Neue',Helvetica,
  Segoe UI,Arial,Roboto,'PingFang SC',miui,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

input{
  border: none;
  outline: none;
  -webkit-appearance: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

input:-webkit-autofill{
  box-shadow:0 0 0 1000px white inset !important;
}
textarea{
  border: none;
  outline: none;
}
button{
  border: none;
  outline: none;
}
a{
  text-decoration: none;
  color: #333;
}
li{
  list-style-type: none;
}
</style>
