import Vue from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'

// Pages
import Home from '@/pages/Home';
import Aboutus from "@/pages/Aboutus";
import Projects from "@/pages/Projects";
import Gallery from "@/pages/Gallery";

Vue.use(VueRouter);

Vue.config.productionTip = false

require('@/main.scss');

const routes = [
  { path: '/', component: Home },
  { path: '/aboutus', component: Aboutus },
  { path: '/projects', component: Projects },
  { path: '/gallery', component: Gallery },
];

const router = new VueRouter({mode: 'history', routes});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')