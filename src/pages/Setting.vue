<template>
  <div
    class="relative flex h-screen w-screen select-none flex-col items-center bg-gray-900"
  >
    <NavBar title="設定" />
    <div class="w-full flex-1">
      <!-- <SettingItem title="測驗紀錄" icon="records" to="/records/" /> -->
      <SettingItem title="關於" icon="about" to="/about/" />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBarWithBack.vue";
import SettingItem from "../components/SettingItem.vue";
export default {
  components: { NavBar, SettingItem },
};
</script>

<style></style>
