// Ассинхронный код - это функции которые выполняются в фоновом режиме.
// Дойдя до асс операции интерпретатор запустит асинх операцию и не дожидаясь завершения продолжит выполнять дальше

// setTimeout , setInterval
// Запросы на бекенд
// Преобразование DOM

console.log(1)

setTimeout(()=> {
    console.log(2)
}, 1000)

console.log(3)   // 132

// Ассинхронный код выполняется всегда после синхронного
// Ассинхронным кодом считаются долгие операции или операции, время выполнения которых непредсказуемо

// Promise - специальный объект для работы с ассинхронным кодом
// Promise имеет свойство state (status)
// - pending
// - fulfilled - выполнено с успехом
// - rejected - выполнено с ошибкой
// Promise имеет свойство value (скрытое)

const promise1 = new Promise((resolve, reject )=>{ //callback 
    //Ассинхронная операция
})
.then(()=>{

})
.catch(()=>{

})
.finally(()=>{
    // выполняется всегда
})



const getData = ()=> {
    return 'Data'
}

const promise = new Promise((resolve,reject)=>{
    const data = ''
    setTimeout(()=>{
        data = getData()
        resolve(data)
    }, 1000)
})
.then((data)=>{
    if (data === undefined)
        throw new Error("Данные не определены");
    else 
        return data.json()
})
.then((data)=>{
    document.insertData(data)
})
.catch((err)=>{
    console.log(err.message)
})




// Js - однопоточный значит может выполнятся только один процесс
// Event loop
// Call stack , Web api, callback queue -> microtask(promise, queuemicrotask) macrotask(request, events, setTimeout)

console.log('start'); 

setTimeout(() => console.log('timeout'), 0);

Promise.resolve()
  .then(() => console.log('promise 1'))
  .then(() => console.log('promise 2'))
  .then(() => console.log('promise 3'));

console.log('end');
// start, end, 1,2,3 , timeout



setTimeout(() => console.log('timeout 1'), 0);
setTimeout(() => console.log('timeout 2'), 0);

Promise.resolve().then(() => {
  console.log('promise 1');
  Promise.resolve().then(() => console.log('promise 2'));
});

console.log('sync');
//sync,  promise 1, promise 2, timeout 1, timeout 2


console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => console.log(3));
}, 0);

Promise.resolve().then(() => {
  console.log(4);
  setTimeout(() => console.log(5), 0);
});

console.log(6);
// 1, 6, 4, 2, 3, 5


Promise.resolve()
  .then(() => console.log('then'))
  .finally(() => console.log('finally'));

Promise.reject('err')
  .catch(() => console.log('catch'));

setTimeout(() => console.log('timeout'), 0);

console.log('sync');

// sync, then, catch, finally, timeout

// async/await - реализация promise но в более удобном виде
// async == new Promise

async function F1() {
    const result = await new Promise((resolve)=>{
        setTimeout(()=>{resolve('promise done')}, 3000)
    })
    const data = await result.json()
    return data
}

F1()