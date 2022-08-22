// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.

let v1 = 'hello';
let v2 = 'owu';
let v3 = 'com';
let v4 = 'ua';
let v5 = 1;
let v6 = 10;
let v7 = -999;
let v8 = 123;
let v9 = 3.14;
let v10 = 2.7;
let v11 = 16;
let v12 = true;
let v13 = false;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let arrOfV = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13];

// for (let i of arrOfV) {
//     console.log(i);
//     alert(i);
//     document.write(i);
// }

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.

v1 = 1;
v2 = 2;
v3 = 3;
v4 = 4;
v5 = 5;
v6 = 6;
v7 = 7;
v8 = 8;
v9 = 9;
v10 = 10;
v11 = 11;
v12 = 12;
v13 = 13;

//     Вивести кожну змінну за допомогою: console.log , alert, document.write

arrOfV = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13];

// for (let i = 0; i < arrOfV.length; i++) {
//     let arrOfVElement = arrOfV[i];
//     console.log(arrOfVElement);
//     alert(arrOfVElement);
//     document.write(arrOfVElement);
// }

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.

// let a1 = prompt('Your name?');
// let a2 = prompt('Your surname?');
// let a3 = prompt('Your age?');
//
// function nameSurnameAge(name, surname, age) {
//     return {name, surname, age};
// }
//
// console.log(nameSurnameAge(a1, a2, a3));
//
// console.log('------------');

//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// console.log(`Вітаю ${a1} ${a2}. Тобі ${a3} років`);
//
// console.log('------------');

// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).

// let you = a1 + ' ' + a2 + ' - ' + a3;

// - За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.

// let n1 = prompt('Enter number');
// let n2 = prompt('Enter number');
// let n3 = prompt('Enter number');
//
// console.log(+n1, +n2, +n3);


// - За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.

// let n4 = prompt('Enter number');
//
// console.log(parseInt(n1, 10) + parseInt(n2, 10) + parseInt(n3, 10) + parseInt(n4, 10));

// console.log('------------');

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.

// let n5 = parseFloat(prompt('Enter number'));
// let n6 = parseFloat(prompt('Enter number'));      //Що це таке ця плаваюча точка і де використовується ParseFloat?
// let n7 = parseFloat(prompt('Enter number'));

//     Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.

// let result = n5 + n6 + n7;
// console.log(result);

// console.log('------------');

// - За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
//
// console.log(Math.round(n5) + Math.round(n6) + Math.round(n7));

// - За допомогою prompt() отримати 2 цілих числа.
//     Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//     За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//     Example. Число 1 = 5. Число 2 = 2. Результат = 25
//
// let b1 = prompt('Enter number');
// let b2 = prompt('Enter number');
//
// let pow = Math.pow(b1, b2);

//     - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof (a), ' ', typeof (b), ' ', typeof (c));

console.log('------------');

// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!

//     5 ? 6 -> true

console.log(5 !== 6);

// 5 ? 6 -> false

console.log(5 === 6);

// 5 ? 6 -> false

console.log(!5 !== !6);

// 5 ? 6 -> false

console.log(!5 === 6);

// 10 ? 10 -> true

console.log(10 === 10);

// 10 ? 10 -> true

console.log(!10 === !10);

// 10 ? 10 -> false

console.log(10 !== 10);

// 10 ? 10 -> false

console.log(!10 === 10);

// 10 ? 10 -> false

console.log(!10 !== !10);

// 123 ? '123' -> false

console.log(123 === '123');

// 123 ? '123' -> true

console.log(123 === +'123');        //(123 == '123')

console.log('------------');

// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
// console.log(132 > 100 && 45 < 12 ); - false
// console.log(34 > 33 && 23 < 90 ); - true
// console.log(99 > 100 && 45 > 12 ); - false
// console.log(132 > 100 || 45 < 12 ); - true
// console.log(111 > 11 || 45 < 111 ); - true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); - true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); - true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); - false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); - true
// console.log(!!'-1'); - true
// console.log(!!-1); - true
// console.log(!!'0'); - false
// console.log(!!'null'); - false
// console.log(!!'undefined'); - false
// console.log(!!(3/'owu')); - false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); - true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); - false
//
