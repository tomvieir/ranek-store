import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Produto from "./views/Produto.vue";
import Login from "./views/Login.vue";
import Usuario from "./views/Usuario/Usuario.vue";

Vue.use(Router);

export default new Router({ // router é um objeto que é responsável por gerenciar as rotas da aplicação e também é responsável por renderizar o componente correto para a rota atual
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/produto/:id",
      name: "produto",
      component: Produto,
      props: true
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },

    {
      path: "/usuario",
      name: "usuario",
      component: Usuario
    },
  ],

  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: "smooth"} );
  }
});
