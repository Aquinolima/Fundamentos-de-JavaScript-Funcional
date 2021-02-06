// Anonymous function
//IIFE -- Immediately Invoked Function Expression

(function (a, b, c) {
    console.log(`Result: ${a + b + c}`);
})(1,2,3) ;          //Deve passar o valor em sequencia , assim automaticamente é invocado.


// Normal mente é usado desse forma
(function () {
    let x = 300
    console.log(x);
})();              // Nessa function deve fechar com ; pois é definido em escopo e não global . 


//IIFE em Arrow Function

(() => {
    console.log('arrow #01');
})();

//ou 

(() => console.log('arrow #02'))();