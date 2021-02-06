function logParams (a,b,c) {
    console.log(a,b,c);
}

logParams(1,2,3)

logParams(1,2,3,4,5)    // mostra apenas os parâmetros da function

logParams (1,2)         // mostra undefined para os parâmetros não passados.
logParams (1)
logParams ()


// para definir um valor padrão para os parâmetros.

function defautParams (a=1,b,c=3) {
    console.log(a,b,c);
}
defautParams (7,8,9)
defautParams (7,8)  // o terceiro parâmetro está definido com 3
defautParams (7)
defautParams ()



// Parâmetros com Arrays

function logNums (nums) {
    for(let n of nums) {
        console.log(n);
    }
};
logNums([1,2,3]);

//spred/rest
function logNums (...nums) {
    console.log(Array.isArray(nums));
    for(let n of nums) {
        console.log(n);
    }
}
logNums(1,2,3,4)

//ou

function logNums (...nums) {
            console.log(nums);
    }
logNums(1,2,3,4,5,6)



//soma de todos os numeros

function sumAll (...nums) {
    let total =0
    for(let n of nums){
        total += n
    }
    return total
}

console.log(sumAll(1,2,3,4,5,6,7,8,9,10));