// 1) створити функцію яка приймає масив та виводить його

let arrPrinter = (arr) => console.log(arr);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

let arrCreator = (arr, amount) => {
    for (let i = 0; i < amount; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    arrPrinter(arr);
};

let array1 = [];
arrCreator(array1, 8);

console.log('------------');

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

let sum = (arr) => {
    return arr.reduce((acc, value) => acc += value);
};

console.log(sum(array1));

console.log('------------');

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let array2 = [{name: 'Dima', age: 13}, {model: 'Camry'}];

let keys = (arr) => {
    return arr.reduce((acc, value) => [...acc, ...Object.keys(value)], []);
};

console.log(keys(array2));

console.log('------------');

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let values = (arr) => {
    return arr.reduce((acc, value) => [...acc, ...Object.values(value)], []);
};

console.log(values(array2));

console.log('------------');

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let sum1 = (arr1, arr2) => {
    let res = [];
    if (arr1.length > arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (typeof arr1[i] === "number" && typeof arr2[i] === "number") {
                res.push(arr1[i] + arr2[i]);
            } else {
                res.push(arr1[i]);
            }
        }
    } else {
        for (let i = 0; i < arr2.length; i++) {
            if (typeof arr1[i] === "number" && typeof arr2[i] === "number") {
                res.push(arr1[i] + arr2[i]);
            } else {
                res.push(arr2[i]);
            }
        }
    }
    return res;
};

console.log(sum1([1, 2, 6, 3], [12, 5, 7]));

console.log('------------');

// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minMax = (...x) => {
    console.log(x.reduce((acc, value) => acc > value ? acc : value));
    return x.reduce((acc, value) => acc < value ? acc : value);
};

console.log(minMax(45, 53, 4, 2, -6));

console.log('------------');

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

let keysOrValues = (arr, keysOrValues) => {
    switch (keysOrValues) {
        case 'keys':
            return arr.reduce((acc, value) => [...acc, ...Object.keys(value)], []);
        case 'values':
            return arr.reduce((acc, value) => [...acc, ...Object.values(value)], []);
        default:
            console.log('Error');
    }
};                              //Це тут можна було його зробити як функція, що викликає функцію (щось типу замикання), чи це дічь?

console.log(keysOrValues(array2, 'values'));

console.log('------------');

// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

function paragraph(){
    let p = document.createElement('p');
    p.innerText = 'Hello owu';
    document.body.appendChild(p);
}

paragraph();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

function elementCreator(element, content) {
    let elementHtml = document.createElement(`${element}`);
    elementHtml.innerText = `${content}`;
    document.body.appendChild(elementHtml);
}

elementCreator('p', 'iuhvi dsvsvd');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елементу в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

let cars = [
    {producer: 'toyota', model: 'prius', yearOfProduction: 2020, engineVolume: 3.6, owner: 'Vasya'},
    {producer: 'toyota', model: 'camry', yearOfProduction: 2018, engineVolume: 3.2, owner: 'Petya'},
    {producer: 'ford', model: 'mustang', yearOfProduction: 2021, engineVolume: 3.8, owner: 'Katya'},
    {producer: 'opel', model: 'vivaro', yearOfProduction: 2010, engineVolume: 2.6, owner: 'Nika'},
    {producer: 'ford', model: 'f-150', yearOfProduction: 2020, engineVolume: 4.3, owner: 'Vlad'}
];

let elementWithId = document.createElement('div');
elementWithId.setAttribute('id', 'target');
document.body.appendChild(elementWithId);

function carsListCreator(array, id) {
    for (let car of array) {
        let carDiv = document.createElement('div');
        carDiv.classList.add('carDiv');
        document.getElementById(`${id}`).appendChild(carDiv);
        for (let i = 0; i < Object.keys(car).length; i++) {
            let property = document.createElement('p');
            property.innerText = `${Object.keys(car)[i]} - ${Object.values(car)[i]}`;
            carDiv.appendChild(property);
        }
    }
}

carsListCreator(cars, 'target');