// 5.1
const person = {
    name: 'Данияр',
    introduce() {console.log(`Меня зовут ${this.name}`)}
}

person.introduce()

// 5.2

const robot = {
    model: "T-800",
    getModel(){return this.model}
}
const getModelFunc = robot.getModel
console.log(getModelFunc()) 
// undefined так как теперь мы обращаемся не к нашему объекту robot а к глобальному


//5.3
const obj = {
    value: 100,
    regularMethod() {
        return this.value;
    },
    arrowMethod: () => this.value
};


console.log(obj.regularMethod()); // 100 // имеет соббственный this
console.log(obj.arrowMethod());   // undefined // не имеет собственный this

//5.4


const timerA = {
    seconds: 0,
    start() {
        setInterval(() => {
            this.seconds++;
            console.log(`Стрелочная: ${this.seconds}`);
        }, 1000);
    }
};


const timerB = {
    seconds: 0,
    start() {
        setInterval(function() {
            this.seconds++;
            console.log(`Обычная: ${this.seconds}`);
        }, 1000);
    }
};


timerA.start(); //  Работает
 timerB.start(); //  Ошибка

 //5.5

const processor = {
    data: 42,
    process() {
        console.log('this в process():', this.data); // 42

   
        function helperRegular() {
            console.log('Обычная функция:', this.data);
        }
        helperRegular(); // undefined 

   
        const helperArrow = () => {
            console.log('Стрелочная функция:', this.data);
        };
        helperArrow(); // 42 

     
        // Способ 1
        const helperBound = helperRegular.bind(this);
        helperBound(); // 42 

        // Способ 2
        const self = this;
        function helperWithSelf() {
            console.log('С self:', self.data);
        }
        helperWithSelf(); // 42 


    }
};

processor.process();

// 5.6

const collection = {
    items: [1, 2, 3],
    result: [],
    multiply(factor) {
        // 1: Стрелочная функция (работает)
        this.result = [];
        this.items.forEach((item) => {
            this.result.push(item * factor);
        });
        console.log('Стрелочная:', this.result); // [2, 4, 6]

        //  2: Обычная функция (не работает)
        this.result = [];
        this.items.forEach(function(item) {
            this.result.push(item * factor);
        });
        console.log('Обычная:', this.result); // []
    }
};

collection.multiply(2);