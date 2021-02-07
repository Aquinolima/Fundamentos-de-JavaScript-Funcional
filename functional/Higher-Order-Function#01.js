/*
*   Higher Order Function
*
*   Functions that operate on other functions,
*   either by taking them as arguments or by
*   returning them, are called higher-order functions.
*/

//Permite que uma functions opere usando outras functions.
// Ou seja, é possivel passar uma function como argumento ou até mesmo como return.

/*  Passando function como parâmetro para outro function.  */

function run (fn) {
    return `Result: ${fn()}`
}

function sayHello () {
    console.log('Hello!');
}

run(sayHello)

//Passando function anonima como parâmetro

run(function () {
    console.log('run!!!');
})

// Usando function já existente do JavaScript

const result = run(Math.random)
console.log(result);