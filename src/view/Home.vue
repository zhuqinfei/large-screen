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
      <section className="section4">
        <Chart6/>
         <div className="bordered 年龄段">
            <h2>犯罪人员年龄段分布</h2>
            <div className="charts">
              <Chart7/>
              <Chart8/>
              <Chart9/>
            </div>
          </div>
      </section>
     <section className="section5">
          <div className="bordered row1 案发类型">
            <h2>案发类型统计</h2>
            <div className="charts">
              <Chart10/>
              <Chart11/>
            </div>
          </div>
          <div className="bordered row2 案发街道">
            <h2>案发街道统计</h2>
            <div className="charts">
             <Chart12/>
             <Chart13/>
            </div>
          </div>
          <div className="bordered row3 作案手段">
            <h2>作案手段分析</h2>
            <Chart14/>
          </div>
        </section>
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
import Chart6 from '../components/Chart6.vue';
import Chart7 from '../components/Chart7.vue';
import Chart9 from '../components/Chart9.vue';
import Chart8 from '../components/Chart8.vue';
import Chart10 from '../components/Chart10.vue';
import Chart11 from '../components/Chart11.vue';
import Chart12 from '../components/Chart12.vue';
import Chart13 from '../components/Chart13.vue';
import Chart14 from '../components/Chart14.vue';

export default {
  setup() {
    const year = new Date().getFullYear();
    return { headerBg, year};
  },
  components: { Char1, Char2, Chart3, Chart4, Chart5, Chart6, Chart7, Chart8, Chart9, Chart10, Chart11, Chart12, Chart13, Chart14 }
}
</script>

<style lang='scss'>

</style>