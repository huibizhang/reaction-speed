<template>
  <div
    class="relative flex h-screen w-screen select-none select-none flex-col items-center bg-gray-900"
  >
    <NavBar title="測驗紀錄" backTo="/setting/" />
    <div class="w-full flex-1"></div>
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
