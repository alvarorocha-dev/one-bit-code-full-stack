// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num1 = Number(frm.inNum1.value);
  const num2 = Number(frm.inNum2.value);

  const soma = num1 + num2;
  const subtracao = num1 - num2;
  const multiplicacao = num1 * num2;
  const divisao = num1 / num2;

  resp1.innerText = `Soma: ${soma}.\nSubtração: ${subtracao}.`;
  resp2.innerText = `Divisão: ${divisao.toFixed(
    2
  )}.\nMultiplicação: ${multiplicacao}.`;
});

frm.addEventListener("reset", () => {
  frm.inNum1.focus();
  resp1.innerText = "";
  resp2.innerText = "";
});
