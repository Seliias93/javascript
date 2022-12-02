const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fecha"]');
const containerModal = document.querySelector('[data-modal="container"]');

function abrirModal(){
    event.preventDefault();
    containerModal.classList.add('ativo');
    console.log(event)
}
function fechaModal(){

}

botaoAbrir.addEventListener('click', abrirModal);
botaoFechar.addEventListener('click', fechaModal);