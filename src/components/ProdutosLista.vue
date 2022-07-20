<template>
  <section class="produtos-container">
    <transition mode="out-in">
      <div v-if="produtos && produtos.length" class="produtos" key="produtos">
        <div class="produto" v-for="(produto, index) in produtos" :key="index">
          <router-link :to="{name: 'produto', params: {id: produto.id}}">
            <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo">
            <p class="preco">{{produto.preco}}</p>
            <h2 class="titulo">{{produto.nome}}</h2>
            <p>{{produto.descricao}}</p>
          </router-link>
        </div>
        <ProdutosPaginar :produtosTotal="produtosTotal" :produtosPorPagina="produtosPorPagina"/>
      </div>
      <div v-else-if="produtos && produtos.length === 0" key="sem-resultados">
        <p class="sem-resultados">Busca sem resultados. Tente buscar outro termo.</p>
      </div>
      <PageLoad key="carregando" v-else/>
    </transition>
  </section>
</template>

<script>
import { api } from "@/services/api.js";
import { serialize } from "@/helpers/helpers.js";
import ProdutosPaginar from "@/components/ProdutosPaginar.vue";

export default {
  name: "ProdutosLista",
  components: {
    ProdutosPaginar,
  },
  data() {
    return {
      produtos: null,
      produtosPorPagina: 5,
      produtosTotal: 0,
    };
  },
  computed: {
    url() {
      //url é um computed quee retorna a url da API
      const query = serialize(this.$route.query); //serialize é uma função que serializa o objeto query para uma string
      return `/produto?_limit=${this.produtosPorPagina}${query}`; // concatena a url com o _limit e o query
    },
  },
  methods: {
    getProdutos() {
      //getProdutos é um método que retorna os produtos da API e os armazena em produtos e produtosTotal
      setTimeout(() => {
        api.get(this.url).then((response) => {
          this.produtosTotal = Number(response.headers["x-total-count"]);
          this.produtos = response.data;
          // console.log(response);
        });
      }, 1000);
    },
  },
  watch: {
    url() {
      //url é um watcher que é chamado quando a url é alterada
      this.getProdutos(); //chama o método getProdutos para atualizar os produtos da API
    },
  },
  created() {
    this.getProdutos(); //getProdutos é chamado quando o componente é criado
  },
};
</script>

<style scoped>
.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
}

.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.produto:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  color: #e80;
  font-weight: bold;
}

.sem-resultados {
  text-align: center;
}
</style>
