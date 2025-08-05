const pessoa = {
  nome: "Lucas",
  falar: function () {
    console.log("Olá, eu sou o " + this.nome);
  },
};
pessoa.falar(); // Olá, eu sou o Lucas
