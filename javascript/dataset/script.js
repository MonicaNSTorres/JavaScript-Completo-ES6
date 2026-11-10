const h1 = document.querySelector('h1');
console.log(Object.prototype.toString.call(h1));

//Dataset
//é uma propriedade do HTMLElement, ela é um objeto no qual vai ter chave e valor
//essa chave é de acordo com o meu atributo data
const div = document.querySelector('div');

console.log(div.dataset);

//caso eu queria selecionar pelo atributo:
const div1 = document.querySelector('[data-cor]');
const div2 = document.querySelector('[data-cor="azul"]');

//posso passar uma nova propriedade:
div.dataset.height = 100;

//posso deletar tambem:
delete div.dataset.width;


//Data Atributes
//os atributos e valores que começam com data- poderão ser utilizados como forma de
//configuração de plugins e interações DOM/JS
const divs = document.querySelectorAll('[data-anime]');
divs.forEach((div)=>{
    div.classList.add(div.dataset.anima);
});


//Nomeclatura
//Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. 
//Então qualquer traço será removido e a letra seguinte transformada em maiúscula.
const dataAnime = document.querySelector('[data-anima-scroll-up]');

console.log(dataAnime.dataset);

//mesma coisa se eu adicionar:
dataAnime.dataset.novoHeight = 100;


//EXERCICIOS
// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.

function initTabNav(){
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');

    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add('ativo');

        function activeTab(index){
            tabContent.forEach((section)=>{
                section.classList.remove('ativo');
            });
            const direcao = tabContent[index].dataset.anime;
            tabContent[index].classList.add('ativo', direcao);
        }

        tabMenu.forEach((itemMenu, index)=>{
            itemMenu.addEventListener('click', ()=>{
                activeTab(index);
            })
        })
    }
};

initTabNav();


function initAnimacaoScroll(){
    const sections = document.querySelectorAll('data-anime="scroll"');

    if(sections.length){
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll(){
            sections.forEach((section)=>{
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;

                if(isSectionVisible){
                    section.classList.add('ativo');
                }else{
                    section.classList.remove('ativo');
                }
            })
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}

initAnimacaoScroll();

function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';
  
  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}

initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

initScrollSuave();