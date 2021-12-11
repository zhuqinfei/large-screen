<template>
  <div className="home">
    <header :style="{ backgroundImage: `url(${headerBg})` }"></header>
    <main>
      <section class="section1">
        <Char1 />
        <Char2 />
      </section>
      <section className="section2">
        <Chart3/>
        <Chart4/>
      </section>
      <section className="bordered section3">
        <Chart5/>
      </section>
      <section className="bordered section4"></section>
      <section className="bordered section5"></section>
    </main>
    <footer>
      &copy; 个人出品 2020-{{year}}
    </footer>
  </div>
</template>

<script lang="ts">
import headerBg from '../images/header.png';
import Char1 from '../components/Char1.vue';
import Char2 from '../components/Char2.vue';
import '../home.scss'
import Chart3 from '../components/Chart3.vue';
import Chart4 from '../components/Chart4.vue';
import Chart5 from '../components/Chart5.vue';

export default {
  setup() {
    const year = new Date().getFullYear();
    return { headerBg, year};
  },
  components: { Char1, Char2, Chart3, Chart4, Chart5 }
}
</script>

<style lang='scss'>

</style>