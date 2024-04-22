// aula 01
// function sum(a: number, b: number){
//     return a + b;
// }
// console.log(sum(1,2))

//aula 02
// Annotation e Inference 1
// let produto: string = "celular";
// let preco: number = 2000;

// const carro: {
//   nome: string;
//   preco: number;
// } = {
//   nome: "carro",
//   preco: 20000,
// };

// const cheap: boolean | string = preco < 4000 ? true : "produto caro";

// function sum(a: number, b: number) {
//   return a + b;
// }

// sum(4,3) // isso da certo
// sum("a", "b") // isso da erro

// exercício 1 Annotation e Inference
// function normalizarTexto(texto: string): string {
//     return texto.trim().toLowerCase();
// }

// exercício 2 Annotation e Inference
// const input = document.querySelector("input");

// const total = localStorage.getItem("total");
// if (input && total) {
//   input.value = total;
//   calcularGanho(Number(input.value));
// }

// function calcularGanho(value: number) {
//   const p = document.querySelector("p");
//   if (!p) return;
//   p.innerText = `Ganho total: ${value + 100 - value * 0.2}`;
// }

// function totalMudou() {
//   if (!input) return;
//   const value = input.value;
//   localStorage.setItem("total", value);

//   calcularGanho(Number(value));
// }

// if (input) {
//   input.addEventListener("keyup", totalMudou);
// }

// 0202 String, Number e Boolean
const frase = "Isso é uma string";
const numero = 10;
const boolean = true;

console.log(typeof frase); // string
console.log(typeof numero); // number 

if (typeof frase === "string") {
  console.log("É uma string");
}