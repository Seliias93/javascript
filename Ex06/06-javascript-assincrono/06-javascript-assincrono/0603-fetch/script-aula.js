const imagem = fetch('https://www.google.com');


imagem.then(response => {
  console.log(response.type);
  if(response.status === 404) {
    console.log('Página não existe');
  }
});

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const  inputcep = document.GetElementById('cep');
const  btnCep = document.GetElemenrById('btncep');

btnCep.addEventListerner('click',handleClick);

function handleClick(vent){

  
}
// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
