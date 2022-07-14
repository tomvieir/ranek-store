<template>
<h1>paginação {{produtosPorPagina}} {{produtosTotal}}</h1>
  
</template>

<script>
export default {
    name: "ProdutosPaginar",
    props: {
        produtosPorPagina: {
            type: Number,
            default: 1
        },
        produtosTotal: {
            type: Number,
            default: 1
        }
    },

}
</script>

<style>

</style>