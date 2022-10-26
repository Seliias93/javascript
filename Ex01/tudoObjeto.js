//TUDO É OBJETO

//Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = 'André';

nome.length; // 5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Andrei'
nome; // 'André'
  

//Numero

var altura =1.8;

altura.toString(); //'1.8'
altura.toFixed(); //'2'

//por um breve momento o numero e envolvido em objeto (coerção), tendo acesso assim as suas propriedade e metodos

//FUNÇÕES

function areaQuadrado(lado) {
    return lado * lado;
  }
  
  areaQuadrado.toString();
  //"function areaQuadrado(lado) {
  //  return lado * lado;
  //}"
  
  areaQuadrado.length; // 1
  
//ELEMENTOS DO DOM

var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})

//Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.


//OBJETOS REVOLUCIONARAM A PROGRAMAÇÃO
//Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.

// nomeie 3 propriedades ou métodos de strings

var nome = 'Andre';

//Fixed
//length
//slice 

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn= document.querySelector('.btn');

//addEventListener
//appendChild
//id
//inperHtml
//outerHtml

console.log(btn)

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

/*

Um caso de uso bastante comum é copiar o conteúdo de outro elemento. Você pode fazer isso adicionando um atributo data-clipboard-target em seu elemento de gatilho. O valor que você inclui nesse atributo precisa corresponder ao seletor de elemento de outro.
<!-- Target -->
<input id="foo" value="https://github.com/zenorocha/clipboard.js.git">
*/

// <!-- Trigger -->
//   <button class="btn" data-clipboard-target="#foo">
//      <img src="assets/clippy.svg" alt="Copy to clipboard">
//   </button>
