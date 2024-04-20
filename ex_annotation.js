const input = document.querySelector("input");

function getLocalStorage() {
  const value = localStorage.getItem("total");
  if (value) {
    input.value = value;
  }

  calcularGanho(value)
}

function calcularGanho(value) {
  const p = document.querySelector("p");
  p.innerText = `Ganho total: ${value + 100 - input.value * 0.2}`;
}

function totalMudou() {
  const value = Number(input.value);
  localStorage.setItem("total", value);

  calcularGanho(value);
}
getLocalStorage();

input.addEventListener("keyup", totalMudou);
