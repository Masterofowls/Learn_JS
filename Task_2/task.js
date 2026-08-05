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

//1.2

function buildObject(key, value) {
    return { [key]: value };
}
buildObject()

// 1.3

const car = { brand: "Toyota", year: 2020, color: "red" }
function hasProp(obj, prop) {
    if (prop in obj) {
        return true;
    } else {
        return false;
    }
}
console.log(hasProp(car, 'brand'));  
console.log(hasProp(car, 'model'));  

