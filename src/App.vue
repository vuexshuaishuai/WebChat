<template>
  <div id="app-main">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
  @import "@/assets/css/schema.scss";
  @import url(./assets/font/iconfont.css);
  html, body, div, ul, li, p, span, a, img {
    margin: 0;
    padding: 0;
    user-select: none;
    box-sizing: border-box;
    list-style: none;
  }
  html, body, #app, #app-main {
    @include chatContainer;
  }
  @font-face {
    font-family: 'Oxygen';
    src: url("@/assets/font/Oxygen-Light.ttf");
  }
  body {
    font-family: Oxygen, Arial, sans-serif;
  }
</style>