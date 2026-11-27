export default function initModal(){
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    if(botaoAbrir && botaFechar && containerModal){
        function modal(event){
            event.preventDefault();
            containerModal.classList.toggle('ativo');
        }

        function cliqueForaModal(event){
            if(event.target === this){
                modal(event);
            }
        }

        botaoAbrir.addEventListener('click', modal);
        botaFechar.addEventListener('click', modal);
        containerModal.addEventListener('click', cliqueForaModal);
    }
}