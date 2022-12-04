<template>
  <div
    class="absolute flex h-screen w-screen items-center justify-center p-3 transition-all"
    :class="gameInfoOpened ? 'opacity-100' : 'pointer-events-none opacity-0'"
  >
    <div class="absolute h-full w-full bg-black/70"></div>
    <div
      class="z-10 flex w-full max-w-xs flex-col rounded-xl bg-white shadow-lg transition-all"
      :class="!gameInfoOpened && 'scale-0'"
    >
      <div class="relative border-b p-3 text-center font-black">
        遊戲說明
        <div
          class="absolute top-2 right-2 h-8 w-8 rounded-full bg-gray-100 p-1.5 transition-all active:bg-gray-200"
          @click="close()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-full w-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div class="group flex flex-1 flex-col px-2">
        <GameInfoCard title="玩法" content="點擊與上方相對應圖示" />
        <GameInfoCard content="測試反應速度" />
        <GameInfoCard
          title="規則"
          content="每答對一題加 5 分，<br>每答錯一次扣 10 分"
        />
        <div class="pt-5 text-center">遊戲時間：30 秒</div>
      </div>
      <div class="mt-2 p-2">
        <div
          class="flex w-full justify-center rounded-lg bg-blue-600 py-3 font-bold text-white transition-all active:scale-95 active:bg-blue-700"
          @click="start()"
        >
          開始
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameInfoCard from "./GameInfoCard.vue";
export default {
  props: ["gameInfoOpened"],
  methods: {
    close() {
      this.$emit("close");
    },
    start() {
      this.$emit("start");
    },
  },
  computed: {
    reactionPerQ() {
      return `${(30 / this.correct).toFixed(5)} 秒`;
    },
    reactionPerCorrect() {
      const average =
        this.reactions.reduce((a, b) => a + b, 0) / this.reactions.length;
      return `${average.toFixed(5)} 秒`;
    },
  },
  components: { GameInfoCard },
};
</script>

<style></style>
