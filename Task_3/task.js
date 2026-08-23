// 1
// Создайте функцию createCounter, которая возвращает функцию-счетчик.
// Каждый вызов возвращаемой функции должен увеличивать счетчик на 1.

function createCounter() {
    let result = 0;
    return function(){
        result++
        return result
    }
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

//2
// Создайте функцию greetingGenerator, которая принимает приветствие.
// Возвращаемая функция должна принимать имя и возвращать полное приветствие.

function greetingGenerator(greeting) {
    return function(name){
        return(`${greeting}, ${name}`)
    }
}

const sayHello = greetingGenerator('Привет');
const sayHi = greetingGenerator('Здравствуйте');

console.log(sayHello('Анна')); // 'Привет, Анна!'
console.log(sayHi('Борис'));   // 'Здравствуйте, Борис!'

//3
// Создайте функцию createCalculator, которая возвращает объект с методами:
// - add(n) - добавляет число
// - subtract(n) - вычитает число
// - getValue() - возвращает текущее значение
// - getHistory() - возвращает массив всех операций

function createCalculator() {
    let result = 0;
    let history = [];
    const add = function(n){
        result += n
        history.push(`+${n}`)
    }
    const subtract = function(n){
        result-= n
        history.push(`-${n}`)
    }
    const getValue = function(){
        return result
    }
    const getHistory = function(){
        return history
    }
    return {add, subtract, getValue, getHistory}
}

const calc = createCalculator();
console.log(typeof calc)
calc.add(5);
calc.add(3);
calc.subtract(2);
console.log(calc.getValue()); // 6
console.log(calc.getHistory()); // ['+5', '+3', '-2']


