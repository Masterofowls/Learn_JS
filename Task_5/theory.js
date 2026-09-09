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

Promise.resolve() = const promose = new Promise(()=>{
    promise()
})
