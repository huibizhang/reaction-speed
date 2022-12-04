<template>
  <div
    class="relative flex h-screen w-screen select-none flex-col items-center bg-gray-900"
  >
    <NavBar title="關於" backTo="/setting/" />
    <div class="w-full flex-1 space-y-2 p-5 text-white">
      <GameInfoCard title="開發者" content="搋兔" class="text-white" />
      <div class="h-0 w-full border-t border-gray-700"></div>
      <GameInfoCard title="信箱" :content="email" class="text-blue-500" />
    </div>
  </div>
</template>

<script>
import GameInfoCard from "../components/GameInfoCard.vue";
import NavBar from "../components/NavBarWithBack.vue";
import SettingItem from "../components/SettingItem.vue";
export default {
  data() {
    return {
      email: '<a href="mailto:naruto6404@gmail.com">naruto6404@gmail.com</a>',
    };
  },
  components: { NavBar, SettingItem, GameInfoCard },
};
</script>

<style></style>
