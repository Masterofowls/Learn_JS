// 1
const User = {
    name: 'Alex'
}

Object.defineProperty(User, 'name', {writable: false, /*configurable: true*/})
console.log('1',Object.getOwnPropertyDescriptor(User, 'name'))

// 1.2

const counter = {
    _value: 0
}

Object.defineProperty(counter, 'value', {
    enumerable: false,
    get() {
        return this._value;
    },
    set(newValue) {
        if (typeof newValue !== 'number') {
            throw new TypeError('Значение должно быть числом');
        }
        if (newValue < 0) {
            throw new RangeError('Значение не может быть отрицательным');
        }
        this._value = newValue;
    }
});

counter.value = 10;
console.log(counter.value);



//1.3
function makeObservable(obj) {
    const keys = Object.keys(obj);
    
    keys.forEach(key => {
        let value = obj[key];
        
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() {
                console.log(`Читаем свойство ${key}`);
                return value;
            },
            set(newValue) {
                console.log(`Записываем ${newValue} в свойство ${key}`);
                value = newValue;
            }
        });
    });
    
    return obj;
}
// 2.1

const timer = {
    seconds: 0,
    start() {
      setInterval(function() {
        this.seconds++;
        console.log(this.seconds);
      }.bind(this), 1000);
    }
  };

timer.start();

// 2.2

function sum(a, b) {
    if (this && this.multiplier !== undefined) {
        return (a + b) * this.multiplier;
    }
    return a + b;
}

const context = { multiplier: 2 };

console.log(sum.call(context, 5, 3)); 
console.log(sum.apply(context, [5, 3])); 

// 2.3

function multiply(a, b) {
    return a * b;
}

const context1 = {};
const double = multiply.bind(context1, 2);

console.log(double(5)); 

// 2.4

function format(prefix, suffix, text) {
    return prefix + text + suffix;
}

const addBrackets = format.bind(null, '[', ']');

console.log(addBrackets('Hello')); // [Hello]


// 3.1

class Animal {
    constructor(name) {
        this.name = name
    }
    speak(){
        console.log(`${this.name} издаёт звук`)
    }
}

const dog = new Animal('Джек')
dog.speak()

// 3.2
class Animal2 {
    constructor(name) {
        this.name = name
    }
    speak(){
        console.log(`${this.name} издаёт звук`)
    }
    static compare(animalA, animalB) {
        return animalA.name === animalB.name;
}
}

const cat = new Animal2('Мурка')
const parrot = new Animal2("Кеша")
console.log(Animal2.compare(parrot, cat));

// 3.3

class Car {
    constructor(brand) {
        this.brand = brand;
    }
    checkExample(example) {
        if (example instanceof Car) {
            console.log(example.brand);
        } else {
            console.log("Не машина");
        }
    }
}

const Ford = new Car('Ford');

Ford.checkExample(Ford); // Ford
Ford.checkExample({ brand: 'Toyota' }); 

//4.1

class User3 {
    constructor(name, age) {
        this.name = name;
        this._age = age; 
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            throw new Error("Age cannot be negative");
        }
        if (value > 150) {
            throw new Error("Age is too high");
        }
        this._age = value;
    }
}

//4.2

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    get area() {
        return this.width * this.height;
    }
}

const rectangle1 = new Rectangle(20, 30);
console.log(rectangle1.area); 

//4.3

class Account {
    #password; 

    constructor(login, password) {
        this.login = login;
        this.password = password;
    }

    set password(value) {
        this.#password = value + "_hash";
    }

    get password() {
        return "****";
    }

}

const account1 = new Account("user123", "mySecretPass");

console.log(account1.password); 
console.log(account1.login); 

//5.1

class Animal3 {
    constructor(name) {
        this.name = name
    }
    speak(){
        console.log(`${this.name} издаёт звук`)
    }
    static compare(animalA, animalB) {
        return animalA.name === animalB.name;
}
}

class Dog extends Animal3 {
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
    speak(){
        console.log(`${this.name} barking`)
    }
    }

const dog3 = new Dog('Jack', 'Foxterrier');
dog3.speak()

// 5.2

class Vehicle {
    constructor(wheels, speed) {
        this.wheels = wheels;
        this.speed = speed;
    }
    
    getInfo() {
        return `Transport: ${this.wheels} wheels, speed ${this.speed} km/h`;
    }
}

class Bicycle extends Vehicle {
    constructor(speed) {
        super(2, speed); 
    }
    
    ringBell() {
        console.log("bip - bip!");
    }
}

const bike = new Bicycle(25);
console.log(bike.ringBell())

// 5.3

class ArrayExtended extends Array {
    last() {
        if (this.length === 0) {
            return undefined;
        }
        return this[this.length - 1];
    }
    
    sum() {
        return this.reduce((acc, val) => acc + val, 0);
    }
}


const arr = new ArrayExtended(1, 2, 3, 4, 5);
console.log(arr.last()); 
console.log(arr.sum()); 
console.log(arr); 

// 5.5

class User4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    getInfo() {
        return `Имя: ${this.name}, Возраст: ${this.age}`;
    }
}

class ValidatorUser extends User4 {
    constructor(name, age) {
        super(name, age);
        
        Object.defineProperty(this, 'name', {
            writable: false,
            configurable: false,
            enumerable: true
        });
    }
    
    set age(value) {
        if (value < 18) {
            console.warn(`Too young: возраст ${value} меньше 18`);
        }
        this._age = value;
    }
    
    get age() {
        return this._age;
    }

    static createAdult(name, age) {
        if (age < 18) {
            console.log(`Возраст ${age} меньше 18. Автоматически установлен 18`);
            age = 18;
        }
        return new ValidatorUser(name, age);
    }
}

console.log('Тест');
const user1 = new ValidatorUser('Alex', 25);
console.log(user1.getInfo()); 