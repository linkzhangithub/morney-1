<template>
  <nav>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
import Icon from './Icon.vue';
//下面代码将存放了 svg 的 icons 文件夹一次性引入
let importAll = (requireContext:__WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
    importAll(require.context('../assets/icons',true,/\.svg$/));
} catch (error) {
    console.log(error);
}

    export default {
  components: { Icon },
        name: 'Nav'
    };
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  nav {
    //加阴影做浮动效果
    @extend %outerShadow;
    display: flex;
    flex-direction: row;
    font-size: 12px;
    > .item {
      padding: 2px 0;
      width: 33.33333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon{
          width: 32px;
          height: 32px;
      }
    }
    > .item.selected{
        color: $color-highlight;
    }
  }
  
</style>