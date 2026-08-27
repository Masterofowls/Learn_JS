//Task 8

const people = [
    { name: 'Аня', age: 25 },
    { name: 'Боря', age: 32 },
    { name: 'Витя', age: 25 },
    { name: 'Галя', age: 28 },
    { name: 'Дима', age: 32 },
    { name: 'Ева', age: 25 }
];

function getPersonWord(count) {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return 'человек';
    if (lastDigit === 1) return 'человек';
    if (lastDigit >= 2 && lastDigit <= 4) return 'человека';
    return 'человек';
}

const result = Object.entries(
    people.reduce((acc, element) => {
        acc[element.age] = (acc[element.age] || 0) + 1;
        return acc;
    }, {})
)
    .sort((a, b) => a[0] - b[0])
    .map(([age, count]) => `${age}: ${count} ${getPersonWord(count)}`)
    .join(', ');
console.log(result);

// Task 9 
const products = [
    { name: 'Хлеб', price: 30, category: 'еда' },
    { name: 'Мыло', price: 50, category: 'быт' },
    { name: 'Сыр', price: 200, category: 'еда' },
    { name: 'Шампунь', price: 150, category: 'быт' },
    { name: 'Мясо', price: 350, category: 'еда' }
];

const result2 = products
.reduce((acc, product) => {
    if (product.category === 'еда' && product.price >= 50 && product.price <= 300) {
    acc.push({ name: product.name, price: product.price });
    }
    return acc;
}, [])
.sort((a, b) => a.price - b.price)
.map(item => item.name);

console.log(result2); 

//5.1

const workers = [
    {
      name: 'Анна',
      position: 'Разработчик',
      tasks: [
        { task: 'Сделать форму', hours: 4, status: 'done', priority: 'high' },
        { task: 'Настроить БД', hours: 2, status: 'done', priority: 'medium' },
        { task: 'Написать тесты', hours: 3, status: 'pending', priority: 'high' }
      ]
    },
    {
      name: 'Борис',
      position: 'Тестировщик',
      tasks: [
        { task: 'Протестировать форму', hours: 2, status: 'done', priority: 'high' },
        { task: 'Создать баг-репорт', hours: 1, status: 'done', priority: 'medium' }
      ]
    },
    {
      name: 'Вика',
      position: 'Разработчик',
      tasks: [
        { task: 'Сделать API', hours: 5, status: 'done', priority: 'high' },
        { task: 'Документация', hours: 2, status: 'pending', priority: 'low' },
        { task: 'Рефакторинг', hours: 3, status: 'pending', priority: 'medium' },
        { task: 'Деплой', hours: 1, status: 'done', priority: 'high' }
      ]
    },
    {
      name: 'Глеб',
      position: 'Дизайнер',
      tasks: [
        { task: 'Макеты', hours: 6, status: 'done', priority: 'high' },
        { task: 'Иконки', hours: 2, status: 'pending', priority: 'low' }
      ]
    }
  ]

  const result3 = workers.reduce((acc, worker) => {
    const tasksWithPerformer = worker.tasks.map(task => ({
      ...task,
      performer: {
        name: worker.name,
        position: worker.position
      }
    }));
    return acc.concat(tasksWithPerformer);
  }, []);
  
  console.log(result3);

// 5.2

const allTasks = result3; 
const total = allTasks.length;
const doneCount = allTasks.filter(task => task.status === 'done').length;
const percentage = Math.round((doneCount / total) * 100) + '%';

console.log(percentage); 


// 5.3 
const totalHours = allTasks.reduce((sum, task) => sum + task.hours, 0);
const averageHours = totalHours / allTasks.length;
const averageRounded = Math.round(averageHours * 100) / 100;

console.log(averageRounded); 

//5.4

const tasksPerEmployee = result3.reduce((acc, task) => {
  const name = task.performer.name;
  
  if (acc[name]) {
    acc[name] += 1;
  } else {
    acc[name] = 1;
  }
  
  return acc;
}, {});

console.log(tasksPerEmployee); 

// 5.5 

// Шаг 1: Собираем статистику по каждому сотруднику
const workerStats = result3.reduce((acc, task) => {
  const name = task.performer.name;
  const hours = task.hours;
  
  if (!acc[name]) {
    acc[name] = { totalHours: 0, taskCount: 0 };
  }
  
  acc[name].totalHours += hours;
  acc[name].taskCount += 1;
  
  return acc;
}, {});

console.log(workerStats);

let minAvg = Infinity;
let mostEfficient = null;

for (const [name, data] of Object.entries(workerStats)) {
  const avg = data.totalHours / data.taskCount;
  const avgRounded = Math.round(avg * 100) / 100;
  
  console.log(`${name}: ${avgRounded} часов в среднем`);
  
  if (avg < minAvg) {
    minAvg = avg;
    mostEfficient = { name, avgHours: avgRounded };
  }
}

console.log('Самый эффективный сотрудник:');
console.log(mostEfficient); // { name: 'Борис', avgHours: 1.5 }