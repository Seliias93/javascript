const nome = 'Elias';
const sobrenome = 'souza';
const idade = '22';
const alturaEmM = 1.80;
let indiceMassaCorporal ; // peso  / (altura * altura) 
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2019 - idade;

// template string

console.log(` ${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e sei IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`)