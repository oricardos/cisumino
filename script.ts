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
// const frase = "Isso é uma string";
// const numero = 10;
// const boolean = true;

// console.log(typeof frase); // string
// console.log(typeof numero); // number

// if (typeof frase === "string") {
//   console.log("É uma string");
// }

// 0203 Union Types 1
// let total: string | number = 200;
// total = '400';

// // função que verifica se está recebendo um número
// function isNumber(value: string | number):boolean {
//   if (typeof value === "number"){
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// console.log(isNumber(200)) //return true
// console.log(isNumber('200')) //return false

// const button = document.querySelector("button");

// button?.click(); // seria a mesma coisa que if (button){...}, porém utilizar optional chaning é o js mais atual

//exercício
// function toNumber(value: number | string): number{
//   if (typeof value === "string"){
//     return Number(value);
//   } else if (typeof value === "number") {
//     return value;
//   } else {
//     throw new Error("value deve ser uma string ou um número")
//   }
// }

//0204 Types e Interfaces 1
// type TypeProduct = {
//   name: string;
//   price: number;
//   haveStock: boolean;
// }

// interface InterfaceProduct {
//   name: string;
//   price: number;
//   haveStock: boolean;
// }

// function showProduct(product: InterfaceProduct){
//   console.log(product.name);
//   console.log(product.price);
//   console.log(product.haveStock);
// }

// showProduct({name: "celular", price: 2000, haveStock: true});

// 0205 Arrays 1
// const numeros = [1, 3, 6, 7, 20, 300, 230, 2, 5, 4];
// const valores = [1, 3, '6', 7, 20, '300', '230']

// function maiorQue10(data: Array<number>): Array<number> {
//     return data.filter(n => n > 10)
// }

// function filtraValores(data: Array<number | string>) {
//     return data.filter(n => typeof n === 'number')
// }

// console.log(maiorQue10(numeros))
// console.log(filtraValores(valores))

// 0205 Arrays 2 exercício
// async function fetchCursos() {
//   const response = await fetch("https://api.origamid.dev/json/cursos.json");
//   const data = await response.json();
//   mostrarCurso(data);
// }

// fetchCursos();

// interface Curso {
//   aulas: number;
//   gratuito: boolean;
//   horas: number;
//   idAulas: Array<number>;
//   nivel: "iniciante" | "avancado";
//   nome: string;
//   tags: Array<string>;
// }

// function mostrarCurso(cursos: Array<Curso>) {
//   cursos.forEach((curso, index) => {
//     console.log(curso)
//     let color;
//     if (curso.nivel === 'avancado'){
//         color = 'red'
//     } else {
//         color = 'blue'
//     }
//     document.body.innerHTML += `
//     <div>
//     <h1 style="color: ${color}":>Curso ${index + 1} - ${curso.nome}</h1>
//     <p>Aulas: ${curso.aulas}</p>
//     <p>Gratuito?  ${curso.gratuito ? "sim" : "não"}</p>
//     <p>Horas  - ${curso.horas}h</p>
//     <p>Tags: ${curso.tags.join(', ')}</p>
//     </div>
//     `;
//   });

//   return cursos;
// }

// 0207 Null e Undefined

// null
// const button = document.querySelector('button');

// if (button){
//   button.click();
// }

// // undefined

// interface Product {
//   nome?: string;
// }

// const jogo: Product = {
//   nome: "Assassins Creed",
// }

// if (jogo.nome) {
//   jogo.nome.toLocaleLowerCase()
// }

// jogo.nome?.toLocaleLowerCase()

// 0301 Instanceof 1
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
class Produto {
  nome: string;
  preco: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }
  // método
  precoReal = () => {
    return `R$ ${this.preco},00`;
  };
}

const produto = new Produto("Guerra civil", 100);

console.log(produto.precoReal());

console.log(produto instanceof Produto); //true

class Livro {
  autor: string;
  constructor(autor: string) {
    this.autor = autor;
  }
}

class Jogo {
  jogadores: number;
  constructor(jogadores: number) {
    this.jogadores = jogadores;
  }
}

function buscaProduto(busca: string) {
  if (busca === "O senhor dos anéis") {
    return new Livro("J. R. R. Tolkien");
  }
  if (busca === "Assassins Creed") {
    return new Jogo(1);
  }
  return null;
}

const produtoFinal = buscaProduto("O senhor dos anéis");

if (produtoFinal instanceof Livro) {
  console.log(produtoFinal.autor);
}

if (produtoFinal instanceof Jogo){
  console.log(produtoFinal.jogadores)
}
