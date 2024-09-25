// =======================> Animation on Scroll Script

AOS.init();

// =======================> Exercise Script

const frm = document.getElementById("form");
const resp1 = document.getElementById("outResp1");
const resp2 = document.getElementById("outResp2");
const resp3 = document.getElementById("outResp3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = frm.inNome.value;
  const ataque = Number(frm.inAtaque.value);
  const oponente = frm.inOponente.value;
  const defesa = Number(frm.inDefesa.value);
  const vida = Number(frm.inVida.value);
  const escudo = frm.inEscudo.value;
  const protecao = frm.escudoSim.checked;
  let dano;

  if (ataque > defesa && !protecao) {
    dano = ataque - defesa;
  } else if (ataque > defesa && protecao) {
    dano = Math.floor((ataque - defesa) / 2);
  } else {
    dano = 0;
  }

  resp1.innerText = `Nome do Personagem: ${nome}. Poder de Ataque: ${ataque}.`;
  resp2.innerText = `Nome do Oponente: ${oponente}. Poder de Defesa: ${defesa}.\nPontos de Vida: ${vida}. Possui escudo: ${escudo}.`;
  resp3.innerText = `${nome} causou ${dano} ponto(s) de dano. E ${oponente} ficou com ${
    vida - dano
  } Ponto(s) de vida.`;
});

frm.addEventListener("reset", () => {
  frm.inNome.focus();
  resp1.innerText = "";
  resp2.innerText = "";
});
