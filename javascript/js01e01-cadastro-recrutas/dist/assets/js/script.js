// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const sobrenome = frm.inSobrenome.value;
  const estudo = frm.inEstudo.value;
  const nascimento = Number(frm.inNascimento.value);

  const data = new Date();
  let ano = data.getFullYear();

  resp1.innerText = `Recruta: ${nome} ${sobrenome}.`;
  resp2.innerText = `Completa ${
    ano - nascimento
  } anos em ${ano}.\nEspecializando em: ${estudo}.`;
});

frm.addEventListener("reset", () => {
  frm.inNome.focus();
  resp1.innerText = "";
  resp2.innerText = "";
});
