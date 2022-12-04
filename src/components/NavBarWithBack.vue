<template>
  <div
    class="relative flex h-14 w-full items-center bg-gray-700 p-3 px-2 text-lg font-bold text-white"
  >
    <router-link class="absolute" :to="backTo ?? '/'">
      <div
        class="flex h-9 w-9 items-center justify-center rounded-lg p-1.5 transition-all active:bg-black/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-full w-full"
        >
          <path
            fill-rule="evenodd"
            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </router-link>
    <div class="flex h-full w-full items-center justify-center">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["backTo", "title"],
};
</script>
