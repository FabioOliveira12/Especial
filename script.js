// Carrossel automático
let currentIndex = 0;
const imagens = document.querySelectorAll("#carousel img");
const total = imagens.length;

function trocarImagem() {
  currentIndex = (currentIndex + 1) % total;
  const deslocamento = -currentIndex * 100;
  document.getElementById("carousel").style.transform = `translateX(${deslocamento}%)`;
}

setInterval(trocarImagem, 4000);

// Temporizador desde 16 de maio de 2022
const contador = document.getElementById("contador");
function atualizarContador() {
  const inicio = new Date("2022-05-16T00:00:00");
  const agora = new Date();

  let anos = agora.getFullYear() - inicio.getFullYear();
  let meses = agora.getMonth() - inicio.getMonth();
  let dias = agora.getDate() - inicio.getDate();

  if (dias < 0) {
    meses -= 1;
    dias += new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
  }

  if (meses < 0) {
    anos -= 1;
    meses += 12;
  }

  const diff = agora - inicio;
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  contador.textContent = `${anos} ano(s), ${meses} mês(es), ${dias} dia(s), ${horas}h ${minutos}m ${segundos}s 💞`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// Frases "eu te amo" em várias línguas
const frasesTeAmo = [
  "Eu te amo", "I love you", "Je t'aime", "Te amo", "Ich liebe dich",
  "Ti amo", "愛してる (Aishiteru)", "사랑해 (Saranghae)", "Я тебя люблю (Ya tebya lyublyu)",
  "Te iubesc", "Seni seviyorum", "أنا أحبك (Ana uhibbuka)", "我爱你 (Wǒ ài nǐ)",
  "Ik hou van jou", "Jeg elsker dig", "Jeg elsker deg", "Kocham cię",
  "Σ' αγαπώ (S'agapó)", "Mahal kita", "Mi amas vin", "Aloha wau ia ʻoe", "Nakupenda",
  "Ani ohev otach"
];

let indexFrase = 0;
const teAmoEl = document.getElementById("teAmo");

function trocarFrase() {
  indexFrase = (indexFrase + 1) % frasesTeAmo.length;
  teAmoEl.style.opacity = 0;
  setTimeout(() => {
    teAmoEl.innerText = frasesTeAmo[indexFrase];
    teAmoEl.style.opacity = 1;
  }, 500);
}

setInterval(trocarFrase, 3000);

// Corações caindo
function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("heart");
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.animationDuration = 2 + Math.random() * 3 + "s";
  coracao.textContent = "💖";
  document.getElementById("hearts").appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 5000);
}

setInterval(criarCoracao, 300);
