const menu = document.querySelector('[href^="#cor"]');

menu.addEventListener('click', function(){
    menu.classList.toggle('ativo');
    
    if(menu.classList.contains('ativo')){
        document.body.style.backgroundColor = '#49479D'
        document.body.style.color = 'white'
    }else{
        document.body.style.backgroundColor = '#faf6ed'
        document.body.style.color = '#222'
    }
})

//atributes
const animais = document.querySelector('.animais');

console.log(animais.attributes);
console.log(animais.attributes['id']);//para quando eu quero puxar um atributo em especifico

//getAttibute e setAttribute
//são metodos que retornam ou definem de acordo com o atributo selecionado
const img = document.querySelector('img');

console.log(img.getAttribute('src'));//valor do src
img.setAttribute('alt', 'texto alternativo');//muda o valor
console.log(img.hasAttribute);//verifica se tem ou nao - true ou false
console.log(img.removeAttribute('alt'));//removo o atributo

//EXERCICIOS
// Adicione a classe ativo a todos os itens do menu
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(function(item){
    item.classList.add('ativo')
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuLinks.forEach(function(item){
    item.classList.remove('ativo')
});

menuLinks[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
console.log(img.hasAttribute('alt'));

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]');

linkExterno.setAttribute('href', 'https://www.google.com/');