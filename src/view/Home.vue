<template>
  <div className="home">
    <header :style="{ backgroundImage: `url(${headerBg})` }"></header>
    <main>
      <section class="section1">
        <Char1 />
        <Char2 />
      </section>
      <section className="bordered section2"></section>
      <section className="bordered section3"></section>
      <section className="bordered section4"></section>
      <section className="bordered section5"></section>
    </main>
  </div>
</template>

<script lang="ts">
import headerBg from '../images/header.png';
import Char1 from '../components/Char1.vue';
import Char2 from '../components/Char2.vue';
import '../home.scss'

export default {
  setup() {
    return { headerBg, };
  },
  components: { Char1, Char2 }
}
</script>

<style lang='scss'>

</style>