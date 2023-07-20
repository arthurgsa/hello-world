// const
const nomemassa = "josé";
console.log(nomemassa);

// let
let idade = 30;
let var2 = 1.53;
console.log(idade, var2);
console.log(`minha idade é ${idade} e ${var2}`);

// escopo
{
  let testeEscopo = 45;
  console.log(testeEscopo);
}

let testeEscopo2 = 43;
console.log(testeEscopo2);

//////////// console.log(testeEscopo)

// undf e null
let nota;
console.log(nota);
nota = 10;
console.log(nota);
nota = null;
console.log(nota);

// op aritmeticos
x = 5;
y = 8;

let res = x + y;
console.log(`A soma de ${x} e ${y} é ${res}`);
res = x - y;
console.log(`A subtração de ${x} e ${y} é ${res}`);
res = x * y;
console.log(`A multiplicação de ${x} e ${y} é ${res}`);
res = y / x;
console.log(`A divisão de ${y} e ${x} é ${res}`);

// concantenação
let nome1 = "NomePrincipal";
let nome2 = "NomeSecundario";
let nomeCompleto = nome1 + " " + nome2;
console.log(nome1 + " " + nome2);
console.log(nome1, nome2);
console.log(nomeCompleto);
console.log(`${nome1} ${nome2}`);

// inf e nan
let vInfNan = 0 / 2; // 0
console.log(vInfNan);
vInfNan = 2 / 0; // inf
console.log(vInfNan);
vInfNan = 0 / 0; // nan
console.log(vInfNan);

// tipos corretos
let xTipo = "10";
let resTipo = xTipo + y;
console.log(`A soma de ${xTipo} e ${y} é ${resTipo}`);

// mais operadores arit
let xMaisOp = 12; //12
xMaisOp += 3; // 15
console.log(xMaisOp);
xMaisOp -= 5; // 10
console.log(xMaisOp);
xMaisOp *= 2; // 20
console.log(xMaisOp);
xMaisOp /= 2; // 10
console.log(xMaisOp);

// operador modulo
let resto = 12 % 5;
console.log(resto);
let calc2 = 12 / 5;
console.log(calc2);

//x++ ++x x-- --x
let maisX = 5;
console.log(maisX);

maisX++;
console.log(maisX);

++maisX;
console.log(maisX);

let maisY = maisX++;
console.log(maisY);
console.log(maisX);

maisY = ++maisX;
console.log(maisY);
console.log(maisX);

// raiz quadrada e potencia
let raiz = Math.sqrt(64);
console.log(raiz);
let pot = Math.pow(2, 4);
console.log(pot);

console.log((60 * 100 / 110).toFixed(1))
