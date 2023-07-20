let paises = ["brasil","argentina","chile","bolivia","costa rica"]
paises.push("finlandia")
console.log(paises)
paises.pop()
console.log(paises)
paises.unshift("primeiropais")
console.log(paises)
paises.shift()
console.log(paises)
console.log(paises[paises.length-1])
console.log(paises[1])
console.log(paises[2])

console.log("") // espaço

let i = 0
while (i < paises.length){
  console.log(paises[i])
  i++
}

console.log("") // espaço

for (let ind = 0 ; ind < paises.length ; ind++){
console.log(paises[ind])
}

console.log("") // espaço

let numeros = [54,45,33,67]
let soma = 0
for (let indice = 0 ; indice < numeros.length ; indice++){
  soma += numeros[indice];
  if (indice == numeros.length -1){
  console.log(soma)
  }
}

console.log("") // espaço

for (let num of numeros){
  console.log(num)
}

console.log("") // espaço

const palav = 'Alemana'
let encontr = false
for (let letra of palav){
  if (letra === 'h') {
    console.log('tem H')
    encontr = true
    break
  }
}

if (!encontr){
  console.log("não tem H")
}

console.log("") // espaço

const palavra = 'abracaaadabra'
quantidade = 0

for (let letras of palavra) {
  if (letras == 'a') {
    quantidade++
  }
}

console.log(quantidade)

console.log("") // espaço

for (let i1 = 10 ; i1 >= 0 ; i1--){
  console.log(i1)
}

console.log("") // espaço

for (let i2 = 1; i2 <= 50 ; i2++) {
  if (i2%2 == 0){
    console.log(i2)
  }
}