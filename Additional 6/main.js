// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {




};

console.log(cutString('enjoyable', 3));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => {
    return str.slice(0, length);
};

console.log(delete_characters('hello, my name is...', 9));

console.log('-----------');

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = (str) => {
    str = str.toUpperCase();
    return str.replaceAll(' ', '-');
};

console.log(insert_dash('HTML JavaScript PHP'));

console.log('-----------');

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let firstLetterToUp = (str) => {
    let letter = str[0].toUpperCase();
    return str.replace(str[0], letter);
}

console.log(firstLetterToUp('hello'));

console.log('-----------');

// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';
let normalName = (str) => {
    let newArr = str.split(/[._-]/);
    let newStr = '';
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i]) {
            newStr += newArr[i] + ' ';
        }
    }
    return newStr;
};
console.log(normalName(n1));
console.log(normalName(n2));
console.log(normalName(n3));

console.log('-----------');

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomNumbers = (amount) => {
    let nums = [];
    for (let i = 0; i < amount; i++) {
        nums[i] = Math.round(Math.random() * 100);
    }
    return nums;
};

console.log(randomNumbers(5));

console.log('-----------');

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

console.log(randomNumbers(10).sort((a, b) => a - b));

console.log('-----------');

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

let evenNumbers = randomNumbers(10).filter(value => value % 2 === 0 && value !== 0);

console.log(evenNumbers);

console.log('-----------');

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    let array = str.split(' ');
    let res = '';
    for (let i = 0; i < array.length; i++) {
        let letter = array[i][0].toUpperCase();
        array[i][0].replace(array[i][0], letter);
        res += array[i] + ' ';
    }
    return res;
};

console.log(capitalize('hello my name is'));


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

let validator = (email) => {
    if (!email.startsWith('@') && email.includes('@') && email.includes('.', email.indexOf('@') + 3)) {
        console.log('Your email is correct');
    }else{
        console.log('Error');
    }
};

validator('some.email@gmail.com');

console.log('-----------');

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

console.log(coursesArray.sort((a, b) => b["modules"].length - a['modules'].length));

console.log('-----------');

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let count = (str, stringsearch) => {
    let arr = str.split('');
    let res = 0;
    arr.filter(value => value === stringsearch ? res += 1 : res);
    return res;
};

console.log(count('Астрономия это наука о небесных объектах', 'о'));

console.log('-----------');

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let cutString1 = (str, n) => {
    let arr = str.split(' ');
    let res = '';
    for (let i = 0; i < n; i++) {
        res += arr[i] + ' ';
    }
    return res;
};

console.log(cutString1("Сила тяжести приложена к центру масс тела", 5));

console.log('-----------');

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        title: 'Robinson Crusoe',
        pageCount: 250,
        author: ['Daniel Defoe'],
        genre: ['Adventure', 'novel', 'historical']
    },
    {
        title: 'Harry Potter',
        pageCount: 500,
        author: ['J. K. Rowling'],
        genre: ['Fantasy', 'novel', 'thriller', 'magical realism', 'childrens literature']
    },
    {
        title: 'Robin Hood',
        pageCount: 140,
        author: ['folk', 'Mikhail Gershenzon'],
        genre: ['Adventure', 'novel', 'historical', 'legend', 'childrens literature', 'chivalric novel']
    }
];

// -знайти наібльшу книжку.

let maxPages = books.reduce((acc, value) => acc.pageCount > value.pageCount ? acc : value);

console.log(maxPages);

console.log('-----------');

// - знайти книжку/ки з найбільшою кількістю жанрів

let maxGenres = books.reduce((acc, value) => acc.genre.length > value.genre.length ? acc : value);

console.log(maxGenres);

console.log('-----------');

// - знайти книжку/ки з найдовшою назвою

let longestName = books.reduce((acc, value) => acc.title.length > value.title.length ? acc : value);

console.log(longestName);

console.log('-----------');

// - знайти книжку/ки які писали 2 автори

for (let i = 0; i < books.length; i++) {
    if (books[i].author.length === 2) {
        console.log(books[i]);
    }
}

console.log('-----------');

// - знайти книжку/ки які писав 1 автор

books.forEach(value => value.author.length === 1 ? console.log(value) : false);

console.log('-----------');

// - вісортувати книжки по кількості сторінок по зростанню

let sortedBooks = books.sort((a, b) => a.pageCount - b.pageCount);

console.log(sortedBooks);

