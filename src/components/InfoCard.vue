<template>
  <div class="flex items-center justify-between border-t p-2 first:border-t-0">
    <div class="text-sm text-gray-500">{{ title }}</div>
    <div class="flex justify-center text-2xl font-bold leading-none">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "content"],
};
</script>

<style></style>
