import "./assets/main.css";
import "ant-design-vue/dist/reset.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import PrimeVue from "primevue/config";
import Aura from "@/presets/lara";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Antd);
app.use(PrimeVue, {
  unstyled: true,
  pt: Aura,
});

app.mount("#app");
