export function serialize(obj) {
  // serialize é uma função que recebe um objeto e retorna uma string serializada do objeto passado como parâmetro (JSON.stringify) e substitui os espaços em branco por '%20'   (%20 é o caracter que representa um espaço em branco)
  let queryString = ""; 
  for (let key in obj) { // para cada chave do objeto
    queryString += `&${key}=${obj[key]}`; // concatena a chave e o valor do objeto em uma string como se fosse uma query string (?key=value&key=value)
  }
  return queryString; // retorna a string como query string 
}
