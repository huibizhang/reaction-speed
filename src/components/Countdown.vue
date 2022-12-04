<template>
  <div
    class="flex aspect-square w-full items-center justify-center rounded-full bg-white text-8xl ring-8 ring-orange-500"
  >
    {{ val }}
  </div>
</template>

<script>
export default {
  props: ["val"],
};
</script>
