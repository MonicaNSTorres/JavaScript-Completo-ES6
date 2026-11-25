import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown('24 December 2026 23:59:59');

/*setInterval(()=>{
    console.log(tempoParaONatal.total);
}, 1000);*/

const p = document.createElement('p');
document.body.appendChild(p);

setInterval(()=>{
    p.innerText = `Faltam para o Natal: ${tempoParaONatal.days} dias ${tempoParaONatal.hours} horas
    ${tempoParaONatal.minutes} minutos e ${tempoParaONatal.seconds} segundos`;
}, 1000);

p.style.backgroundColor = 'red';
p.style.color = 'white';
p.style.width = 30 + 'rem';
p.style.alignItems = 'center';
p.style.display = 'flex';
p.style.justifyContent = 'center';
p.style.lineHeight = 1.5;
p.style.fontFamily = 'IBM Plex Mono, monospace';
p.style.fontSize = 20 + 'px';