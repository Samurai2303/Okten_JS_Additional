// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let minPrinter = (a, b, c) => {
    let min = a;
    if (min > b) {
        min = b;
    }
    if (min > c) {
        min = c;
    }
    console.log(min);
}

minPrinter(1, -5, 3);

console.log('------------');

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let maxPrinter = (a, b, c) => {
    let max = a;
    if (max < b) {
        max = b;
    }
    if (max < c) {
        max = c;
    }
    console.log(max);
}

maxPrinter(12, 8, 2);

console.log('------------');

// - створити функцію яка повертає найбільше число з масиву

let numbers = [12, 34, 46, 0, 4, 23, -13, 3];

let maxNumber = (array) => {
    let max = array[0];
    for (let arrayElement of array) {
        if (max < arrayElement) {
            max = arrayElement;
        }
    }
    return max;
};

console.log(maxNumber(numbers));

// let mAx = (array) => {
//     return array.reduce((acc, value) => acc > value ? acc : value);
// };
// console.log(mAx(numbers));

console.log('------------');

// - створити функцію яка повертає найменьше число з масиву

let minNumber = (array) => {
    let min = array[0];
    for (let arrayElement of array) {
        if (min > arrayElement) {
            min = arrayElement;
        }
    }
    return min;
};

console.log(minNumber(numbers));

console.log('------------');

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sum = (array) => {
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement;
    }
    return sum;
};

console.log(sum(numbers));

// let sum1 = (array) => {
//     return array.reduce((acc, value) => acc + value);
// };
// console.log(sum1(numbers));

console.log('------------');

// - Дано натуральное число n. Выведите все числа от 1 до n.

let foo = (limit) => {
    let v = 1;
    for (let i = 0; i < limit; i++) {
        console.log(v++);
    }
};

foo(8);

console.log('------------');

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let ab = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    }else if (b < a) {
        for (let v1 = a; v1 >= b; v1--) {
            console.log(v1);
        }
    } else {
        console.log('Try again!');
    }
};

ab(8, 14);

console.log('------------');

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let arr = [1, 2, 3, 4];

let swapFoo = (array, i) => {
    let newArr = array;
    let v = newArr[i];
    newArr[i] = newArr[i + 1];
    newArr[i + 1] = v;
    console.log(newArr);
};

swapFoo(arr, 2);

console.log('------------');

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


let zero = [1, 0, 23, 43, 0, 2, 0];

let zeroInTheEnd = (array) => {
    let newArray = [];
    let indexNewArray = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 0) {
            newArray[indexNewArray++] = array[i];
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            newArray[indexNewArray++] = array[i];
        }
    }
    console.log(newArray);
};

zeroInTheEnd(zero);

let zeroInTheEnd1 = (array) => {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        array[i] !== 0 ? newArr.push(array[i]) : false;
    }
    for (let i = 0; i < array.length; i++) {
        array[i] === 0 ? newArr.push(array[i]) : false;
    }
    return newArr;
};

console.log(zeroInTheEnd1(zero));



