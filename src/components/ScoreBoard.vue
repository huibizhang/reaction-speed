<template>
  <div
    class="absolute flex h-screen w-screen items-center justify-center p-3 transition-all"
    :class="scoreBoardOpened ? 'opacity-100' : 'pointer-events-none opacity-0'"
  >
    <div class="absolute h-full w-full bg-black/70"></div>
    <div
      class="z-10 flex w-full max-w-xs flex-col rounded-xl bg-white shadow-lg transition-all"
      :class="!scoreBoardOpened && 'scale-0'"
    >
      <div
        class="relative flex items-center justify-center border-b p-3 font-black"
      >
        測驗結果
        <div
          class="absolute right-2 h-8 w-8 rounded-full bg-gray-100 p-1.5 transition-all active:bg-gray-200"
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
        <InfoCard title="答對題數" :content="correct" />
        <InfoCard title="錯誤次數" :content="wrong" />
        <InfoCard title="得分" :content="correct * 5 - wrong * 10" />
        <InfoCard title="平均答題" :content="`${reactionPerQ} 秒`" />
        <InfoCard title="平均反應" :content="`${reactionPerCorrect} 秒`" />
      </div>
      <div class="mt-2 p-2">
        <div
          class="flex w-full justify-center rounded-lg bg-blue-600 py-3 font-bold text-white transition-all active:scale-95 active:bg-blue-700"
          @click="newGame()"
        >
          重新挑戰
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoCard from "./InfoCard.vue";
export default {
  props: ["scoreBoardOpened", "correct", "wrong", "reactions"],
  methods: {
    close() {
      this.$emit("close");
    },
    newGame() {
      this.$emit("newGame");
      this.close();
    },
  },
  watch: {
    scoreBoardOpened(newVal, oldVal) {
      if (newVal) {
        const ls = window.localStorage;
        const records = JSON.parse(ls.getItem("records")) ?? [];

        records.push({
          reactionPerQ: this.reactionPerQ,
          reactionPerCorrect: this.reactionPerCorrect,
          correct: this.correct,
          wrong: this.wrong,
          score: this.correct * 5 - this.wrong * 10,
          timestamp: Date.now(),
        });
        window.localStorage.setItem("records", JSON.stringify(records));
      }
    },
  },
  computed: {
    reactionPerQ() {
      return (30 / this.correct).toFixed(5);
    },
    reactionPerCorrect() {
      const average =
        this.reactions.reduce((a, b) => a + b, 0) / this.reactions.length;
      return average.toFixed(5);
    },
  },
  components: { InfoCard },
};
</script>

<style></style>
