
//1.1
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

// 2.1
const bankAccount = {
    owner: 'Ержан',
    balance: 1000,
    deposit: (amount)  => {this.balance += amount; return this.balance;},
    withdraw: (amount) => {this.balance -= amount; return this.balance},
    showBalance: () => {console.log(`Владелец ${this.owner}, Баланс ${this.balance}`)}
}

bankAccount.showBalance()

// 2.2
const counter = {
    value: 0,
    increment() {
        this.value += 1;
        return this;
    },
    decrement() {
        this.value -= 1;
        return this;
    },
    getValue() {
        return this.value;
    }
};

console.log(counter.increment().increment().decrement().getValue());

// 2.3
const team = {
    name: "Astana United",
    players: ["Али", "Дамир", "Рустем"],
    
    addPlayer(name) {
        this.players.push(name);
        return this.players;
    },
    
    showTeam() {
        console.log(`Команда ${this.name}: ${this.players.join(', ')}`);
    }
};

// 3.1
const grades = {
    math: 5, 
    physics: 4,
    chemistry: 3,
    biology: 5
}

let count = 0;
let sum = 0;
for (grade in grades){
    count++
    sum+=grades[grade]
}
const average = sum / count;
console.log(`${sum}, \n ${count}`)

//3.2
const mixed = { a: 10, b: "text", c: 25, d: "hello", e: 30, f: true };

const numbersOnly = {};

for (let key in mixed) {
    if (typeof mixed[key] === 'number') {
        numbersOnly[key] = mixed[key];
    }
}

console.log(numbersOnly);

//3.3
const prices = { apple: 100, banana: 50, orange: 80 };

const increasedPrices = {};

for (let key in prices) {
    increasedPrices[key] = prices[key] * 1.2;
}

console.log(increasedPrices);

// 4.1
const original = {
  name: "Книга",
  details: {
    pages: 300,
    language: "Русский"
  }
};

const copy = { ...original };

copy.name = "Журнал";
copy.details.pages = 150;

console.log(original);

// 4.2
function deepCopy(obj) {
  const copy = {};
  
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      copy[key] = deepCopy(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }
  
  return copy;
}

const original = {
  name: "Книга",
  details: {
    pages: 300,
    language: "Русский"
  }
};

const copy = deepCopy(original);

copy.name = "Журнал";
copy.details.pages = 150;

console.log(original);

console.log(copy);

//4.3
function merge(obj1, obj2) {
  const result = {};
  
  for (let key in obj1) {
    result[key] = obj1[key];
  }
  
  for (let key in obj2) {
    result[key] = obj2[key];
  }
  
  return result;
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 20, d: 4, e: 5 };

const merged = merge(obj1, obj2);

console.log(merged);

console.log(obj1);

console.log(obj2);
