// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value);
  const unidade = frm.inUnidade.value;

  let resposta;

  switch (unidade) {
    case "Milímetro":
      resposta = valor * 1000;
      break;
    case "Centímetro":
      resposta = valor * 100;
      break;
    case "Decímetro":
      resposta = valor * 10;
      break;
    case "Decâmetro":
      resposta = valor / 10;
      break;
    case "Hectômetro":
      resposta = valor / 100;
      break;
    case "Quilômetro":
      resposta = valor / 1000;
      break;
  }

  resp1.innerText = `${valor} metro(s) é igual a ${resposta} ${unidade}(s).`;
});

frm.addEventListener("reset", () => {
  frm.inValor.focus();
  resp1.innerText = "";
  resp2.innerText = "";
});
