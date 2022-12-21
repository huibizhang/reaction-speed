<template>
  <div
    class="relative flex h-screen w-screen select-none flex-col items-center bg-gray-900"
  >
    <NavBar title="測驗紀錄" backTo="/setting/" />
    <div class="w-full flex-1 overflow-hidden p-2 text-white">
      <div
        class="pointer-events-none w-full border-gray-500"
        :class="[records.length === 0 ? 'max-h-0' : 'mb-3 border-b pb-3']"
      >
        <div class="w-full">
          <canvas id="chart" />
        </div>
      </div>

      <div class="w-full space-y-2">
        <ScoreCard
          v-for="record of records"
          :key="record.timstamp"
          v-bind="record"
        />
      </div>
      <div
        v-if="records.length === 0"
        class="flex w-full flex-col items-center space-y-5 rounded-lg bg-gray-500 p-5"
      >
        <div class="text-center text-xl font-bold">你還沒有測驗過</div>
        <router-link class="flex w-full justify-center" to="/"
          ><div
            class="w-1/2 rounded-md bg-green-600 p-2 text-center font-bold shadow-lg transition-all hover:bg-green-500 active:scale-95 active:shadow-md"
          >
            開始測驗
          </div></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBarWithBack.vue";
import ScoreCard from "../components/ScoreCard.vue";
import SettingItem from "../components/SettingItem.vue";
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      records: [],
      chartDatas: [],
      chartConfig: {
        type: "line",
        data: this.chartDatas,
        options: {
          plugins: {
            filler: {
              propagate: false,
            },
            title: {
              display: false,
            },
          },
          interaction: {
            intersect: false,
          },
        },
      },
    };
  },
  mounted() {
    const ls = window.localStorage;
    this.records = JSON.parse(ls.getItem("records")) ?? [];
    this.records = this.records.reverse();

    if (this.records.length > 0) {
      this.chartDatas = this.records
        .filter((r, index) => {
          // return r.reactionPerCorrect < r.reactionPerQ && index < 10;
          return index < 10;
        })
        .map((r) => {
          r.chartData = 2 - r.reactionPerCorrect;
          return r;
        });

      this.chartConfig.data = {
        labels: this.chartDatas.map((r) => {
          // const d = new Date(r.timestamp);
          // console.log(`${d.getMonth() + 1}/${d.getDate()}`);
          return r.score;
        }),
        datasets: [
          {
            label: "",
            data: this.chartDatas.map((r) => r.chartData),
            borderColor: "rgba(125,255,128,1)",
            backgroundColor: "rgba(128,255,128,0.3)",
            fill: true,
            showLine: true,
            tension: 0.4,
          },
        ],
      };

      new Chart(document.getElementById("chart"), this.chartConfig);
    }
  },
  components: { NavBar, SettingItem, ScoreCard },
};
</script>

<style></style>
