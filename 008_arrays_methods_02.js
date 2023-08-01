// **--** conhecimentos: callbacks, every, some

////////////////////////////////////////////// callbacks 1
// console.log('-- CALLBACKS 1');
// const imprimirNome = () => {
//   console.log('Meu nome é Arthur');
// }

// setTimeout(() => {
//   imprimirNome()
// }, 5000);

// setTimeout(imprimirNome, 2000)

// setTimeout(() => {
//   console.log('Meu nome é Arthur 2')
// }, 3000)

// setTimeout(function () {
//   console.log('Arthur 3');
// }, 4000)

// ////////////////////////////////////////////// callbacks 2
// console.log('-- CALLBACKS 2');
// // setInterval(() => {
// //   console.log('Periodico');
// // }, 5000)

// const imprimir = () => {
//   console.log('periodico 2');
//   clearInterval(interval);
// }

// const interval = setInterval(imprimir, 2000)

// let num = 10

// const contador = setInterval(function () {
//   console.log(num)
//   num--

//   if (num === 0) {
//     console.log('BOOOOM!')
//     clearInterval(contador)
//   }

// }, 1000)

//////////////////////////////////////////////// every
console.log('-- EVERY');
const numeros = [1, 2, 3, 4]

const resultado0 = numeros.every((elementoAtual) => {
  return elementoAtual < 5
})

const frutas = ['abacaxi', 'manga', 'melancia']

const resultado1 = frutas.every(function (cada) {
  return cada !== 'manga'
})

const resultado2 = frutas.every((cada) => {
  return cada !== 'banana'
})

console.log(resultado1)
console.log(resultado2)

///
/// Exercicio checar se todos são maior de idade.
console.log('-- EVERY exercicio');
const listaFesta = [
  {
    nome: 'Arthur',
    idade: 19
  },
  {
    nome: 'Felipe',
    idade: 19
  },
  {
    nome: 'Julio',
    idade: 23
  }
]
//funçao ja criada 
function maiorIdade(pessoa) {
  return pessoa.idade >= 18
}

const fiscalizarFesta1 = (lista) => {
  const result = lista.every(maiorIdade)

  if (result) {
    console.log('Festa liberada! 1');
  } else {
    console.log('Possui menor de idade! 1');
  }
}

fiscalizarFesta1(listaFesta)

//funçao criada na hora 
const fiscalizarFesta2 = (lista) => {
  const result = lista.every((cada) => {
    return cada.idade >= 18
  })

  if (result) {
    console.log('Festa liberada! 2');
  } else {
    console.log('Possui menor de idade! 2');
  }
}

fiscalizarFesta2(listaFesta)

//////////////////////////////////////////////// some
console.log('-- SOME');
const nomes = ['joao', 'maria', 'jose', 'rodrigo']
const numeros2 = [2, 5, 9, 7]

const resultado = nomes.some((nome) => {
  return nome === 'joao'
})

const resultado22 = numeros2.some((cada) => {
  return cada % 2 === 0
})

console.log(resultado);
console.log(resultado22);

//
// Exericio some - tem virus?
const arquivos = [
  'teste.txt',
  'foto.png',
  'contrato.doc',
  'instalador.bat'
]

const temVirus = (lista) => {
  const result = lista.some((cada) => {
    return cada.slice(cada.lastIndexOf('.')) === '.bat'
  })

  if (result) {
    console.log('TEM VIRUS');
  } else {
    console.log('NAO TEM VIRUS');
  }
}

temVirus(arquivos)

//////////////////////////////////////////////// find
console.log('-- FIND');
const usuarios = [
  {
    nome: 'Arthur',
    idade: 19
  },
  {
    nome: 'Ana',
    idade: 19
  },
  {
    nome: 'Julio',
    idade: 24
  }
]

const resultado111 = usuarios.find((usuario) => {
  return usuario.nome.toLowerCase() === 'ana'
})

console.log(resultado111);

//
// Ex 3 - carros
const carros = [
  { nome: 'corolla2', marca: 'toyota2', ano: '2021', cor: 'preto' },
  { nome: 'corolla', marca: 'toyota', ano: '2020', cor: 'prata' },
  { nome: 'corolla3', marca: 'toyota3', ano: '2022', cor: 'puta' },
  { nome: 'corolla4', marca: 'toyota', ano: '2023', cor: 'pina' }
]

const pesquisarCarro = (nomeMarca, arrayObjetos) => {
  const result = arrayObjetos.find((cadaCarro) => {
    return cadaCarro.marca.toLowerCase() === nomeMarca
  })
  console.log(`O primeiro carro encontrado de marca ${nomeMarca} é:`)
  console.log(result)
}

pesquisarCarro('toyota', carros)
 
//////////////////////////////////////////////// findindex
console.log('-- FINDINDEX')
const resultFindIndex = carros.findIndex((cada) => {
  return cada.nome === 'corolla'
})

console.log(resultFindIndex)

//////////////////////////////////////////////// filter MUTCHO UTIL MUTCHO LEMBRA
console.log('-- FILTER')
const carrosToyota = carros.filter((cada) => {
  return cada.marca === 'toyota'
})

console.log(carrosToyota)

//
// ex 04 - professores

const professores = [
  { nome: 'Fulano1', stack: 'backend' },
  { nome: 'Fulano2', stack: 'backend' },
  { nome: 'Fulano3', stack: 'frontend' },
  { nome: 'Fulano4', stack: 'frontend' },
  { nome: 'Fulano5', stack: 'backend' },
  { nome: 'Fulano6', stack: 'frontend' },
]

const profsBack = professores.filter((cada) => {
  return cada.stack === 'backend'
})

console.log(profsBack)

const profsFront = professores.filter((cada) => {
  return cada.stack === 'frontend'
})

console.log(profsFront)

//////////////////////////////////////////////// map TAMBEM MTO UTIL
const pessoas = [
  { nome: 'Fulano1', stack: 'backend', idade: 31 },
  { nome: 'Fulano2', stack: 'backend', idade: 23 },
  { nome: 'Fulano3', stack: 'frontend', idade: 21 },
  { nome: 'Fulano4', stack: 'frontend', idade: 26 },
  { nome: 'Fulano5', stack: 'backend', idade: 35 },
  { nome: 'Fulano6', stack: 'frontend', idade: 42 }
]

const novoArray = pessoas.map((cada) => {
  return {
    apelido: `${cada.nome} ${cada.stack}`,
    idade: cada.idade
  }
})

console.log(novoArray)

//
// Ex 05 - Produtos preço e desconto

const produtos = [
  { nome: "feijao1", preco: 500 },
  { nome: "feijao2", preco: 300 },
  { nome: "feijao3", preco: 400 },
  { nome: "feijao4", preco: 700 },
]

const produtosComDesconto = produtos.map((cada) => {
  return {
    nome: cada.nome,
    preco: cada.preco,
    desconto: cada.preco * 0.1
  }
})

console.log(produtosComDesconto)