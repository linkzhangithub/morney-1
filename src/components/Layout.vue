<template>
    <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
      <div class="content" :class="classPrefix && `${classPrefix}-content`">
        <slot/>
      </div>
     <Nav/>
    </div>
</template>

<script lang="ts">
    export default {
        props: ['classPrefix'],//接收这个q前缀
        name: 'Layout',
    };
</script>

<style lang="scss" scoped>
.layout-wrapper{
     display: flex;
     flex-direction: column;
     height: 100vh;
 }
 .content{
     overflow: auto;
     flex-grow: 1;
 }
</style>