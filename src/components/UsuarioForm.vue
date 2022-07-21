<template>
  <form action="">
    <input
      id="nome"
      name="nome"
      type="text"
      v-model="nome"
      placeholder="Nome"
    />
    <input
      id="email"
      name="email"
      type="email"
      v-model="email"
      placeholder="Email"
    />
    <input
      id="senha"
      name="senha"
      type="password"
      v-model="senha"
      placeholder="Senha"
    />
    <input id="cep" name="cep" type="text" v-model="cep" placeholder="Cep" />
    <input id="rua" name="rua" type="text" v-model="rua" placeholder="Rua" />
    <input
      id="numero"
      name="numero"
      type="text"
      v-model="numero"
      placeholder="Numero"
    />
    <input
      id="bairro"
      name="bairro"
      type="text"
      v-model="bairro"
      placeholder="Bairro"
    />
    <input
      id="cidade"
      name="cidade"
      type="text"
      v-model="cidade"
      placeholder="Cidade"
    />
    <input
      id="estado"
      name="estado"
      type="text"
      v-model="estado"
      placeholder="UF"
    />

    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {
  name: "UsuarioForm",
};
</script>

<style scoped>
.button {
  margin: 10px;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}
</style>
