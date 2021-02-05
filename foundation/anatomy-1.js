// Function declaration

// Functions sem parâmetro e sem retorno

        function sayHello(){
            console.log('Hello!');
        };

        console.log(sayHello);
        sayHello();


// Functions com parâmetro e sem retorno

        function sayHelloTo(name) {
            console.log('Hello ' + name);
            console.log(`Hello ${name}`);
        }
        sayHelloTo('Thiago')


//Function Sem parâmetro com retorno

        function returnHi () {
            return 'Hi!'
        }

        returnHi() //não retona nada pois não está declarado.

        let greeting = returnHi();
        console.log(greeting);      // agora retorna pois está declarado.
        console.log(returnHi());


// Function com parâmetro e com retorno

        function returnToHi (name) {
            return `Hi ${name}!`
        };
        console.log(returnToHi('Thiago'));
