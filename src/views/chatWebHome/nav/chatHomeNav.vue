<template>
    <!-- 模块: 左侧导航 -->
    <div class="chat-web-home-nav">
        <!-- 模块: 头像 -->
        <div class="web-home-nav-head">
            <img src="@/assets/images/web/nav/nav_head_image.jpg" alt="头像">
        </div>

        <!-- 模块: 消息 -->

        <!-- 模块: 设置 -->
        <div class="web-home-controller">
            <p class="iconfont icon-shezhi"></p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
    @import "@/assets/css/schema.scss";
    /* 模块: 左侧导航 */
    .chat-web-home-nav{
        @include chatContainer(100px, 100%);
        border-right: 2px solid #323644;
        @include chatFlexBet(true);
        padding: 30px 0;
    }

    /* 模块: 头像 */
    .web-home-nav-head{
        @include chatCusContainer(54px, 54px, white, 2px);
        border-radius: 50%;
        img{
            @include chatContainer;
            border-radius: 50%;
            cursor: pointer;
        }
    }

    /* 模块: 设置 */
    .web-home-controller{
        .iconfont{
            cursor: pointer;
            @include chatFont(30px, #757889);
            &:hover{
                color: #1D90F5;
            }
        }
    }
</style>