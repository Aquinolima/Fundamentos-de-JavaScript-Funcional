// Map Function 
// Essa Function recebe outra Function como parâmetro.

//Usando Function Map para transformar um Array em outro Array
const numbers = [1, 2, 3, 4, 5, 6];

const numbersV1 = numbers.map( el => el*2);

const numbersV2 = numbers.map(function (el) {
    return el * 2 +1000
})

console.log(numbersV1);
console.log(numbersV2);


//Usando Function Map para transformar um Array em outro Array

const students = [
    { name : 'Jake', score: 6.4},
    { name : 'Susan', score: 8.6},
    { name : 'Emma', score: 9.4},
    { name : 'Peter', score: 9.1},
] 


//Fazendo transformação para arredondar score

const getScore = el => el.score
const getNames = el => el.name

const names = students.map(getNames)
const scoreUp = students.map(getScore).map(Math.ceil)
const scoreDn = students.map(getScore).map(Math.floor)


console.log(names, scoreUp, scoreDn);