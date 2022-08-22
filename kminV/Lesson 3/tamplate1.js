// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"

let content = document.getElementById('content');
console.log(content.innerText);

console.log('--------------');

// b) отримує текст з блоку з id "rules"

let rules = document.getElementById('rules');
console.log(rules.innerText);

console.log('--------------');

// c) замініть текст параграфа з id 'content' на будь-який інший

content.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, tempora.';

// d) замініть текст параграфа з id 'rules' на будь-який інший

rules.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, tempora.';

// e) змініть кожному елементу колір фону на червоний

content.style.background = 'red';
rules.style.background = 'red';
document.getElementsByTagName('ul')[0].style.background = 'red';

// f) змініть кожному елементу колір тексту на синій

content.style.color = 'blue';
rules.style.color = 'blue';
document.getElementsByTagName('ul')[0].style.color = 'blue';

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(rules.classList);

console.log('--------------');

// h) отримати всі елементи з класом fc_rules

console.log(document.querySelectorAll('.fc_rules'));

console.log('--------------');

// i) поміняти колір тексту у всіх елементів fc_rules на червоний

document.querySelectorAll('.fc_rules').forEach(value => value.style.color = 'darkred');

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку
// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості

let usersDiv = document.createElement('div');
usersDiv.classList.add('usersDiv');
document.body.appendChild(usersDiv);
for (let user of users) {
    let userDiv = document.createElement('div');
    userDiv.classList.add('userDiv');
    usersDiv.appendChild(userDiv);
    let userInfo = document.createElement('div');
    userInfo.classList.add('userInfo');
    userInfo.innerText = `${user.name} - ${user.age} years - ${user.status}`;
    userDiv.appendChild(userInfo);
    let userAddress = document.createElement('div');
    userAddress.classList.add('userAddress');
    userDiv.appendChild(userAddress);
    let city = document.createElement('div');
    city.innerText = `${user.address.city}`;
    let country = document.createElement('div');
    country.innerText = `${user.address.country}`;
    let street = document.createElement('div');
    street.innerText = `${user.address.street}`;
    let houseNumber = document.createElement('div');
    houseNumber.innerText = `${user.address.houseNumber}`;
    userAddress.append(country, city, street, houseNumber);
}




