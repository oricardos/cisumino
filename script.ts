// aula 01
// function sum(a: number, b: number){
//     return a + b;
// }
// console.log(sum(1,2))

//aula 02
// Annotation e Inference 1
let produto: string = "celular";
let preco: number = 2000;

const carro: {
  nome: string;
  preco: number;
} = {
  nome: "carro",
  preco: 20000,
};

const cheap: boolean | string = preco < 4000 ? true : "produto caro";

function sum(a: number, b: number) {
  return a + b;
}

sum(4,3) // isso da certo
// sum("a", "b") // isso da erro
