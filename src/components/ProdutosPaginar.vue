<template>
  <div>
    <ul>
      <li v-for="pagina in paginasTotal" :key="pagina">  
        <router-link :to="{ query: query(pagina) }">{{ pagina }}</router-link>  
      </li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProdutosPaginar",
  props: {
    produtosPorPagina: { // Quantidade de produtos por página
      type: Number,
      default: 1, 
    },
    produtosTotal: { // Quantidade total de produtos
      type: Number,
      default: 1,
    },
  },

  methods: {
    query(pagina) {   //esta função retorna o objeto query que será usado no router-link 
      return {
        ...this.$route.query, //pega o objeto query atual
        _page: pagina, //adiciona o _page com o valor da página
      };
    },
  },

  computed: {
    paginasTotal() {  // paginasTotal é um computed property que depende de produtosTotal e produtosPorPagina e retorna um array de números de páginas que serão exibidas na página de produtos
      const total = this.produtosTotal / this.produtosPorPagina; // calcula o total de páginas
      return total !== Infinity ? Math.ceil(total) : 0; // arredonda o total de páginas para cima
    },
  },
};
</script>

<style>
ul {
  grid-column: 1 / -1;
}

li {
  display: inline-block;
}

li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}

li a.router-link-exact-active,
li a:hover {
  background: #87f;
  color: #fff;
}
</style>
