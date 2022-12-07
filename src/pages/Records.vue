<template>
  <div
    class="relative flex h-screen w-screen select-none flex-col items-center bg-gray-900"
  >
    <NavBar title="測驗紀錄" backTo="/setting/" />
    <div class="w-full flex-1 space-y-2 p-2 text-white">
      <ScoreCard
        v-for="record of records"
        :key="record.timstamp"
        v-bind="record"
      />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBarWithBack.vue";
import ScoreCard from "../components/ScoreCard.vue";
import SettingItem from "../components/SettingItem.vue";
export default {
  data() {
    return {
      records: [],
    };
  },
  mounted() {
    const ls = window.localStorage;
    this.records = JSON.parse(ls.getItem("records")) ?? [];
    this.records = this.records.reverse();
  },
  components: { NavBar, SettingItem, ScoreCard },
};
</script>

<style></style>
