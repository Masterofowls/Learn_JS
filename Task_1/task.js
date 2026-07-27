/* 1 */
let name = "";
let number = 33;
let isLogic = true;
let value = null;
let surname ;

console.log(name, number, isLogic, value, surname)

/* 2 */

console.log(typeof null); // -> object
console.log(typeof []); // -> object
console.log(typeof 42 / 0); // -> NaN

/* 3 */

let a = '100';
let b = 100;
let c = true;

console.log(typeof a === 'string');  

console.log(typeof b === 'number'); 

console.log(typeof c === 'boolean'); 

/* 4 */

console.log('5' + 3); // -> 53
console.log('5' - 3); // -> 2
console.log(true + 1); // -> true
console.log(false + '1'); // -> false1
console.log('10' / '2'); // -> 5
console.log('2' * '3'); // -> 6

/* 5 */

let strNum = '123';
let boolVal = true;
let emptyStr = '';

console.log(typeof(Number(strNum)));
console.log(typeof(Number(boolVal)));
console.log(typeof(Boolean(emptyStr)));
console.log(typeof(String(0)));
console.log(typeof(String(255)));

/* 6 */

let length = '42px'

var numberlength = parseFloat(length);
let logic = Boolean(numberlength)

console.log(numberlength)
console.log(logic)
console.log(numberlength + 10)
console.log(numberlength *2)

/* 7 */

let age = 25;

if (age < 18){
    return console.log("Доступ запрещён")
}

else if (18 < age & age < 60){
    return console.log("Доступ разрешён")
}

else if (age > 60){
    return console.log("Скидка")
}

