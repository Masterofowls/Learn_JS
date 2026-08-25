// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }
// for (const element of object) {
// }

// //mutating , no callback
// arr.push()
// arr.pop() // return pop value
// arr.shift()
// arr.unshift()
// arr.splice(start, count, el1, el2)
// arr.splice(1,2, 67, 34) // return arr of splice
// //additional
// arr.at(i) / (-i) / index // arr[i]
// arr.includes(element, from) // from - optional // true, false
// arr.indexOf(item, from) //
// arr.lastIndexof()
// arr.reverse()
// // callback
// const arr = [1,2,3,4,5]

// const newArr = []
// arr.forEach((element, index, arr)=>{
//     console.log(element, index, arr)
//     newArr.push(element * 2)
// })  // will call console.log 5 times 

// arr.map((element, index, array)=>{
//     if (index % 2 ===0)
//         return elem * 2
//     return 0
// })

// arr.find((elem,index, arr) =>{
//     if (elem === 3)
//         return true  
// }) // find stops when function return true, return value // findIndex, findLast, findLastIndex

// arr.filter((elem, index, arr)=>{
//     if (elem % 2 ===0)
//         return true
// })// create array of all matching element

// arr.reduce((accumulator, element, index, array)=>{
    
// }, init)

// arr.reduce((acc, elem)=>{
//     return acc + elem
// }, 0) // sum of arr elements




const stores = [
    { name: 'Магнит', sales: [100, 200, 150] },
    { name: 'Пятерочка', sales: [300, 100, 250, 200] },
    { name: 'Ашан', sales: [400, 350] }
]

const result = stores.reduce((acc, elem)=>{
    return {
        ...acc, 
        [elem.name]: elem.sales.reduce((acc, elem) => acc + elem)
    }
}, {})
console.log(result)

const lang = [
    { title: 'Пост 1', tags: ['js', 'react'] },
    { title: 'Пост 2', tags: ['js', 'css'] },
    { title: 'Пост 3', tags: ['react', 'html'] },
    { title: 'Пост 4', tags: ['js', 'react', 'css'] }
]

const result2 = lang.reduce((acc,elem)=>{
    return [
        ...acc,
        ...elem.tags.filter((tag, index)=>{
            if (!acc.includes(tag)){
                return true
            }
        })
    ]
},[])

console.log(result2)