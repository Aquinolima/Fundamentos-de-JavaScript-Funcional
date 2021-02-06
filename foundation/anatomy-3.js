// Arrow Function

const increment1 = function (n) {       //function expression
    return n+1
}

// transformando em arrow function que sempre é uma function anonymous

const increment2 = (n) => { return n+1 };
const increment3 = n => { return n+1 };
const increment4 = n => n+1;    

console.log(increment1(1));
console.log(increment2(5));
console.log(increment3(24));
console.log(increment4(199));


// arrow functions com dois parâmetros devem estar em parênteses 
const sum = (a, b) => a + b;

console.log(sum(2,5));

