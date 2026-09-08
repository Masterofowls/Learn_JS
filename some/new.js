const users = [['Adam', 25], ['Jensen', 33]]
const obj = Object.fromEntries(users)
const keys = Object.keys(obj)
console.log(keys)

const users1 = {
    users: ['Jade', 'Wilson', 'Andrew'],
    age: [30, 20, 32]
}
// output = [['Jade', 30], ['Wilson', 20]]

const result = users1.users.reduce((acc, name, i) => {
    acc.push([name, users1.age[i]]);
    return acc;
}, []);
console.log(result); 