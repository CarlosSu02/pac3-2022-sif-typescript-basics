
export default class Types {

    number1: number;
    number2: number;
    // result: number;

    constructor(number1: number, number2: number) {

        this.number1 = number1;
        this.number2 = number2;
        
    }

    sum(number1: number, number2: number): number {

        return number1 + number2;

    }

    subtraction(number1: number, number2: number): number {

        return number1 - number2;

    }

    multiplication(number1: number, number2: number): number {

        return number1 * number2;

    }

    division (number1: number, number2: number): number | string {

        // return number1 / number2;

        return (number2 !== 0) ? number1 / number2 : `Cannot be divided by 0!`;

    }

};
