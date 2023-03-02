let  varA = 'A'; //B
let  varB = 'B'; //c
let  varC = 'c'; //A

const  varAtemp = varA;
varA = varB;
varB = varC;
varC = varAtemp;

console.log(varA, varB, varC)