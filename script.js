document.addEventListener('DOMContentLoaded', function() {
  let input = document.getElementById("input")

  function valorInput(){
    let valor = input.value;
    let paragrafo = document.createElement("p");
    paragrafo.textContent = valor;
    document.body.appendChild(paragrafo);
  }
  let button = document.getElementById("button");
  button.addEventListener("click", valorInput);
});
