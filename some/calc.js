class Calculator {
    constructor(value1, value2, operator) {
        this.value1 = value1;
        this.value2 = value2;
        this.operator = operator;
    }

    addition() {
        return this.value1 + this.value2;
    }

    subtraction() {
        return this.value1 - this.value2;
    }

    multiplication() {
        return this.value1 * this.value2;
    }

    division() {
        if (this.value2 === 0) {
            return 'Cannot divide by zero';
        }
        return this.value1 / this.value2;
    }

    calculate() {
        switch (this.operator) {
            case '+': return this.addition();
            case '-': return this.subtraction();
            case '*': return this.multiplication();
            case '/': return this.division();
            default:  return 'Invalid operator';
        }
    }
}

// --- Get input via prompt ---
const value1 = Number(prompt('Enter the first number:'));
const operator = prompt('Enter an operator (+, -, *, /):');
const value2 = Number(prompt('Enter the second number:'));

// --- Create instance and calculate ---
const calc = new Calculator(value1, value2, operator);
console.log(`Result: ${calc.calculate()}`);