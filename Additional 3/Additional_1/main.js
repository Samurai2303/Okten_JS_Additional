// --створити масив з:
//     - з 5 числових значень

let arrayOfNums = [10, 4, 0, 3, -7];

// - з 5 стічкових значень

let arrayOfSrt = ['Word 1', 'Word 2', 'Word 3', 'Word 4', 'Word 5'];

// - з 5 значень стрічкового, числового та булевого типу

let array = [true, false, 0, 73, 'hi'];

// - та вивести його в консоль

console.log(arrayOfNums);
console.log(arrayOfSrt);
console.log(array);

console.log('-----------');

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let a = [];
a[0] = 1;
a[1] = true;
a[2] = NaN;

console.log(a);

console.log('-----------');

// - є масив [2,17,13,6,22,31,45,66,100,-18] :

let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

let i1 = 0;
while (i1 < numbers.length) {
    console.log(numbers[i1]);
    i1++;
}

console.log('-----------');

//     2. перебрати його циклом for

for (let number of numbers) {
    console.log(number);
}

console.log('-----------');

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let i2 = 0;
while (i2 < numbers.length) {
    if (i2 % 2 === 1) {
        console.log(numbers[i2]);
    }
    i2++;
}

console.log('-----------');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 1) {
        console.log(numbers[i]);
    }
}

console.log('-----------');

// 5. перебрати циклом while та вивести  числа тільки парні  значення

i3 = 0;
while (i3 < numbers.length) {
    if (numbers[i3] % 2 === 0) {
        console.log(numbers[i3]);
    }
    i3++;
}

console.log('-----------');

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

console.log('-----------');

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        numbers[i] = 'okten';
    }
}

// 8. вивести масив в зворотньому порядку.

for (i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

console.log('-----------');

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arrayOfNums1 = [43, 3, 2, 29, 3, 45, 5, 4, 2, 23];
for (let number of arrayOfNums1) {
    console.log(number);
}

console.log('-----------');

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arrayOfstr1 = ['word 1', 'word 2', 'word 3', 'word 4', 'word 5', 'word 6', 'word 7', 'word 8', 'word 9', 'word 10'];
for (let string of arrayOfstr1) {
    console.log(string);
}

console.log('-----------');

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr = [2, 'word', true, false, 'hello', '56)', true, 0, '', -9];
for (let arrElement of arr) {
    console.log(arrElement);
}

console.log('-----------');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

for (let arrElement of arr) {
    if (typeof arrElement === "boolean") {
        console.log(arrElement);
    }
}

console.log('-----------');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (let arrElement of arr) {
    if (typeof arrElement === "number") {
        console.log(arrElement);
    }
}

console.log('-----------');

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (let arrElement of arr) {
    if (typeof arrElement === "string") {
        console.log(arrElement);
    }
}

console.log('-----------');

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.




// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор