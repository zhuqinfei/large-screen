<template>
    <div class="home">
     <header :style="{backgroundImage:`url(${headerBg})`}"></header>
    </div>
</template>

<script lang="ts">
import headerBg from '../images/header.png';
export default {
  setup(){
    return{headerBg}
  }
}
</script>

<style lang='scss'>
@import "../shared/helper";
.home{
  >header{
    height: px(99);
    background-size: cover;
  }
}
</style>