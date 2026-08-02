/* 8 */

let x = 10;
let y = 25;
let z = 15;

let numbers = [x, y, z];
let max = numbers[0];  

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log(max);

/* 9 */

let password = 'qwerty!'
if (password === ''){
    console.log('Cannot be empty')
} else if (password.length < 6){
    console.log('Too short')
} else if(password.length >= 6 & password.includes('!')){
    console.log("Strong password")
} else {
    console.log('Weak password')
}
/* 10 */

let age = 20;
let message;

message = age >= 18 ? 'Совершеннолетний':'Несовершеннолетний'
console.log(message)

/* 11 */

let daysSinceLastVisit = 5;
let status;

status = daysSinceLastVisit <= 7 ? 'Active' : 'Inactive'
console.log(status)

/* 12 */

let num = 8;
let result = num < 0 
  ? 'отрицательное' 
  : num === 0 
    ? 'ноль' 
    : num % 2 === 0 
      ? 'чётное' 
      : 'нечетное';

console.log(result); 

/* 13 */ 

let day = "сб";

function Today(day) {
    switch (day) {
        case "пн":
        case "вт":
        case "ср":
        case "чт":
        case "пт":
            return "Рабочий день";
        
        case "сб":
        case "вс":
            return "Выходной";
        
        default:
            return "Некорректный день";
    }
}

console.log(Today(day));

/* 14 */

let color = 'red';

function getColor(color) {
    switch (color) {
        case 'red':
            return 'Stop'
        case 'yellow':
            return 'Attention'
        case 'green':
            return 'Walk'
        default:
            return 'Unknown signal'
    }
}

console.log(getColor(color))

/* 15 */

let grade = 'B';

function Mark(grade) {
    switch (grade) {
        case 'A':
        case 'B':
            return 'Great'
        case 'C':
        case 'D':
            return 'Good'
        case 'E':
            return 'Satisfactory'
        case 'F':
            return 'Unsatisfactory'
    
        default:
            return
    }
}

console.log(Mark(grade))

