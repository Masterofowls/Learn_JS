let name = "Anna"
let age = 23
const person = {
    name,
    age,
    characteristics: {
        power: 96,
        agility: 56
    },
    goTowards: () => {},
    takeDamage () {},

    'age prediction' : 'defer',
}

// свойство (поле) - переменная которая принадлежит объекту и получить доступ к ней можно только из объекта

// Метод - функция которая хранится и вызывается в рамках объекта

let key = 'characteristics'

console.log(person.characteristics.power)
console.log(person.goTowards())
console.log(person["age prediction"])
console.log(person[key])

for(let key in person){
    console.log(key, person[key])
}

person.age = 67

delete person.age

// примитивы - number float string undefined ... хранят одно значение
// сложные типы - object array functions 

// копирование объекта

// поверхностное копирование - основаны на создании нового объекта и перекопировании туда свойств из оригинала, не подходят для вложенных

const original = {
    a: 1,
    b: 2
}

const copy = {}
for(let key in original){
    copy[key] = original[key]
}
original.a = 56
console.log(original, copy)

const copy = {...original} // ... - spread operator
console.log(original,copy)

Object.assign(dest, src1, src2 , ...) // dest - куда копируем а src - откуда
const copy = Object.assign({}, original)

const student = {
    name: 'Jake',
    grades: {
        math: 90,
        science: 85
    }
}

const studentJson = JSON.stringify(student)
const copyStudent = JSON.parse(studentInJson)

// контекст - объект в рамках которого выполняется функция
// this - ссылка на контекст внутри функции

const counter = {
    value: 0,
    increment: function() {this.value++}, // если сменить на стрелочную то она пропустит контекст
    decrement: function() {
        this.value--
    }
}

counter.increment()
console.log(counter.value)

function Fn () {
    console.log(this)
}

Fn()

// Глобальный объект(window) - это объект хранящий в себе все глобальные переменные и методы


