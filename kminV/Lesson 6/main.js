// 1) Створити масив з 20 чисел та:

let arr1 = [];
for (let i = 0; i < 20; i++) {
    arr1[i] = Math.round(Math.random() * 50);
}

console.log(arr1);

console.log('-------------');

//     a) відсортувати його від меншого до більшого.

arr1.sort((a, b) => a - b);

//     b) відсортувати його від більшого до меншого.

arr1.sort((a, b) => b - a);

//     c) Відфілтрувати числа які є кратними 3.

arr1.filter(value => value % 3 === 0 ? value : false);

// d) Відфілтрувати числа які є більшими за 10.

arr1.filter(value => value > 10 ? value : false);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

arr1.forEach(value => document.write(`<p>${value}</p>`));

document.write('------------------');

// f) За допомогою map збільшити кожен елемент в масиві в три рази.

arr1.map(value => value * 3);

//     g) Порахувати загальну суму всіх елментів у масиві (reduce)

arr1.reduce((acc, value) => acc += value);

// 2) Створити масив з 20 стрічок та:

let arr2 = ['asd', 'eiuw', 'uysgdu', 'nxzbc', 'oqwie', 'po3po424', 'odihvn', 'owefiueh', 'bxchv', 'iduhfi', 'zxjj', 'qwe', 'poi', 'jhgkjh', 'lasl', 'mnbmn', 'xzcvew', 'oi783n', 'gsdmnn', 'oqifodf'];

//     a) Відсортувати його в алфавітному порядку

arr2.sort((a, b) => {
    if (a.toUpperCase() > b.toUpperCase()) {
        return 1;
    } else if (a.toUpperCase() < b.toUpperCase()) {
        return -1;
    } else {
        return 0;
    }
});

console.log(arr2);

console.log('-------------');

// b) Відсортувати в зворотньому порядку

arr2.sort((a, b) => {
    if (a.toUpperCase() > b.toUpperCase()) {
        return -1;
    } else if (a.toUpperCase() < b.toUpperCase()) {
        return 1;
    } else {
        return 0;
    }
});

console.log(arr2);

console.log('-------------');

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

arr2.filter(value => value.length > 4);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

let s = 'Sam says';
let strings = arr2.map(value => value.replace(value[0], 'Sam says '));

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)

users.sort((a, b) => a.age - b.age);

users.sort((a, b) => b.age - a.age);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

users.sort((a, b) => a.name.length - b.name.length);

users.sort((a, b) => b.name.length - a.name.length);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)

let newUsers = users.map((value, index) => value = {...value, id: index + 1});

console.log(newUsers);

console.log('-------------');

// d) відсортувати його за індентифікатором

newUsers.sort((a, b) => a.id - b.id);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

console.log(newUsers.reduce((acc, value) => {
    if (value['isMarried']) {
        acc = [...acc, {...value, flat: true}];
    }
    return acc;
}, []));

console.log('-------------');

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

const cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];

// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів

cars.filter(value => value.volume > 3);

// - двигун = 2л

cars.filter(value => value.volume === 2);

// - виробник мерс

cars.filter(value => value.producer === 'mercedes');

// - двигун більше 3х літрів + виробник мерседес

cars.filter(value => value.volume > 3 && value.producer === 'mercedes');

// - двигун більше 3х літрів + виробник субару

cars.filter(value => value.volume > 3 && value.producer === 'subaru');

// - сили більше ніж 300

cars.filter(value => value.power > 300);

// - сили більше ніж 300 + виробник субару

cars.filter(value => value.power > 300 && value.producer === 'subaru');

// - мотор серіі ej

cars.filter(value => value.engine.includes('ej'));

// - сили більше ніж 300 + виробник субару + мотор серіі ej

cars.filter(value => value.power > 300 && value.producer === 'subaru' && value.engine.includes('ej'));

// - двигун меньше 3х літрів + виробник мерседес

cars.filter(value => value.volume < 3 && value.producer === 'mercedes');

// - двигун більше 2л + сили більше 250

cars.filter(value => value.volume > 2 && value.power > 250);

// - сили більше 250  + виробник бмв

cars.filter(value => value.power > 250 && value.producer === 'bmw');

// - взять слдующий массив

const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// -- Відсортувати їх по ID

usersWithAddress.sort((a, b) => a.id - b.id);

// -- Відсортувати їх по ID в зворотньому порядку

usersWithAddress.sort((a, b) => b.id - a.id);

// -- Відсортувати по віку

usersWithAddress.sort((a, b) => a.age - b.age);

// -- Відсортувати по віку в зворотньому порядку

usersWithAddress.sort((a, b) => b.age - a.age);

// -- Відсорутвати по імені

usersWithAddress.sort((a, b) => {
    if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return 1;
    } else if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1;
    } else {
        return 0;
    }
});

// -- Відсорутвати по назві вулиці

usersWithAddress.sort((a, b) => {
    if (a.address.street.toUpperCase() > b.address.street.toUpperCase()) {
        return 1;
    } else if (a.address.street.toUpperCase() < b.address.street.toUpperCase()) {
        return -1;
    } else {
        return 0;
    }
});

// -- Відсорутвати по номеру будинку

usersWithAddress.sort((a, b) => a.address.number - b.address.number);

// -- Залигити тільки тих, хто молодший ніж 30 (filter)

usersWithAddress.filter(value => value.age < 30);

// -- Залишити тільки одружених

usersWithAddress.filter(value => value.isMarried);

// -- Залишити тільки одружених, які молодні за 30

usersWithAddress.filter(value => value.isMarried && value.age < 30);

// -- Залишити лише тих, в кого парні номери будинків.

usersWithAddress.filter(value => value.address.number % 2 === 0);

// -- Порахувати загальний вік всіх людей. (reduce)

usersWithAddress.reduce((acc, value) => acc += value.age, 0);

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)

usersWithAddress.reduce((acc, value) => {
    if (value.isMarried && value.age > 30) {
        acc = [...acc, {...value, child: true}];
    }
    return acc;
}, []);

// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.

let car1 = {
    producer: 'Honda',
    enginePower: 150,
    owner: {name: 'Vasya', age: 25, drivingExp: 7},
    price: 10000,
    yearOfProduction: 2010
};
let car2 = {
    producer: 'Bmw',
    enginePower: 180,
    owner: {name: 'Petya', age: 29, drivingExp: 8},
    price: 12000,
    yearOfProduction: 2011
};
let car3 = {
    producer: 'Mercedes',
    enginePower: 200,
    owner: {name: 'Max', age: 35, drivingExp: 15},
    price: 20000,
    yearOfProduction: 2020
};
let car4 = {
    producer: 'Bentley',
    enginePower: 250,
    owner: {name: 'Vlad', age: 40, drivingExp: 20},
    price: 50000,
    yearOfProduction: 2018
};
let car5 = {
    producer: 'Man',
    enginePower: 400,
    owner: {name: 'Svyat', age: 37, drivingExp: 15},
    price: 70000,
    yearOfProduction: 2019
};
let car6 = {
    producer: 'Ford',
    enginePower: 400,
    owner: {name: 'Andrii', age: 25, drivingExp: 8},
    price: 40000,
    yearOfProduction: 2022
};
let car7 = {
    producer: 'Subaru',
    enginePower: 100,
    owner: {name: 'Alina', age: 22, drivingExp: 3},
    price: 6000,
    yearOfProduction: 2007
};
let car8 = {
    producer: 'Smart',
    enginePower: 50,
    owner: {name: 'Vasya', age: 20, drivingExp: 2},
    price: 7000,
    yearOfProduction: 2015
};
let car9 = {
    producer: 'Opel',
    enginePower: 120,
    owner: {name: 'Vika', age: 25, drivingExp: 4},
    price: 12000,
    yearOfProduction: 2009
};
let car10 = {
    producer: 'Kamaz',
    enginePower: 300,
    owner: {name: 'Anya', age: 30, drivingExp: 8},
    price: 15000,
    yearOfProduction: 2011
};

//     Для початку вкладіть всі наші створені автомобілі в масив cars.

let arrayOfCars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

for (let i = 0; i < Math.round(arrayOfCars.length / 2); i++) {
    arrayOfCars[i].enginePower = arrayOfCars[i].enginePower / 100 * 110;
}

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

for (let i = 0; i < Math.round(arrayOfCars.length / 2); i++) {
    arrayOfCars[i].owner = {name: 'Kita', age: 26, drivingExp: 7};
}

// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%

for (let i = 0; i < arrayOfCars.length; i += 2) {
    arrayOfCars[i].enginePower = Math.round(arrayOfCars[i].enginePower / 100 * 110);
    arrayOfCars[i].price = arrayOfCars[i].price / 100 * 105;
}

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

arrayOfCars.forEach(value => value.owner.drivingExp < 5 && value.owner.age > 25 ? value.owner.drivingExp += 1 : false);

//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let totalPrice = 0;

arrayOfCars.forEach(value => totalPrice += value.price);

// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

function minMaxIndex(arr, number) {
    let minIndex = 0;
    let maxIndex = 0;
    if (arr.includes(number)) {
        minIndex = arr.indexOf(number);
        maxIndex = arr.lastIndexOf(number);
    }else return -1;
    return {minIndex, maxIndex};
}

console.log(minMaxIndex([1, 2, 3, 3, 3, 5, 6, 6, 6, 10], 3));
