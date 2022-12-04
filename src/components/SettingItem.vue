<template>
  <router-link :to="to ?? '/setting/'">
    <div
      class="flex w-full items-center border-t border-t-gray-700 p-3 text-white transition-all first:border-t-0 active:bg-gray-800"
    >
      <div class="mx-4 h-8 w-8"><Icon :type="icon" /></div>
      <div class="flex-1">{{ title }}</div>
    </div>
  </router-link>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  components: { Icon },
  props: ["title", "icon", "to"],
};
</script>

<style></style>
