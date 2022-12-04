<template>
  <div
    class="flex h-14 w-full items-center justify-between bg-gray-700 p-3 text-lg font-bold text-white"
  >
    <div>{{ title1 !== "" ? title1 : "反應速度SpeedUp!" }}</div>
    <div>{{ title2 }}</div>
  </div>
</template>

<script>
export default {
  props: ["title1", "title2"],
};
</script>
