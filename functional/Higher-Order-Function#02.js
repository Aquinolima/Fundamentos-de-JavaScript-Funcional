/*
*   Higher Order Function
*
*   Functions that operate on other functions,
*   either by taking them as arguments or by
*   returning them, are called higher-order functions.
*/

//Permite que uma functions opere usando outras functions.
// Ou seja, é possivel passar uma function como argumento ou até mesmo como return.

/*  Usando uma Function como Return de outra Function  */


//curring
function finalPrice (tax) {
    return function (price) {
        return price * (1 + tax)
    }
}
const nycFinalPrice = finalPrice(0.0875)

console.log(nycFinalPrice(25.1));
console.log(nycFinalPrice(21.7));
console.log(nycFinalPrice(107.9));