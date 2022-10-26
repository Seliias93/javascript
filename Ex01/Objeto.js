   //Objetos 
//Conjunto de variaveis e funcoes que sao chamada de propriedade e metodos

var pessoa = {
    nome: 'André',
    idade: 28,
    profissao: 'Designer',
    possuiFaculdade: true,
  }
  
  pessoa.nome; // 'André'
  pessoa.possuiFaculdade; // true

  //Propriedades e métodos consistem em nome (chave) e valor
  

    //Metodo

// e uma propriedade que possui uma funcao no local do seu valor.

var quadrado = {
    lados: 4,
    area: function(lado) {
      return lado * lado;
    },
    perimetro: function(lado) {
      return this.lados * lado;
    },
  }
  
  quadrado.lados; // 4
  quadrado.area(5); // 25
  quadrado.perimetro(5); // 20
  

  //Metodos
//Abreviacao de area: function () {} para area () {}, no
//ES6+

var quadrado = {
    lados: 4,
    area(lado) {
      return lado * lado;
    },
    perimetro(lado) {
      return this.lados * lado;
    },
  }

  
  // Organizar o codigo 

  //objetos servem para organizar o codigo em pequenas partas reutilizaveis

  Math.PI; // 3.14
  Math.random(); // número aleatório
  
  var pi = Math.PI;
  console.log(pi); // 3.14

  //Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?

  //CRIAR UM OBJETO
//Um objeto é criado utilizando as chaves {}

var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'
  

  //Dot Notation Get
//acesse propriedade de um objeto utilizando o ponto 

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
  }
  
  var bg = menu.backgroundColor; // '#84E'


  //DOT NOTATION SET
// Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'

    //PALAVRA-CHAVE THIS
//this irá fazer uma referência ao próprio objeto.

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60

//this irá retornar o próprio objeto

    //PROTÓTIPO E HERANÇA
//O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
  
var menu = {
    width: 800,
  }
  
  menu.hasOwnProperty('width') // true
  menu.hasOwnProperty('height') // false


  //hasOwnProperty é um método de Object

    //EXERCÍCIO
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados={
  nome:'andre',
  sobrenome: 'Rafael',
  idade:'Rio de Janeiro',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function (){
  return `${this.nome} ${this.sobrenome}`;
}
// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  
  carro.preco = 3000;

  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  var cachorro = {
    raca: 'labrador',
    cor:'preto',
    idade:'10',
    latir(pessoa){
      if(pessoa === 'homem'){
        return 'Latir';
      }else {
        return'nada';
      }
    }
  }
   

  //TUDO É OBJETO
//Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
