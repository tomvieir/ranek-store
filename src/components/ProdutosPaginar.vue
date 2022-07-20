<template>
  <ul v-if="paginasTotal > 1">
    <li v-for="pagina in paginas" :key="pagina">
      <router-link :to="{query: query(pagina)}">{{pagina}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProdutosPaginar",
  props: {
    produtosPorPagina: {
      // Quantidade de produtos por página
      type: Number,
      default: 1,
    },
    produtosTotal: {
      // Quantidade total de produtos
      type: Number,
      default: 1,
    },
  },

  methods: {
    query(pagina) {
      //esta função retorna o objeto query que será usado no router-link
      return {
        ...this.$route.query, //pega o objeto query atual
        _page: pagina, //adiciona o _page com o valor da página
      };
    },

    
    //-----------ISSO VAI PRO LIXO LOGO MAIS----------------

    // nextPage() {
    //   //essa função é chamada quando o botão >> é clicado
    //   const pagina = this.$route.query._page; //pega a página atual
    //   const novaPagina = pagina ? Number(pagina) + 1 : 2; //se a página existir, adiciona 1 a ela, senão, adiciona 2
    //   if (novaPagina <= this.paginas.length) { //se a nova página for menor ou igual ao número de páginas
    //     this.$router.push({ //altera o router para a nova página
    //       query: {
    //         ...this.$route.query, //pega o objeto query atual
    //         _page: novaPagina, //adiciona o _page com o valor da nova página
    //       },
    //     });
    //   }
    // },

    // prevPage() {
    //   //essa função é chamada quando o botão << é clicado
    //   const pagina = this.$route.query._page; //pega a página atual
    //   const novaPagina = pagina ? Number(pagina) - 1 : 1; //se a página existir, subtrai 1 a ela, senão, adiciona 1
    //   if (novaPagina > 1) { //se a nova página for maior que 1
    //     this.$router.push({ //altera o router para a nova página
    //       query: {
    //         ...this.$route.query, //pega o objeto query atual
    //         _page: novaPagina, //adiciona o _page com o valor da nova página
    //       },
    //     });
    //   } //chave de fechamento do if
      
    // },
    
  },

  computed: {
    paginas() {
      const current = Number(this.$route.query._page) || 1; //pega o _page atual ou se não existir, pega o 1
      const range = 9;
      const offset = Math.ceil(range / 2); //pega o valor do offset
      const total = this.produtosTotal;
      const pagesArray = []; //cria um array vazio

      for (let i = 1; i <= total; i++) {
        pagesArray.push(i); //adiciona o número da página no array
      }

      pagesArray.splice(0, current - offset); //remove o primeiro número do array
      pagesArray.splice(range, total);

      return pagesArray;

      console.log(pagesArray);
    },

    paginasTotal() {
      // paginasTotal é um computed property que depende de produtosTotal e produtosPorPagina e retorna um array de números de páginas que serão exibidas na página de produtos
      const total = this.produtosTotal / this.produtosPorPagina; // calcula o total de páginas
      return total !== Infinity ? Math.ceil(total) : 0; // arredonda o total de páginas para cima
    },
  },
};
</script>

<style>
ul {
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 2rem;
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
