<template>
    <form action="">
        <input name="busca" id="busca" type="text" placeholder="Buscar produto" v-model="busca"> <!-- Busca é um input que será usado para buscar produtos -->
        <input type="submit" id="lupa" value="Buscar" @click.prevent="buscarProdutos"> <!-- @click.prevent="buscarProdutos" é um evento que impede que o formulário seja enviado -->
    </form>

</template>

<script>
export default {
   data() {
      return {
         busca: "" //busca é um data que armazena o valor do campo de busca
      }
   },
   methods: {
    buscarProdutos() { //buscarProdutos é um método que busca os produtos da API e redireciona para a página de produtos
        this.$router.push({ //redireciona para a página de produtos
            query: { //query é um objeto que armazena os parâmetros da URL
                q: this.busca //q é um parâmetro que armazena o valor do campo de busca
            }
        });
    }
   }

};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

#busca {
  width: 100%;
  padding: 20px;
  border: none;
}

#busca:focus,
#busca:hover {
  transform: scale(1.1);
}

#lupa {
  width: 62px;
  height: 62px;
  background: url("../assets/search.svg") no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: none;
}
</style>
