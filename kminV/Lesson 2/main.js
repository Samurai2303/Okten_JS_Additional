// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['gh', 'gfh', 'hfg', 'h', 'htr'];
let arr3 = [true, false, 12, 'asdadas', 0];

// - та вивести його в консоль

console.log(arr1, arr2, arr3);

console.log('-------------');

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr4 = [];
arr4[0] = true;
arr4[1] = 456;
arr4[2] = 'asdas';

console.log(arr4);

console.log('-------------');

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>Any text</div>`);
}

document.write(`<p>---------------------</p>`);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>Any text ${i}</div>`);
}

document.write(`<p>---------------------</p>`);

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i1 = 0;
while (i1 < 20) {
    document.write(`<h1>Any text</h1>`);
    i1++;
}

document.write(`<p>---------------------</p>`);

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let i2 = 0;
while (i2 < 20) {
    document.write(`<h1>Any text ${i2}</h1>`);
    i2++;
}

document.write(`<p>---------------------</p>`);

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr5 = [1, 2, 3, 4, 56, 7, 787, 9, 0, 54];

for (const number of arr5) {
    console.log(number);
}

console.log('-------------');

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr6 = ['dsgfg', 'gdgf', 'dgdg', 'dgddd', 'dbbvbv', 'gfhh', 'd', 'gaa', 'daaa', 'fghjkl'];

for (let string of arr6) {
    console.log(string);
}

console.log('-------------');

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr7 = [true, false, 23, NaN, true, 0, 'asdasd', 123, -11, "aaa"];

for (let arr7Element of arr7) {
    console.log(arr7Element);
}

console.log('-------------');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

for (let arr7Element of arr7) {
    typeof arr7Element === "boolean" ? console.log(arr7Element) : false;
}

console.log('-------------');

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (let arr7Element of arr7) {
    typeof arr7Element === "number" ? console.log(arr7Element) : false;
}

console.log('-------------');

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (let arr7Element of arr7) {
    typeof arr7Element === "string" ? console.log(arr7Element) : false;
}

console.log('-------------');

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let arr8 = [];
arr8[0] = 32;
arr8[1] = true;
arr8[2] = 'fhfhgfg';
arr8[3] = 'weew';
arr8[4] = 0;
arr8[5] = null;
arr8[6] = false;
arr8[7] = true;
arr8[8] = -23;
arr8[9] = "dffdfd";

for (let arr8Element of arr8) {
    console.log(arr8Element);
}

console.log('-------------');

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

for (let minutes = 0; minutes < 2; minutes++) {
    for (let seconds = 0; seconds < 60; seconds++) {
        console.log(`${minutes}:${seconds}`);
    }
}

console.log('-------------');

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let hours = 0; hours < 2; hours++) {
//     for (let minutes = 0; minutes < 60; minutes++) {
//         for (let seconds = 0; seconds < 60; seconds++) {
//             console.log(`${hours}:${minutes}:${seconds}`);
//         }
//     }
// }
//
// console.log('-------------');

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

let arr9 = ['a', 'b', 'c'];
for (let i = 0; i < 3; i++) {
    arr9.push(i + 1);
}

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let arr10 = [1, 2, 3];

let newArr10 = arr10.reverse();

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

arr10 = [1, 2, 3];

for (let i = 4; i <= 6; i++) {
    arr10.push(i);
}

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

arr10 = [1, 2, 3];

for (let i = 6; i >=4; i--) {
    arr10.unshift(i);
}

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

let arr11 = ['js', 'css', 'jq'];

console.log(arr11.shift());

console.log('-------------');

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

console.log(arr11.pop());

console.log('-------------');

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

let arr12 = [1, 2, 3, 4, 5];

for (let i = 0; i < 3; i++) {
    arr12.shift();
}

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].

arr12 = [1, 2, 3, 4, 5];

for (let i = 0; i < 3; i++) {
    arr12.pop();
}

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
//     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри

arr12 = [1, 2, 3, 4, 5];

let changeArr = (arr) => {
    let v = [];
    for (let i = 0; i < 2; i++) {
        v[i] = arr.pop();
    }
    arr.push('a');
    arr.push('b');
    arr.push('c');
    arr.push(v[1]);
    arr.push(v[0]);

    return arr;
};

console.log(changeArr(arr12));

console.log('-------------');

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//     Підказка. Працюйте по принципу задачі вище.

arr12 = [1, 2, 3, 4, 5];
let changeArr1 = (arr) => {
    arr.splice(1, 0, 'a');
    arr.splice(2, 0, 'b');
    arr.splice(6, 0, 'c');
    arr.splice(8, 0, 'e');
    return arr;
};

console.log(changeArr1(arr12));

console.log('-------------');

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arr13 = [];
for (let i = 0; i < 10; i++) {
    arr13[i] = i;
}

for (let arr13Element of arr13) {
    arr13Element % 2 === 0 ? console.log(arr13Element) : false;
}

console.log('-------------');

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

let newArr13 = [];
for (let i = 0; i < arr13.length; i++) {
    newArr13.push(arr13[i]);
}


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let new1Arr13 = [];
for (let i = 0; i < arr13.length; i++) {
    new1Arr13[i] = arr13[i];
}

// ============

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arr14 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//     1. перебрати його циклом while

let i3 = 0;
while (i3 < arr14.length) {
    console.log(arr14[i3]);
    i3++;
}

console.log('-------------');

//     2. перебрати його циклом for

for (let i = 0; i < arr14.length; i++) {
    let arr14Element = arr14[i];
    console.log(arr14Element);
}

console.log('-------------');

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let i4 = 0;
while (i4 < arr14.length) {
    i4 % 2? console.log(arr14[i4]) : false;
    i4++;
}

console.log('-------------');

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < arr14.length; i++) {
    let arr14Element = arr14[i];
    i % 2 ? console.log(arr14Element) : false;
}

console.log('-------------');

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let i5 = 0;
while (i5 < arr14.length) {
    arr14[i5] % 2 === 0 ? console.log(arr14[i5]) : false;
    i5++;
}

console.log('-------------');

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let number of arr14) {
    number % 2 === 0 ? console.log(number) : false;
}

console.log('-------------');

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < arr14.length; i++) {
    arr14[i] % 3 === 0 ? arr14[i] = 'okten' : false;
}

console.log(arr14);

console.log('-------------');

// 8. вивести масив в зворотньому порядку.

for (let i = arr14.length - 1; i >= 0; i--) {
    console.log(arr14[i]);
}

console.log('-------------');

// 10
// створити пустий масив та :

let arr15 = [];

//     - заповнити його 50 парними числами за допомоги циклу.

for (let i = 0; i < 50; i++) {
    arr15[i] = 4;
}

// - заповнити його 50 непарними числами за допомоги циклу.

for (let i = 50; i < 100; i++) {
    arr15[i] = 5;
}

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

for (let i = 100; i < 120; i++) {
    arr15[i] = Math.round(Math.random()*100);
}

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

for (let i = 120; i < 140; i++) {
    arr15[i] = Math.round(Math.random() * 724 + 8);
}

// 2. Вивести за допомогою console.log кожен третій елемен

for (let i = 0; i < arr15.length; i++) {
    i % 3 === 0 ? console.log(arr15[i]) : false;
}

console.log('-------------');

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 0; i < arr15.length; i++) {
    arr15[i] % 2 === 0 ? console.log(arr15[i]) : false;
}

console.log('-------------');

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let newArr15 = [];
for (let i = 0; i < arr15.length; i++) {
    if (i % 3 === 0 && arr15[i] % 2 === 0) {
        console.log(arr15[i]);
        newArr15.push(arr15[i]);
    }
}

console.log('-------------');

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

for (let i = 0; i < arr15.length; i++) {
    arr15[i + 1] % 2 === 0 ? console.log(arr15[i]) : false;
}

console.log('-------------');

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let arr16 = [100, 250, 50, 168, 120, 345, 188];

let average = 0;

for (let i = 0; i < arr16.length; i++) {
    average += arr16[i] / arr16.length;
}

console.log(average.toFixed(2));

console.log('-------------');

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arr17 = [];
for (let i = 0; i < 10; i++) {
    arr17.push(Math.round(Math.random() * 100));
}

let newArr17 = arr17.reduce((acc, value) => [...acc, value * 5], []);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let arr18 = [false, NaN, 23, -43, 'ggff', true, undefined, "dshfgdf", 'dfgjds'];

let newArr18 = [];
for (let i = 0; i < arr18.length; i++) {
    typeof arr18[i] === "number" ? newArr18.push(arr18[i]) : false;
}

// let newArr18 = arr18.reduce((acc, value) => typeof(value) === "number" ? [...acc, value] : false,[]);
//Чому воно не працює?((    пише acc is not iterable, але ж я наче задав старт для acc, що він порожній масив


//     ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arr19 = ['a', 'b', 'c'];

let newArr19 = '';
for (let i = 0; i < arr19.length; i++) {
    newArr19 += arr19[i];
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let new1Arr19 = '';
let i6 = 0;
while (i6 < arr19.length) {
    new1Arr19 += arr19[i6];
    i6++;
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let new2Arr19 = '';
for (let string of arr19) {
    new2Arr19 += string;
}
