// Задача 1
console.log(5 + '5'); // '55'
console.log(5 - '5'); // 0
console.log(5 == '5'); // true
console.log(5 === '5'); // false


// Задача 2
let a = 0;
let b = 'Hello';
let c = null;
let result = a || b && c;        
console.log(result); // null

/* && - 2 conditions with boolean
  & - bit operator  
*/
// Задача 3
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// Задача 4
function getEvenNumbers(arr) {
  return arr.filter((num, index, arr) => index % 2 === 0 );
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));


// Задача 5

function checkAge(age) {
  if (age < 18){
    return 'Not allowed'
  } else {
    return 'Welcome'
  }
}
checkAge(15);

// 6

let str = 'JavaScript';
console.log(str.length); // 10
console.log(str[0]); // J
console.log(str.toUpperCase()) // JAVASCRIPT

// 7 

let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

// 8

let x = 5;
let y = 10;

[x, y] = [y, x];

console.log(x); 
console.log(y); 