import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import "./css/estilos.css";
import VueParticles from "vue-particles";
import PrimeVue from "primevue/config";

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(VueParticles);
app.mount("#app");
