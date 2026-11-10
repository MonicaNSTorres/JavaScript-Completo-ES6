import tabNav from './modules/tab-nav.js';
import animaScroll from './modules/anima-scroll.js';
import accordion from './modules/accordion.js';
import scrollSuave from './modules/scroll-suave.js';

//quando eu quiser importar varias funções dentro do mesmo arquivo
import {teste, teste2} from './modules/teste.js';

//quando quiser importar todos os valores de um objeto
import * as teste1 from './modules/teste1.js';



tabNav();
animaScroll();
accordion();
scrollSuave();
teste();
teste2();

teste1.teste3();