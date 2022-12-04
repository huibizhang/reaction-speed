import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./route";

import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});

createApp(App).use(router).mount("#app");
