let obj1 = {
    number: 1,
    iseven: false
}

arr1 = Object.keys(obj1);
console.log(Array.isArray(arr1))

let obj2 = {
    names : ['John', 'Milton'],
    age: [23, 21]
}

names = obj2.names
Jo = obj2.names[0] + ' : ' + obj2.age[0]
console.log(names)
console.log(Jo)

let obj3 = {
    users : [ ['Dave', 23], ['Sara', 22] ]
}

let users1 = []
users1.push(obj3.users[0][0], obj3.users[1][0])
console.log(users1)

const obj4 = {
    numbers: [1, 10, 4, 9, 7, 22, 8],
    letters: ['a', 'b', 'c', 'e', 'd']
};

obj4.mixed = [...obj4.numbers, ...obj4.letters].sort();
console.log(obj4);