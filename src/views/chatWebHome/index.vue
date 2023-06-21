<template>
    <!-- 容器: 网页版 ChatGPT -->
    <div class="chat-web-home">
        <!-- 容器: 内置容器 -->
        <div class="chat-web-home-inner">
            <!-- 模块: 左侧导航 -->
            <ChatHomeNav></ChatHomeNav>
            <!-- 模块:  -->
            <div class="nos"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import ChatHomeNav from "./nav/chatHomeNav.vue";
</script>

<style lang="scss" scoped>
    @import "@/assets/css/schema.scss";
    .chat-web-home{
        @include chatCusContainer(100%, 100%, white);
        @include chatFlexCenter;
    }
    .chat-web-home-inner{
        @include chatCusContainer(90%, 90%, #272A37);
        @include chatFlexBet;
        border-radius: 15px;
    }
    .nos{
        flex:1;
    }
</style>