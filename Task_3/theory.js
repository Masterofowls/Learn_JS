/*
let
var 
const 
*/
{
    let a = 0
    console.log(a)
}

// let - блочная область видимости = можно ограничить блоком, нельзя получить извне
// var - ограничить только блоком от функции (самой функции)= функциональная область видимости

function F1(){
    // lexical environment: {}
    let a = 0
    // lexical environment: {a: 0}
    console.log(a)
}

function F2(){
    // lexical environment*: {b: undefined, [[scope]]} //* - local scope - gle, только в локальном
    let a = 0
    // lexical environment: {a: 0, b:undefined, [[scope]]}
    var b = 0
    // lexical environment {a:0, b:3, [[scope]]}
    console.log(a)
}

let c = 8 // global lexical environment {c:}

// Лексическое окружение  - скрытый объект, существующий в рамках блока , хранящий 
// все переменные, определённые внутри этого блока и scope

// Scope - ссылка на внешнее лексическое окружение


// Замыкание - способность функции запоминать лексическое окружение 
// в котором она была прописана

const createCalculator = function (n){
    return function (m){
        return n + m 
    }
}

const sum2 = createCalculator(2) //2
const sum5 = createCalculator(5) //5

console.log(sum5(3))//8

const infiniteSum = function(n){
    let result = n

    const calculate = function (m){
        if (m === 0) {
            return result
        }else{
            result +=m
            return calculate
        }
    }
    return calculate
}

console.log(infinitySum(8)(9)(0)) // 17 - вызывается до вызова нуля