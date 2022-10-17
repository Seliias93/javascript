/* 7 tipos de dados
Todos sao primitivos execeto os objetos. 

primitivos  sao dados imutaveis */ 

var name = 'andre';//String
var idade = 28;//Number
var simbolo = Symbol();//Symbol
var possuiFaculdade = true; //Boolean
var time; // Undefined
var comida = null; // null
var novoObjeto = {} //Object

//Typeof identifica tipo da variavel 
console.log(typeof simbolo);

/* String
    voce pode somar uma string e assim concatenar as palavras
*/

var nome = 'Andre'
var sobrenome = 'Rafael'
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto)

/* String 
voce pode somar numeros com string, o resultado final e sempre uma string*/

var gols = 1000;
var frase = 'Rosmerio fez '+ gols + ' gols';

console.log(frase)

var ano = 2018;
var mes = 8;

console.log( ano + mes )

/*ASPAS DUPLAS, SIMPLES E TEMPLATE STRING
Nao necessariamente precisamos atribuir valores a uma variavel

'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
"JavaScript é "super" fácil"; // Inválido
*/

var melhor = 'teste';
var frase1 = "Esse e o \"melhor\"jogo";

console.log('Isso mesmo')

/* TEMPLATE STRING 
Você deve passar expressões / variáveis dentro de ${}
*/

var gols = 1000;
var frase2 = `Romário fez ${gols * 2} gols`; // Utilizando Template String

console.log(frase2)

/*EXERCÍCIO
Dica rápida, frases (string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas. 
*/

// Declare uma variável contendo uma string

var nome = 'elias';

// Declare uma variável contendo um número dentro de uma string

var ano = '2022'

// Declare uma variável com a sua idade

var idade = 22;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

var nome = 'elias ';
var sobrenome = 'souza';
var nomeCompleto = `${nome} ${sobrenome}`;

// Coloque a seguinte frase em uma variável: It's time

var frase = `It's time`;

// Verifique o tipo da variável que contém o seu nome
var verificaTipoNome = typeof nome;

console.log(verificaTipoNome)




