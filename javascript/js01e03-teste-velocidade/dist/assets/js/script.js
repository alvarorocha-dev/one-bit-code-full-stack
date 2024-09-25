// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const veiculo1 = frm.inVeiculo1.value;
  const velocidade1 = Number(frm.inVelocidade1.value);
  const veiculo2 = frm.inVeiculo2.value;
  const velocidade2 = Number(frm.inVelocidade2.value);

  if (velocidade1 > velocidade2) {
    resp1.innerText = `${veiculo1} é ${
      velocidade1 - velocidade2
    }km mais rápido que ${veiculo2}.`;
  } else if (velocidade2 > velocidade1) {
    resp1.innerText = `${veiculo2} é ${
      velocidade2 - velocidade1
    }km mais rápido que ${veiculo1}.`;
  } else {
    resp1.innerText = `${veiculo1} e ${veiculo2} têm a mesma velocidade ${velocidade1}km/hora.`;
  }
});

frm.addEventListener("reset", () => {
  frm.inVeiculo1.focus();
  resp1.innerText = "";
  resp2.innerText = "";
});
