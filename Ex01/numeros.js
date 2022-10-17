/* Numeros  */
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

/* OPERADORES ARITMÉTICOS 
Lembrando que soma + em Strings serve para concatenar
*/

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

/*OPERADORES ARITMÉTICOS (STRINGS) 
É possível verificar se uma variável é NaN ou não com a função isNaN()
*/

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

var testeNan = 'isso e 100'/2;
console.log(isNaN(testeNan));

/*NAN = NOT A NUMBER */

var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)

