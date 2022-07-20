import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PageLoad from "./components/PageLoad.vue";

Vue.config.productionTip = false;

Vue.component("PageLoad" , PageLoad);

Vue.filter("numeroPreco", valor => {
  valor = Number(valor);

  if (!isNaN(valor)) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2
    });    
  } else {
    return "";
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
