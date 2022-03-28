<template>
  <nav>
    <router-link to="/money" class="item">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/labels" class="item">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item">
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
//下面代码是将 svg 一个一个引入
// import x from '@/assets/icons/label.svg';
// import y from '@/assets/icons/money.svg';
//     console.log(x);
//     console.log(y);

    export default {
  components: { Icon },
        name: 'Nav'
    };
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
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
  }
  
</style>