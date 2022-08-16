// - Нам дано масив друзів  Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];

if (friends.length >= 3) {
    document.write(`<p>Big array</p>`);
} else {
    document.write(`<p>Small array</p>`);
}

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.

let nums = [11, 33, 22];
console.log(nums[Math.floor(nums.length / 2)]);

console.log('-----------');

//     Знайти, яке з них є середнім (більше одного, але менше за інше).

let average = 0;
for (let i = 0; i < nums.length; i++) {
    average += nums[i] / nums.length;         //визначили сер. арифметитчне
}
let diff = Math.abs(average - nums[0]);
let res = 0;
for (let i = 0; i < nums.length; i++) {
    let a = Math.abs(average - nums[i]);
    if (diff > a) {                             //пошук числа найбільш наближеного до сер. арифмет.
        diff = a;
        res = nums[i];
    }
}
console.log(res);

console.log('-----------');

//     Перевірити, чи знаходиться перше число між двома іншими.

if (nums[0] === Math.floor(nums.length / 2)) {
    console.log('true');
} else {
    console.log('false');
}

console.log('-----------');

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

let a = 1;
let b = 2;
let result = a + b < 4 ? 'Мало' : 'Багато';
console.log(result);

console.log('-----------');

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

let randomNumber = -110;
randomNumber === 0 ? console.log('Number is 0') : randomNumber < 0 ? console.log('Number is nagative') : console.log('Number is positive');

console.log('-----------');

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.

let test = true;
if (test === true) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}

console.log('-----------');

//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

test = false;
test === true ? console.log('Вірно') : console.log('Неправильно');

console.log('-----------');

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!


// // let question = prompt('Яка «офіційна» назва JavaScript?');
// if (question === 'ECMAScript') {
//     console.log('Правильно!');
// } else {
//     console.log('Не знаєте? ECMAScript!');
// }


console.log('-----------');

//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let flatNumber = 10;
if (flatNumber > 0 && flatNumber < 21) {
    console.log('First entrance');
} else if (flatNumber >= 21 && flatNumber <= 48) {
    console.log('Second entrance');
} else if (flatNumber > 48 && flatNumber <= 90) {
    console.log('Third entrance');
} else {
    console.log('Try again');
}

console.log('-----------');

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

let number = 10;
switch (number) {
    case 10:
        console.log('Вірно');
        break;
    default:
        console.log('Невірно');
}

console.log('-----------');

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temperature = 12;
if (temperature >= 10 && temperature <= 22) {
    console.log('Йдемо витися!');
}else if (typeof temperature === "number") {
    console.log('Вчимося онлайн)');
} else {
    console.log('Error');
}

console.log('-----------');

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let gameNumber = 3;
switch (gameNumber) {
    case 1:
        console.log('Your prize is a motorbike');
        break;
    case 2:
        console.log('Your prize is a smartphone');
        break;
    case 3:
        console.log('Your prize is a new car');
        break;
    case 4:
        console.log('Your prize is a bag of money');
        break;
    case 5:
        console.log('Your prize is a fridge');
        break;
    default:
        console.log('Number is incorrect');
}



