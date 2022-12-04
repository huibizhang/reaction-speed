<template>
  <div class="flex flex-col justify-between space-y-1 p-2">
    <div class="text-sm text-gray-500">{{ title }}</div>
    <div v-html="content" class="flex justify-center leading-none"></div>
  </div>
</template>

<script>
export default {
  props: ["title", "content"],
};
</script>

<style></style>
