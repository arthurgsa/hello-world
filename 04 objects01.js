const pessoa = {
  nome: "José",
  altura: 1.74,
  peso: 60
}
console.log(pessoa.nome)
pessoa.nome = "pedro"
console.log(pessoa.nome)
pessoa["nome"] = "Julio"
console.log(pessoa.nome)
pessoa['nome'] = "Matheus"
console.log(pessoa.nome)

const homemComApelidos = {
  nome: "arthur",
  idade: 26,
  altura: 1.71,
  temCNH: true,
  apelidos: ["pateta", "tuinha"]
}

let auxNao = (homemComApelidos.temCNH ? "" : "não ")

console.log(`${homemComApelidos.nome} tem ${homemComApelidos.idade}, ${homemComApelidos.altura} de altura, ${auxNao}possui CNH e os seguintes apelidos:`)

for (let apelido of homemComApelidos.apelidos) {
  console.log(`- ${apelido}`)
}

///////////////

const mulher1 = {
  nome: "julia",
  altura: 1.65,
  peso: 70,
  ccarro: {
    marca: "Toyota",
    modelo: "Etios",
    ano: 2020,
    potencia: 80
  }
}

console.log(mulher1.ccarro.marca)

const ccarro = {
  marca: "Toyota",
  modelo: "Etios",
  ano: 2020,
  potencia: 80
}

const mulher2 = {
  nome: "julia",
  altura: 1.65,
  peso: 70,
  ccarro // ccarro: ccarro shorthand
}

console.log(mulher2.ccarro.marca)

//////////////////////////

const produtos = [
  {
  nome: "farinha",
  preco: 210, // centavos
  qntComprada: 3
},
{
  nome: "açucar",
  preco: 250, // centavos
  qntComprada: 4
},
{
  nome: "pimenta",
  preco: 310, // centavos
  qntComprada: 5
}
]

const cartaoConsumoCliente = {
  nome: "Juliano",
  idade: 23,
  produtos  
}

console.log(`
Nome: ${cartaoConsumoCliente.nome}
Idade: ${cartaoConsumoCliente.idade}`)

cartaoConsumoCliente.idade = 24

console.log(`
Idade: ${cartaoConsumoCliente.idade}
Nome do primeiro produto: ${cartaoConsumoCliente.produtos[0].nome}
Preço do ultimo produto: ${cartaoConsumoCliente.produtos[cartaoConsumoCliente.produtos.length - 1].preco}`)

let totalPagar = 0
for (let produto of produtos) {
  totalPagar += produto.preco * produto.qntComprada
}

console.log(`Prezado Sr(a) ${cartaoConsumoCliente.nome}, você deve pagar R$ ${(totalPagar / 100).toFixed(2)} reais`)

///////////////

const boneco = {
  material: "plastico",
  preco: 540,
  quantidadeBnc: 3,
  dono: "Arthur"
}

const {material, dono, ...restoVar} = boneco

console.log(material, dono, restoVar)
/////////////

const juntaTudo = {
  ...boneco,
  ...ccarro,
  newPropriety: 20
}

console.log(juntaTudo)