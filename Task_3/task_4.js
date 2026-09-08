// 1
const numbers = [2, 5, 8, 3, 10, 7, 4, 6];

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Сумма:', sum);

const product = numbers.reduce((acc, num) => acc * num, 1);
console.log('Произведение:', product);

const evenCount = numbers.reduce((acc, num) => num % 2 === 0 ? acc + 1 : acc, 0);
console.log('Количество четных чисел:', evenCount);
;

//2

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'grape', 'orange'];

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(fruitCount);

// 3
const users = [
  { name: 'Анна', city: 'Москва' },
  { name: 'Борис', city: 'Москва' },
  { name: 'Виктор', city: 'СПб' },
  { name: 'Галина', city: 'Москва' },
  { name: 'Дмитрий', city: 'СПб' },
  { name: 'Елена', city: 'Казань' }
];

const result = users.reduce((acc, user) =>{
  acc[user.city] = acc[user.city] || [];
  acc[user.city].push(user.name);
  return acc;
}, {});
console.log(result)

//4
const products = [
  { name: 'Ноутбук', category: 'electronics', price: 50000 },
  { name: 'Мышь', category: 'electronics', price: 1500 },
  { name: 'Книга', category: 'books', price: 800 },
  { name: 'Телефон', category: 'electronics', price: 30000 },
  { name: 'Тетрадь', category: 'stationery', price: 80 },
  { name: 'Ручка', category: 'stationery', price: 50 },
  { name: 'Клавиатура', category: 'electronics', price: 3000 }
];

// Ожидаемый результат:
// {
//   electronics: 84500,  // 50000 + 1500 + 30000 + 3000
//   books: 800,
//   stationery: 130      // 80 + 50
// }

const result2 = products.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + product.price;
  return acc;
}, {});
console.log(result2)

// 5
const students = [
    { name: 'Анна', grades: [85, 90, 78, 92] },
    { name: 'Борис', grades: [45, 55, 60, 50] },
    { name: 'Виктор', grades: [70, 75, 80, 85] },
    { name: 'Галина', grades: [40, 35, 45, 50] }
  ];
  
const result3 = students.map(({ name, grades }) => {
    const average = grades.reduce((sum, g) => sum + g, 0) / grades.length;
    return { name, average, passed: average >= 60 };
  });

console.log(result3)