import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.png", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "反應速度SpeedUp!",
        short_name: "反應速度SpeedUp!",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        lang: "zh",
        scope: "/",
        description: "訓練反應速度的小遊戲",
        theme_color: "#000000",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
