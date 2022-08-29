// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minPrinter(a, b, c) {
    let v = a;
    if (v > b) {
        v = b;
    }
    if (v > c) {
        v = c;
    }
    console.log(v);
}

minPrinter(16, -3, 0);

// let mIn = (a, b, c) =>{
//     let newArr = [a, b, c];
//     return newArr.reduce((acc, value) => acc > value ? acc = value : acc);
// }
// console.log(mIn(7, 2, 1));

console.log('-------------');

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxPrinter(a, b, c) {
    let v = a;
    if (v < b) {
        v = b;
    }
    if (v < c) {
        v = c;
    }
    console.log(v);
}

maxPrinter(2, 3, 4,);

// let mAx = (a, b, c) => {
//     let arr = [a, b, c];
//     return arr.reduce((acc, value) => acc > value ? acc : value);
// };
// console.log(mAx(2,5,8))

console.log('-------------');

// - створити функцію яка повертає найбільше число з масиву

let array = [23, 2, 24, 4, 0, 35, 5, -70, 64];

function maxNumber(array) {
    let v = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > v) {
            v = array[i];
        }
    }
    return v;
}

console.log(maxNumber(array));

// console.log(array.reduce((acc, value) => acc < value ? acc = value : acc));

console.log('-------------');

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function average(array) {
    let a = 0;
    for (let i = 0; i < array.length; i++) {
        a += array[i] / array.length;
    }
    return a.toFixed(2);
}

console.log(average(array));

// console.log(Math.round(array.reduce((acc, value) => acc += value / array.length, 0)));

console.log('-------------');

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function foo(...c) {
    let max = c[0];
    let min = c[0];
    for (let i = 0; i < c.length; i++) {
        if (max < c[i]) {
            max = c[i];
        }
        if (min > c[i]) {
            min = c[i];
        }
    }
    console.log(max);
    return min;
}

foo(0, 67, 23, 16, -5);

// let minMax = (...x) => {
//     let min = x.reduce((acc, value) => acc < value ? acc : value);
//     let max = x.reduce((acc, value) => acc > value ? acc : value);
//     return {min, max};
// };
//
// console.log(minMax(25, -24, 41, 6, 4, 0));

console.log('-------------');

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let emptyArr = [];

function random(amount) {
    for (let i = 0; i < amount; i++) {
        emptyArr[i] = Math.round(Math.random() * 100);
    }
    console.log(emptyArr);
}

random(10);

console.log('-------------');

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.

let emptyArr1 = [];

function randomWithLimit(amount, limit) {
    for (let i = 0; i < amount; i++) {
        emptyArr1[i] = Math.round(Math.random() * (limit));
    }
    console.log(emptyArr1);
}

randomWithLimit(10, 58);

console.log('-------------');

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverse1 = (array) => {
    let rev = [];
    let indexRev = 0;
    for (let j = array.length - 1; j >= 0; j--) {
        rev[indexRev++] = array[j];
    }
    return rev;
};
console.log(reverse1([1, 2, 3, 4, 5]));

// function reverse(array) {
//     return array.reverse();
// }
//
// console.log(reverse(array));

console.log('-------------');

// - створити функцію, яка якщо приймає один аргумент, просто виводоить його, якщо два аргументи - складає або конкатенує їх між собою.

function concat(...a) {
    if (a.length === 1) {
        console.log(a);
    } else if (a.length === 2) {
        console.log(a[0] + a[1]);
    } else {
        console.log('Must be only 1 or 2 arguments. Try again!')
    }
}

concat('Number ', 20);

console.log('-------------');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function sum(array1, array2) {
    let maxLength = array1.length;
    if (maxLength < array2.length) {
        maxLength = array2.length;
    }
    let newArray = [];
    for (let i = 0; i < maxLength; i++) {
        if (typeof array1[i] === "number" && typeof array2[i] === "number") {
            newArray[i] = array1[i] + array2[i];
        } else if (typeof array1[i] === "number") {
            newArray[i] = array1[i];
        } else if (typeof array2[i] === "number") {
            newArray[i] = array2[i];
        } else {
            console.log("Try Again");
        }
    }
    return newArray;
}

let arr1 = [2, 3, 16];
let arr2 = [55, 43, 2, 20];

console.log(sum(arr1, arr2));

console.log('-------------');

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let arrayOfObjects = [
    {name: 'Dima', age: 13},
    {model: 'Camry'}
];

let keysPrinter = (array) => {
    return array.reduce((acc, value) => [...acc, ...Object.keys(value)], []);
};

console.log(keysPrinter(arrayOfObjects));

console.log('-------------');

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]


let valuesPrinter = (array) => {
    return array.reduce((acc, value) => [...acc, ...Object.values(value)], []);
};

console.log(valuesPrinter(arrayOfObjects));

