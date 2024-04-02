function verificaSeOChutePossuiValorValido(chute) {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML +=
      "<div class='texto-maior-menor'>Valor inválido</div>";
  } else if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `<div class='texto-maior-menor'>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
  } else if (numero === numeroAleatorio) {
    document.body.innerHTML = `
      <h2>Você acertou!</h2>
      <h3>O número secreto era ${numeroAleatorio}</h3>
      <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
      `;
  } else if (numero > numeroAleatorio) {
    elementoChute.innerHTML += `<div class="texto-maior-menor">O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`;
  } else {
    elementoChute.innerHTML += `<div class="texto-maior-menor">O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`;
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

recognition.addEventListener("end", () => recognition.start());

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
