<template>
  <div
    class="flex aspect-square w-full items-center justify-center text-white"
    :class="[
      type == '1' && 'bg-red-400',
      type == '2' && 'bg-purple-400',
      type == '3' && 'bg-green-400',
      type == '4' && 'bg-pink-400',
    ]"
  >
    <svg
      v-if="type == '1'"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      class="h-3/5 w-3/5 fill-none stroke-current stroke-[8]"
    >
      <circle cx="52" cy="52" r="44" />
    </svg>
    <svg
      v-if="type == '2'"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      class="h-3/5 w-3/5 fill-none stroke-current stroke-[8]"
    >
      <line x1="6" y1="6" x2="94" y2="94" />
      <line x1="94" y1="6" x2="6" y2="94" />
    </svg>
    <svg
      v-if="type == '3'"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      class="h-3/5 w-3/5 fill-none stroke-current stroke-[8]"
    >
      <polygon points="6,94 94,94 50,13.397" />
    </svg>
    <svg
      v-if="type == '4'"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      class="h-3/5 w-3/5 fill-none stroke-current stroke-[8]"
    >
      <rect x="4" y="4" width="92" height="92" />
    </svg>
  </div>
</template>

<script>
export default {
  props: ["type"],
};
</script>

<style></style>
