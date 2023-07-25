// inludes(), slice() e indexOf() servem para arrays

const numeros = [5,4,3,2,1]
console.log(numeros)
const resultado = numeros.reverse()

console.log(numeros)
console.log(resultado)
numeros.pop()
console.log(numeros)
console.log(resultado)
resultado.pop()
console.log(numeros)
console.log(resultado)

// function transfArrayInv (string) {
//   string = string.split("")
//   string.reverse()
//   let retorno = ""
//   for (let cada of string) {
//   retorno  += cada
//   }
//   console.log(retorno)
// }

function transfArrayInv (string) {
  string = string.split("")
  string.reverse()
  console.log(string.join(""))
}

let string1 = "Tudo certo"
console.log(string1)
transfArrayInv(string1)
console.log(string1)

////////////////////////////////

const a = [1,2]
const b = [2,3]
const c = [5,7]

const resultado2 = a.concat(b,c)

console.log(resultado2)
console.log(a)
console.log(b)

//////////////////////////////// ex 80%

function descarte10(array) {
  

  let indInicial = array1.length / 10
  let indInicialARR = Math.round(indInicial)
  let indFinal = array1.length * 0.9
  let indFinalARR = Math.floor(indFinal)

  array = array.slice(indInicialARR , indFinalARR)

  console.log("Incluso: " + indInicial + " // Excluso: " + indFinal)
  console.log("In(ARR): " + indInicialARR + " // Ex(ARR): " + indFinalARR)
  console.log("Porcentagem: " + ((indFinalARR - indInicialARR) / array1.length))

  return array
}

let array1 = [1,2,3,4,5,6,4,7,8,9,10,11,12,13,14,15,16,17,3,5,5,,5,5,,,,5,5,5,,5,5,5,,5,5,5,5,5,5,5,5,,5,5,5,,5,5,5,5,5,5,5,5,5,5,5,5,5,45,64,56,45,64,64,56,45,63,46,3456,345,634,56,345,63,45,63,456,345,6,345,634,56,34,56,345,6,345,6345,6,345,6,345,63,45,6318,19,20] 


console.log(descarte10(array1))
console.log(array1)

//////////////////////////////// 

let array2 = [1, 2, 3, 4, 5, "a", "b", "c"]
console.log(array2)
array2.splice(1, 2, "f")
console.log(array2)
array2.splice(1,2,"g","h")
console.log(array2)
array2.splice(1,0,"ADICIONA SEM REMOVER")
console.log(array2)

// 

let obj1 = { prop: 5 }
let obj2 = obj1
obj1.prop = 10
obj2.prop = 20
console.log("obj1 = ", obj1)
console.log("obj2 = ", obj2)

let array12 = [1,2,3]
let array22 = array12
array12.push(4)
array22.push(5)
console.log("arr1 = ", array12)
console.log("arr2 = ", array22)