const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFecha = document.querySelector('[data-modal="fecha"]');
const containerModal = document.querySelector('[data-modal="container"]');

if(botaoAbrir && botaoFecha && containerModal){
function abrirModal(){
    event.preventDefault();
    containerModal.classList.add('ativo');
    console.log(event)
}

function fechaModal(){
    event.preventDefault();
    containerModal.classList.remove('ativo');
}

function cliqueForaModal(event){
    if(event.target === this){
    fechaModal(event);
    }
}

botaoAbrir.addEventListener('click', abrirModal);
botaoFecha.addEventListener('click', fechaModal);
containerModal.addEventListener('click', cliqueForaModal);
}
