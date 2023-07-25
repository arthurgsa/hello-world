// String Methods são métodos para trabalhar mais facilmente com strings
// Buscar referências no MDN 
// includes(arg) retorna booleano se possui o argumento
// indexOf(arg) retorna primeira ocorrencia do argumento
// lastIndexOf(arg) retorna ultima ocorrencia do argumento
// slice(arg1,arg2) retorna pedaço de string
// replace(arg1,arg2) retorna substituindo a primeira ocorrencia do arg1 por arg2
// toUpperCase(), toLowerCase() maiusculas e minusculas
// trim(), apaga espaços no começo e no fim
// padStart(length,text), preenche com text até length
// split(arg1), separa a string em uma array a cada arg1  

let textoBase = "Oi meu nome é Arthur. Meu email é arthur@email.com"

console.log(textoBase.includes("Oi"))
console.log(textoBase.indexOf("Arth"))
console.log(textoBase.indexOf("a"))
console.log(textoBase.lastIndexOf("a"))
console.log(textoBase.slice(40))
console.log(textoBase)
console.log(textoBase.replace("m","M"))
console.log(textoBase)

////////////////////////////////////////////////////////////////////////////////

let string1 = "9.87.5.0"

function substituirTudo(string,antigo,novo) {
  while (string !== string.replace(antigo,novo)) 
    string = string.replace(antigo,novo)
  return string
}

console.log(string1)
console.log(substituirTudo(string1,".",","))
console.log(string1)

////////////////////////////////////////////////////////////////////////////////

let email1 = "  arthurLOUco@loucurameu.nossa   "

console.log(email1)
console.log(email1 = email1.trim())
console.log(email1)
console.log(email1 = email1.toUpperCase())
console.log(email1)
console.log(email1 = email1.toLowerCase())
console.log(email1)

//

let ultimos4Dig = "1234"

console.log(`Seu cartão é: ${ultimos4Dig.padStart(19,"**** ")}`)

//

function imprimirData(dia,mes,ano) {
  console.log(`${dia}`.padStart(2,0)+"/"+String(mes).padStart(2,0)+"/"+String(ano).padStart(4,0))
}

imprimirData(5,6,995)

// 

let string2 = "arTHur gabrIel sOuza ARAujo"
let string3 = "arTHur gabrIel sOuza ARAujo"

function criarArrayNome (string) {
  string = string.split(" ")
  return string
}


console.log(string2)
console.log(criarArrayNome(string2))
console.log(string2)
console.log(string2 = criarArrayNome(string2))
console.log(string2)

// ex transforme em nome padrao

function nomePadrao(string) {
  string = string.split(" ")
  let stringRetorno = ""
  for (let cada of string) {
    stringRetorno += cada[0].toUpperCase() + cada.slice(1).toLowerCase() + " "
  }
  return stringRetorno.trim()
}

nomePadrao(string3)
console.log(string3)
console.log(nomePadrao(string3))