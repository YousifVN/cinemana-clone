import "./assets/main.css";
import "ant-design-vue/dist/reset.css";
import api from "./services/api";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";

const app = createApp(App);

app.config.globalProperties.$http = api; // Correct way to add global properties in Vue 3

app.use(createPinia());
app.use(router);
app.use(Antd);

app.mount("#app");
