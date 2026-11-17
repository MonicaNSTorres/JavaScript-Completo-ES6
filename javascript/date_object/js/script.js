import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initAnimaNumeros from './modules/anima-numeros.js';
import initFuncionamento from './modules/funcionamento.js';

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initAnimaNumeros();
initFuncionamento();



//newDate()
//é uma função construtora que voce pode usar passando uma const com o newDate
const agora = new Date();
console.log(agora);

console.log(agora.getHours());
console.log(agora.getMinutes());
console.log(agora.getSeconds());
console.log(agora.getMilliseconds());
console.log(agora.getDay());
console.log(agora.getMonth());
console.log(agora.getFullYear());
console.log(agora.getUTCHours() - 3);

console.log(`Data: ${agora.getDay()}/${agora.getMonth()}/${agora.getFullYear()}`);


//getTime()
//O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.
function transformarDias(tempo){
  return tempo / (1000 * 60 * 60 * 24);
};

console.log(transformarDias(agora.getTime()));//se passaram essa quantidade de dias desde de 1 de janeiro de 1970

const natal = new Date('December 24 2026 23:59');

const diasAgora = transformarDias(agora);
const diasNatal = transformarDias(natal);

console.log(`Falta esses dias para o natal: ${diasAgora - diasNatal}`);

//calcular quantos dias faltam para o meu aniversario
const agora1 = new Date();

const hoje = agora1.getDay();
const aniversario = new Date('November 26 2026 00:00');

const diaHoje = transformarDias(hoje);
const diaAniversario = transformarDias(aniversario);


console.log(diaAniversario - diaHoje);