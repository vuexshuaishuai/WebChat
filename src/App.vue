<template>
  <div id="app-main">
    <router-view></router-view>
    456
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
  @import "@/assets/css/schema.scss";
  html, body, div, ul, li, p, span, a {
    margin: 0;
    padding: 0;
    user-select: none;
    box-sizing: border-box;
    list-style: none;
  }
  html, body, #app, #app-main {
    @include chatContainer;
  }
</style>