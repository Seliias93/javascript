//Comenta A linha 
/* Comenda mais de uma linha*/


/*  Variaveis 
     Respondesaveis por guardar dados na memoria.
     inicia com palavras como VAR, LET ou Const
*/


console.log('oi')

var nome ='Andre'
var idade = 28;

console.log(nome, idade)

var preco = 25;
var totalComprado = 5
var totalPreco = totalComprado * preco ;

console.log(totalPreco)

var sobrenome = 'Rafael', 
    cidade = 'Rio';

console.log(sobrenome, cidade)

var semDefinir;
console.log(semDefinir);

// Sem Definicao Ocorre Erro

/* 
1
2
3
*/

//console.log(aindaNaoDefine)

/* Hoisting
    Sao movidas para cima do codigo, porem o valor atribuido nao e movido 
*/

var comida;
console.log(comida);
comida = 'Pizza';
console.log(comida);

/*  Muda o valor atribuido 
     E possivel mudar os valores atribuidos a variaveis declaradas com VAR e LET. Porem nao e possivel modificar valores das declaradas como CONST
*/

let time = 'Vasco';
time = 'Flamengo';

console.log(time);


/*  Exercicio
      Dica rapida, frases (string) devem ser colocadas entra aspas (simples ou duplas) e numeros nao levam aspas.
 */

// Declarar uma variável com o seu nome

var nome = 'Elias'

// Declarar uma variável com a sua idade

var idade = '22'

// Declarar uma variável com a sua comida
// favorita e não atribuir valor

var comidaFavorita;

// Atribuir valor a sua comida favorita

comidaFavorita = 'Sorvete'

// Declarar 5 variáveis diferentes sem valores

var motor, 
    carro,
    autodromo,
    piloto,
    formula;

    

console.log(nome, idade, comidaFavorita);