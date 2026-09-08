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
    people.reduce((acc, taskent) => {
        acc[taskent.age] = (acc[taskent.age] || 0) + 1;
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

  const result3 = workers.reduce((acc,employee)=>{
    return [...acc, ...employee.tasks.map((task)=>{
      return {...task, performer: {
        name: employee.name,
        position: employee.position
      }}
    })]
  }, [])
  console.log(result3)

// 5.2

const result4 = Math.round(workers
  .reduce((acc,employee)=>{
    return [...acc, ...employee.tasks.map((task)=>{
      return {...task, performer: {
        name: employee.name,
        position: employee.position
      }}
    })]
  }, [])
  .reduce((acc, task)=>{
    if (task.status === 'done'){
      return acc+1
    } 
    return acc
  }, 0) / result3.length * 100, 2)

console.log(result4)

// 5.3

const result5 = result3
  .reduce((acc,task, i)=>{
    return acc + task.hours
  }, 0) / result3.length
  console.log(result5)

  // 5.4 — Количество задач на каждого сотрудника

  // Нужно получить:
  // { Анна: 3, Борис: 2, Вика: 4, Глеб: 2 }

const result6 = workers
  .reduce((acc, employee)=>{
    return {
      ...acc,
      [employee.name] : employee.tasks.length
    } 
  },{})
console.log(result6)

// 5.5 — Самый эффективный сотрудник

// Нужно получить: { name: 'Борис', avgHours: 1.5 } (сотрудник с наименьшим средним временем на задачу, учитывая все задачи, включая pending)

const result7 = workers
  .map((elem)=>{
    return {
      name: elem.name,
      avgHours: elem.tasks.reduce((acc,task)=> acc+task.hours,0)/elem.tasks.length
    }
  })
  .sort((a,b)=>{
    return a.avgHours - b.avgHours
  })[0]
console.log(result7)
// 5.6 — Статистика по должностям

// Нужно получить:

// {
//   Разработчик: {
//     employees: ['Анна', 'Вика'],
//     totalTasks: 7,
//     doneTasks: 4,
//     pendingTasks: 3,
//     totalHours: 20,
//     avgHours: 2.86,
//     efficiency: '57.14%'
//   },
//   Тестировщик: {
//     employees: ['Борис'],
//     totalTasks: 2,
//     doneTasks: 2,
//     pendingTasks: 0,
//     totalHours: 3,
//     avgHours: 1.5,
//     efficiency: '100%'
//   },
//   Дизайнер: {
//     employees: ['Глеб'],
//     totalTasks: 2,
//     doneTasks: 1,
//     pendingTasks: 1,
//     totalHours: 8,
//     avgHours: 4,
//     efficiency: '50%'
//   }
// }

const result8 = workers
  .reduce((acc,worker)=>{
    if (acc[worker.position] == undefined){
      acc[worker.position] = {
        employees: [worker.name],
        tasks: worker.tasks
      }
    } else {
      acc[worker.position].employees.push(worker.name)
      acc[worker.position].tasks = [
        ...acc[worker.position].tasks,
        ...worker.tasks
      ]
      
    }
    return acc
  },{})
  console.log(result8)