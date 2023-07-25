function imprimirOla() {
  console.log("Olá!")
}

imprimirOla()

///
console.log("")
///

function cumprimentar(pessoa,idade) {
  console.log(`olá, ${pessoa} fiquei sabendo que você tem ${idade} anos`)
}

idade = 12
cumprimentar("josé",5)
cumprimentar("maria",idade)
cumprimentar("carlos")

///
console.log("")
///

const pessoa1 = {
  nome: "arthur",
  idade: 442,
  profissao: "estudante",
  altura: 1.71
}

function apresentar(pessoa) {
  

  console.log(`Olá! Meu nome é ${pessoa.nome}, sou um ${jovAdltIds(pessoa.idade)} de ${pessoa.idade} anos, ${pessoa.altura} e sou ${pessoa.profissao}`)
}

apresentar(pessoa1)

///
console.log("")
///

function verificarIdade(idade) {
  if (idade >= 18)
  return true
  else
  return false
}

let verificacao = verificarIdade(20)

console.log(verificacao)

///
console.log("")
///

function jovAdltIds(idade) {
  
  if (idade < 22)
  return "jovem"
  else if (idade < 66)
  return "adulto"
  else
  return "idoso"
}

let souOq = jovAdltIds(244)
console.log(souOq)

///
console.log("")
///

const soma = (x,y) => {
  // 1 parametro pode omitir parenteses
  // return direto pode omitir chaves
  // variavel  
  // hoisting
}