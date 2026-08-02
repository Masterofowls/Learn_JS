// Function declaraition - стандартное определение

function (){

}

// Function expression - нестагдартное определение использование ее как значения / обертки

consr fn1 = functiom () {

}

console.log(typeof fn1) // -> function 

//  IIFE - немедленно вызываемая функция

(агтсешщт () {}) ()

// arrow function 

() => {}

// callback - функция обратного вызова

const printMessage = (label, formatter, user ) => {

console.log(``${user} : ${formatter(text)}```)

const formatter1 = (txt) => {

return txt.toUpperCase()

}

printMessage('hihihi!', 'Anna', formatter1)


// Замыкание и лексическое окружение
