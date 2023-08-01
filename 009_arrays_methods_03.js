// sort() 
// - se houver callback: 
// - se o retorno for negativo, o primeiro parametro vem antes do segundo. 
// - se o retorno for negativo, o primeiro parametro vem antes do segundo.

const numeros = [1, 3, 2, 32, 23, 4, 34, 45, 64, 5]
const numeros2 = [1, 3, 2, 32, 23, 4, 34, 45, 64, 5]
numeros.sort()
numeros2.sort((a,b) => {
  return a - b // ordenação numerica crescente
})
console.log(numeros)
console.log(numeros2)

//
// ex 01 crescente e descrescente

const usuarios = [
  { id: 11, nome: 'joao', idade: 23 },
  { id: 2, nome: 'maria', idade: 18 },
  { id: 4, nome: 'ana', idade: 30 },
  { id: 1, nome: 'rodrigo', idade: 17 },
  { id: 123, nome: 'rodrigo', idade: 17 }
];

usuarios.sort((a,b) => {
  return a.id - b.id
})

console.log(usuarios)

usuarios.sort((a,b) => {
  return b.id - a.id
})

console.log(usuarios)

///// ordenação de strings

const pessoas = ['João', 'ana', 'Carlos', 'beatriz']
pessoas.sort()
console.log(pessoas)

pessoas.sort((a,b) => {
  return a.localeCompare(b)
})
console.log(pessoas)

pessoas.sort((a,b) => {
  return b.localeCompare(a)
})
console.log(pessoas)

//
// Ex 02 - carros ordenação

const carros = [
  { nome: "corola", marca: "toyota", ano: "2020", cor: "prata" },
  { nome: "argo", marca: "fiat", ano: "2021", cor: "preto" },
  { nome: "ranger", marca: "ford", ano: "2021", cor: "prata" },
  { nome: "hilux", marca: "toyota", ano: "2018", cor: "branco" },
]

const ordernarCarros = (array,campo) => {
  array.sort((a,b) => {
    return a[campo].localeCompare(b[campo])
})

console.log(array)
}

ordernarCarros(carros,'cor')

// reduce - executa função callback em cada elemento. retorna um unico valor

const numero3 = [0,1,2,3,4]



let result2 = numero3.reduce((ac,va,i,array) => {
  console.log(i)
  console.log(array)
  console.log(ac+va)
  return ac + va
},15)

console.log(result2)

// array de arrays

const matriz = [
  [0,1],
  [2,5,4],
  [14,22,98]
]

const arrayReduzido = matriz.reduce((ac,va,i,array) => {
  return [...ac, ...va]
}, [5,77])

console.log(arrayReduzido)

//
// ex 03 -reduce filtrar usuario com maior idade
const usuarios2 = [
  { id: 11, nome: "joao", idade: 23 },
  { id: 2, nome: "maria", idade: 18 },
  { id: 4, nome: "ana", idade: 30 },
  { id: 1, nome: "rodrigo", idade: 17 },
  { id: 123, nome: "rodrigo", idade: 17 },
]

const usuarioVelho = usuarios2.reduce((ac,va,i,array) => {
  console.log(`Acumulador: ${ac.idade}`);
  console.log(`Valor Atual: ${va.idade}`);
  console.log(`Indice do valor atual: ${i}`);
  if (ac.idade < va.idade)
  return va
  else
  return ac
  
  

})

console.log(usuarioVelho)