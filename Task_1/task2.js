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

/* 
1. functions 
2. circuit
*/