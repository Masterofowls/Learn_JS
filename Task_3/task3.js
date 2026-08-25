//Task1
const arr = [1,2,3,4,5,6,7,8,9,10];
let result = arr.filter(num => num % 2 === 0).map(num => num **2);
console.log(`'Task1' ${result}`)
//Task2
const arr1 = ['яблоко', 'банан', 'апельсин', 'груша'];
let result1 = arr1.reduce((acc,));
console.log(`'Task2' ${result1}`)
//Task3
const grades = [4, 5, 3, 4, 2, 5, 4, 3];

const mapping = {
  5: 'отлично',
  4: 'хорошо',
  3: 'удовлетворительно',
  2: 'неуд'
};

const result2 = grades.reduce((acc, grade) => {
  const key = mapping[grade];
  if (key) {
    acc[key] = (acc[key] || 0) + 1;
  }
  return acc;
}, {
  отлично: 0,
  хорошо: 0,
  удовлетворительно: 0,
  неуд: 0
});

console.log('Task3' ,result2);

//Task 4
const buyers = [
    { name: 'Анна', purchases: 1200 },
    { name: 'Борис', purchases: 3400 },
    { name: 'Вика', purchases: 800 },
    { name: 'Глеб', purchases: 2100 },
    { name: 'Даша', purchases: 5600 }
];

const result4 = buyers
    .sort((a, b) => b.purchases - a.purchases)
    .slice(0, 3)
    .map(buyer => `${buyer.name} (${buyer.purchases})`)
    .join(', ');
console.log('Task4',result4);

//Task5
const tasks = [
    { task: 'Купить молоко', daysLeft: 2 },
    { task: 'Сдать отчет', daysLeft: -1 },
    { task: 'Позвонить клиенту', daysLeft: 0 },
    { task: 'Заплатить налоги', daysLeft: -3 },
    { task: 'Сходить в зал', daysLeft: 5 }
];

const result5 = tasks
    .filter(item => item.daysLeft < 0) 
    .map(item => item.task.toUpperCase()) 

console.log('Task5',result5);

//Task6
const stores = [
    { name: 'Магнит', sales: [100, 200, 150] },
    { name: 'Пятерочка', sales: [300, 100, 250, 200] },
    { name: 'Ашан', sales: [400, 350] }
    ]

const result6 = stores.reduce((acc, store) => {
        const totalSales = store.sales.reduce((sum, price) => sum + price, 0);
        acc[store.name] = totalSales;
        return acc;
    }, {}); 

console.log('Task6',result6);

//Task7
const posts = [
    { title: 'Пост 1', tags: ['js', 'react'] },
    { title: 'Пост 2', tags: ['js', 'css'] },
    { title: 'Пост 3', tags: ['react', 'html'] },
    { title: 'Пост 4', tags: ['js', 'react', 'css'] }
    ]

const uniqueTags = posts.reduce((acc, post) => {
    for (const tag of post.tags) {
        if (!acc.includes(tag)) {
        acc.push(tag);
    }
    }
    return acc;
}, [])
.sort();

console.log('Task7',uniqueTags);

//Task8
const people = [
    { name: 'Аня', age: 25 },
    { name: 'Боря', age: 32 },
    { name: 'Витя', age: 25 },
    { name: 'Галя', age: 28 },
    { name: 'Дима', age: 32 },
    { name: 'Ева', age: 25 }
  ];

const stats = people.reduce((acc, person) => {
    acc[person.age] = (acc[person.age] || 0) + 1;
    return acc;
  }, {}); 

const sortedAges = Object.keys(stats).sort((a, b) => a - b);

const parts = sortedAges.map(age => {
    const count = stats[age];
    let word = 'человек';
    if (count === 1) {
    word = 'человек';
    } else if (count >= 2 && count <= 4) {
    word = 'человека';
    } else {
    word = 'человек';
    }
    
    return `${age}: ${count} ${word}`;
});

const result7 = parts.join(', ');

console.log(result7);
