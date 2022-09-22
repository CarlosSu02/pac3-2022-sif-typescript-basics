
export const listArray = () => {

    let array = [1, 2, 3, 4, 5];

    for (const number of array) {

        console.log(number);

    }

}

export const listString = () => {

    console.log('\n');

    let greeting = 'Hello strange!';

    for (const char of greeting) {

        console.log(char);

    }

}

export const listInLoop = () => {

    console.log('\n');

    let array = [1, 2, 3, 4, 5];

    for (const key in array) {

        console.log(key);

    }

}
