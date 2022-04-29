<template>
  <div className="home">
    <header :style="{ backgroundImage: `url(${headerBg})` }">
    <div class="nowDate">{{ nowDate }}</div>
    </header>
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
            <h2>男女占比及年龄段分布</h2>
            <div className="charts">
              <Chart7/>
              <Chart8/>
              <Chart9/>
            </div>
          </div>
      </section>
     <section className="section5">
          <div className="bordered row1  消费类型">
            <h2>各项消费指标</h2>
            <div className="charts">
              <Chart10/>
              <Chart11/>
            </div>
          </div>
          <div className="bordered row2 社交方式">
            <h2>娱乐方式统计</h2>
            <div className="charts">
             <Chart12/>
             <Chart13/>
            </div>
          </div>
          <div className="bordered row3 旅游资源">
            <h2>旅游资源景区排名</h2>
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
  data() {
    return {
      nowDate: "", // 当前日期
    };
  },
  methods: {
    currentTime() {
      setInterval(this.formatDate, 500);
    },
    formatDate() {
      let date = new Date();
      let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let day = date.getDate(); // 日
      let week = date.getDay(); // 星期
      let weekArr = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
      let hh = date.getHours(); // 时
      let hour = hh < 10 ? "0" + hh : hh; // 如果只有一位，则前面补零
      let mf = date.getMinutes(); // 分
      let minute = mf < 10 ? "0" + mf : mf; // 如果只有一位，则前面补零
      let ss = date.getSeconds(); // 秒
      let second = ss < 10 ? "0" + ss : ss; // 如果只有一位，则前面补零
      this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
    }
  },
  mounted() {
    this.currentTime();
  },

  setup() {
    const year = new Date().getFullYear();
    return { headerBg, year};
  },
  components: { Char1, Char2, Chart3, Chart4, Chart5, Chart6, Chart7, Chart8, Chart9, Chart10, Chart11, Chart12, Chart13, Chart14 }
}
</script>

<style lang='scss'>


</style>