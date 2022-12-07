<template>
  <div class="flex rounded-lg bg-gray-700">
    <div class="flex-none p-2">
      <div
        class="flex h-full w-14 items-center justify-center rounded-xl text-lg font-bold"
        :class="[
          reactionPerCorrect < reactionPerQ
            ? 'bg-green-300 text-green-700'
            : 'bg-red-300 text-red-700',
        ]"
      >
        {{ score }}
      </div>
    </div>
    <div class="flex flex-1 flex-col">
      <div class="flex justify-between py-2 pr-3 text-sm">
        <div class="flex flex-1 pl-2">
          <div class="flex-1">{{ `O：${correct}` }}</div>
          <div class="flex-1">{{ `X：${wrong}` }}</div>
        </div>
        <div class="flex-1 text-right">{{ timeago(timestamp) }}</div>
      </div>
      <div class="flex items-center border-t border-gray-500">
        <div class="flex-1 p-2">
          <div class="text-sm text-gray-300">平均答題</div>
          <div class="text-sm">
            <span class="text-xl font-bold">{{ reactionPerQ }}</span> 秒
          </div>
        </div>
        <!-- <div class="h-1/2 w-0 border-l"></div> -->
        <div class="flex-1 p-2">
          <div class="text-sm text-gray-300">平均反應</div>
          <div class="text-sm">
            <span class="text-xl font-bold">{{ reactionPerCorrect }}</span> 秒
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "reactionPerQ",
    "reactionPerCorrect",
    "correct",
    "wrong",
    "score",
    "timestamp",
  ],
  methods: {
    timeago(dateTimeStamp) {
      //dateTimeStamp是一個時間毫秒，註意時間戳是秒的形式，在這個毫秒的基礎上除以1000，就是十位數的時間戳。13位數的都是時間毫秒。
      var minute = 1000 * 60; //把分，時，天，周，半個月，一個月用毫秒表示
      var hour = minute * 60;
      var day = hour * 24;
      var week = day * 7;
      var halfamonth = day * 15;
      var month = day * 30;
      var now = new Date().getTime(); //獲取當前時間毫秒
      console.log(now);
      var diffValue = now - dateTimeStamp; //時間差

      var result = "";

      if (diffValue < 0) {
        return;
      }
      var minC = diffValue / minute; //計算時間差的分，時，天，周，月
      var hourC = diffValue / hour;
      var dayC = diffValue / day;
      var weekC = diffValue / week;
      var monthC = diffValue / month;
      if (monthC >= 1 && monthC <= 3) {
        result = " " + parseInt(monthC) + "月前";
      } else if (weekC >= 1 && weekC <= 3) {
        result = " " + parseInt(weekC) + "周前";
      } else if (dayC >= 1 && dayC <= 6) {
        result = " " + parseInt(dayC) + "天前";
      } else if (hourC >= 1 && hourC <= 23) {
        result = " " + parseInt(hourC) + "小時前";
      } else if (minC >= 1 && minC <= 59) {
        result = " " + parseInt(minC) + "分鐘前";
      } else if (diffValue >= 0 && diffValue <= minute) {
        result = "剛剛";
      } else {
        var datetime = new Date();
        datetime.setTime(dateTimeStamp);
        var Nyear = datetime.getFullYear();
        var Nmonth =
          datetime.getMonth() + 1 < 10
            ? "0" + (datetime.getMonth() + 1)
            : datetime.getMonth() + 1;
        var Ndate =
          datetime.getDate() < 10
            ? "0" + datetime.getDate()
            : datetime.getDate();
        var Nhour =
          datetime.getHours() < 10
            ? "0" + datetime.getHours()
            : datetime.getHours();
        var Nminute =
          datetime.getMinutes() < 10
            ? "0" + datetime.getMinutes()
            : datetime.getMinutes();
        var Nsecond =
          datetime.getSeconds() < 10
            ? "0" + datetime.getSeconds()
            : datetime.getSeconds();
        result = Nyear + "-" + Nmonth + "-" + Ndate;
      }
      return result;
    },
  },
};
</script>
