import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({ // router é um objeto que é responsável por gerenciar as rotas da aplicação e também é responsável por renderizar o componente correto para a rota atual
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});
