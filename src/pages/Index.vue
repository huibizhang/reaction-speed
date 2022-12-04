<template>
  <div class="relative flex h-screen w-screen flex-col items-center bg-black">
    <Header
      v-if="currentState != 'prepare'"
      :title1="title1"
      :title2="title2"
    />
    <NavBar v-if="currentState == 'prepare'" />
    <div
      class="flex w-full flex-1 items-center justify-center p-10 xs:max-w-[360px]"
    >
      <StartGameButton
        v-if="currentState == 'prepare'"
        @click="gameInfoOpened = true"
      />
      <Countdown v-if="currentState == 'countdown'" :val="countdownVal" />
      <Graphic :type="targetGraphic" v-if="currentState == 'game'" />
    </div>
    <div
      class="grid flex-none grid-cols-2 px-4 xs:max-w-[360px]"
      :class="currentState !== 'game' && 'pointer-events-none'"
    >
      <Graphic
        v-for="i in 4"
        :type="i"
        :key="i"
        @mousedown="action(i)"
        class="transition-all active:scale-95 active:brightness-50"
      />
    </div>
    <ScoreBoard
      v-bind="{
        scoreBoardOpened,
        correct,
        wrong,
        reactions,
      }"
      @close="scoreBoardOpened = false"
      @newGame="
        () => {
          correct = 0;
          wrong = 0;
          reactions = [];
          next();
          countdown();
        }
      "
    />
    <GameInfo
      v-bind="{
        gameInfoOpened,
        correct,
        wrong,
        reactions,
      }"
      @close="gameInfoOpened = false"
      @start="
        () => {
          gameInfoOpened = false;
          correct = 0;
          wrong = 0;
          reactions = [];
          next();
          countdown();
        }
      "
    />
    <audio ref="countdownPlayer" :src="`audios/countdown.mp3`"></audio>
    <audio ref="correctPlayer" :src="`audios/correct2.wav`"></audio>
    <audio ref="wrongPlayer" :src="`audios/wrong2.mp3`"></audio>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Graphic from "../components/Graphic.vue";
import Countdown from "../components/Countdown.vue";
import StartGameButton from "../components/StartGameButton.vue";
import ScoreBoard from "../components/ScoreBoard.vue";
import GameInfo from "../components/GameInfo.vue";
import NavBar from "../components/NavBar.vue";

export default {
  data() {
    return {
      currentStateNum: 0,
      state: ["prepare", "countdown", "game"],
      countdownVal: 6,
      title1: "",
      title2: "",
      gameCountdownVal: 31,
      correct: 0,
      wrong: 0,
      targetGraphic: 1,
      startTime: 0,
      endTime: 0,
      reactions: [],
      scoreBoardOpened: false,
      gameInfoOpened: false,
    };
  },
  methods: {
    next() {
      this.currentStateNum = (this.currentStateNum + 1) % this.state.length;
    },
    countdown() {
      if (this.countdownVal > 1) {
        this.countdownVal--;
        this.title1 = `倒數 ${this.countdownVal} 秒開始`;
        this.playAudio("countdownPlayer");
        setTimeout(this.countdown, 1000);
      } else {
        this.countdownVal = 6;
        this.targetGraphic = Math.ceil(Math.random() * 4);
        this.next();
        this.startTime = Date.now();
        this.gameCountdown();
      }
    },
    gameCountdown() {
      if (this.gameCountdownVal > 1) {
        this.gameCountdownVal--;
        this.title1 = `剩餘時間：${this.gameCountdownVal} 秒`;
        this.title2 = `${this.correct} / ${this.wrong}`;

        if (this.gameCountdownVal <= 10) {
          this.playAudio("countdownPlayer");
        }
        setTimeout(this.gameCountdown, 1000);
      } else {
        this.gameCountdownVal = 31;
        this.title1 = this.title2 = "";
        this.next();
        this.scoreBoardOpened = true;
      }
    },
    action(num) {
      if (this.targetGraphic === num) {
        this.correct++;
        this.endTime = Date.now();
        this.reactions.push((this.endTime - this.startTime) / 1000);
        this.playAudio("correctPlayer");

        let temp = Math.ceil(Math.random() * 4);
        if (this.targetGraphic === temp) temp = Math.ceil(Math.random() * 4);
        this.targetGraphic = temp;
        this.startTime = Date.now();
      } else {
        this.wrong++;
        this.playAudio("wrongPlayer");
      }
    },
    playAudio(player) {
      const targetPlayer = this.$refs[player];
      targetPlayer.pause();
      targetPlayer.currentTime = 0;
      targetPlayer.play();
    },
  },
  computed: {
    currentState() {
      return this.state[this.currentStateNum];
    },
  },
  components: {
    Header,
    Graphic,
    Countdown,
    StartGameButton,
    ScoreBoard,
    GameInfo,
    NavBar,
  },
};
</script>
