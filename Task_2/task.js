// 1

const user = {
    name: 'Айжан', 
    age: 25,
    isAdmin: false
}
user.city = 'Астана'
user.age = 26
delete user.isAdmin
console.log(user)

//2

function buildObject(key, value)