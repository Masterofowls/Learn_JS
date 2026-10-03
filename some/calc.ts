class Calculator {
    value1: number;
    value2: number;
    operator: string;

    constructor(value1: number, value2: number, operator: string) {
        this.value1 = value1;
        this.value2 = value2;
        this.operator = operator;
    }

    addition(): number {
        return this.value1 + this.value2;
    }

    subtraction(): number {
        return this.value1 - this.value2;
    }

    multiplication(): number {
        return this.value1 * this.value2;
    }

    division(): number | string {
        if (this.value2 === 0) {
            return 'Cannot divide by zero';
        }
        return this.value1 / this.value2;
    }

    calculate(): number | string {
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
const value1: number = Number(prompt('Enter the first number:'));
const operator: string = prompt('Enter an operator (+, -, *, /):') ?? '';
const value2: number = Number(prompt('Enter the second number:'));

const calc = new Calculator(value1, value2, operator);
console.log(`Result: ${calc.calculate()}`);