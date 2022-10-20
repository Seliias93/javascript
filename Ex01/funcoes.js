//FUNÇÕES
    //Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

  function areaQuadrado(lado){
    return lado * lado ;  
  }

  areaQuadrado(4)//16
  areaQuadrado(5)//25
  areaQuadrado(2)//4

  function areaQuadrado(lado){
    return lado * lado ;
  }

  console.log(areaQuadrado(10));

  function pi() {
    return 3.14;
  }
  
  var total = 5 * pi(); // 15.7

  console.log(pi());
  

//PARÂMETROS E ARGUMENTOS
    //Ao criar uma função, você pode definir parâmetros.
    //Ao executar uma função, você pode passar argumentos.

// peso e altura são os parâmetros Separar por vírgula cada parâmetro. Você pode definir  mais de um parâmetro ou nenhum também


function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
  }
  
  imc(80, 1.80) // 80 e 1.80 são os argumentos
  imc(60, 1.70) // 60 e 1.70 são os argumentos

  console.log(imc(80, 1.8));

  //PARÊNTESES EXECUTA A FUNÇÃO

  function corFavorita(cor) {
    if(cor === 'azul') {
      return 'Você gosta do céu';
    } else if(cor === 'verde') {
      return 'Você gosta de mato';
    } else {
      return 'Você não gosta de nada';
    }
  }
  corFavorita(); // retorna 'Você não gosta de nada'
  

  //Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer

  //ARGUMENTOS PODEM SER FUNÇÕES
  //Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

  addEventListener('click', function() {
    console.log('Clicou');
  });
  // A função possui dois argumentos
  // Primeiro é a string 'click'
  // Segundo é uma função anônima
  

  //Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}