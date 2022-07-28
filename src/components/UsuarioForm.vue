<template>
  <form>
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" v-model="nome" />
    <label for="email">Email</label>
    <input id="email" name="email" type="email" v-model="email" />
    <label for="senha">Senha</label>
    <input id="senha" name="senha" type="password" v-model="senha" />
    <label for="cep">Cep</label>
    <div class="cepInput">
      <input
        id="cep"
        name="cep"
        type="text"
        v-model="cep"
        @keyup="preencherCep"
      />
      <span v-if="erro == 'true'">Cep Inválido!</span>
    </div>

    <label for="rua">Rua</label>
    <input id="rua" name="rua" type="text" v-model="rua" />
    <label for="numero">Numero</label>
    <input id="numero" name="numero" type="text" v-model="numero" />
    <label for="bairro">Bairro</label>
    <input id="bairro" name="bairro" type="text" v-model="bairro" />
    <label for="cidade">Cidade</label>
    <input id="cidade" name="cidade" type="text" v-model="cidade" />
    <label for="estado">Estado</label>
    <input id="estado" name="estado" type="text" v-model="estado" />
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { getCep } from "@/services/api.js";
import { mapFields } from "@/helpers/helpers.js";

export default {
  name: "UsuarioForm",
  data() {
    return {
      erro: "",
    };
  },

  computed: {
    ...mapFields({
      // mapFields é um helper que retorna um objeto com as propriedades de um objeto baseado em um array de campos e um nome de base de dados
      fields: [
        "nome",
        "email",
        "senha",
        "rua",
        "cep",
        "numero",
        "bairro",
        "cidade",
        "estado",
      ],
      base: "usuario",
      mutation: "UPDATE_USUARIO",
    }),
  },

  methods: {
    preencherCep() {
      const cep = this.cep.replace(/\D/g, "");

      if (cep.length === 8) {
        getCep(cep).then((response) => {
          this.rua = response.data.logradouro;
          this.bairro = response.data.bairro;
          this.cidade = response.data.localidade;
          this.estado = response.data.uf;
          this.erro = response.data.erro;
          console.log(response);
        });
      }
    },
  },
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

.cepInput {
  position: relative;
}

#cep {
  width: 100%;
}

span {
  position: absolute;
  right: 0;
  transform: translateY(100%);
  margin-right: 10px;
}
</style>
