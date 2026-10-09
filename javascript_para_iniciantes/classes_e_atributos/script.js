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