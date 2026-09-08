
const user = {
    name: 'Daniil',
    age: 23
}

//Дескрипторы- определённые настройки свойства объекта с помощью которых можно настраивать изменяемость свойства

console.log(Object.getOwnPropertyDescriptor(user, 'name'))

Object.defineProperty(user, 'name', {writable: false, configurable: false})
console.log(Object.getOwnPropertyDescriptor(user, 'name'))

user.name = 'Ivan'
delete user.name
console.log(user)

// корректно работает именно в strict mode

//2

function F1 (a,b) {
    console.log(this)
    console.log(a, b)
}

F1() // Global Object

const obj = {
    a: 1,
    F2 () {
        console.log(this)
    },
    F1
}

obj.F2()
obj.F1()

const obj1 = {
    a: 1
}

const obj2 = {
    a: 2
}

const F1Binded = F1.bind(obj1).bind(obj2)

F1Binded()

F1.call(obj1, 4, 5)
F1.apply(obj2, [6,7])

//3 

// Class - универсальный расширяемых шаблон для создания объектов
// Объект созданный с помощью класса называется экземпляром этого класса

class User {
    constructor(name, age, email, balance){
        this.name = name
        this.age = age
        this.email = email
        this.balance = balance
        this.inventory = []
    }
    buyItem(item, price){
        if (this.balance <= price)
            console.log('Не хватает средств')
        else {
        this.balance-=price
        this.inventory.push(item)
        }
        }
    }


const User1 = new User('Daniil', 23, 'daniil.sht@gmail.com', 1000)
const User2 = new User("Ivan", 23, 'ivanmail@mail.ru', 10000)

User1.buyItem('PC', 10000)
User2.buyItem('PC', 1000)

console.log(User1, User2)


const obj3 = {
    _a: 1,   //_a - приватное свойство 
    get a (){
        return this._a
    }
}

console.log(obj3.a)

const obj4 = {  //_a - приватное свойство 
    get a (){
        return this._a
    }
}

console.log(obj4.a)

class UserPrivate {
    constructor(name, age, email, balance){
        this._name = name
        this._age = age
        this._email = email
        this._balance = balance
        this.inventory = []
    }
    buyItem(item, price){
        if (this.balance <= price)
            console.log('Не хватает средств')
        else {
        this.balance-=price
        this.inventory.push(item)
        }
        }
    get name () {
        return this._name
    }
    get email(){
        return this.email
    }
    set email (newEmail) {
        return this._email = newEmail
    }
    }
// get - обязательно возвращать

const User3 = new UserPrivate('Daniil', 23, 'daniil.sht@gmail.com', 1000)

User3.email = 'newmyemail'
console.log(User1.email)

class Animal {
    constructor(name){
        this.speed = 0
        this.name = name
    }
    run (speed){
        this.speed  = speed
    }
    stop (speed){
        this.speed = 0
    }
}

class Rabbit extends Animal {
    constructor(name, color){
        super(name)
        this.color = color
    }
    hide(){
        console.log(`${this.name} прячется`)
    }
    stop(){
        super.stop(); // super - ссылка на метод из родительского класса
        this.hide()

    }
}

// Любая функция может быть конструктором

function UserCreate (){
    this.name = name 
    this.age = age
}

const User5 = new UserCreate('Daniil', 23 )
console.log(User4)