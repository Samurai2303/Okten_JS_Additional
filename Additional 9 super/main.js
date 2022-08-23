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

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

let adderesses = [];
for (let user of users) {
    adderesses.push(user.address);
}

console.log(adderesses);

users.reduce((acc, value) => [...acc, value.address], []);

console.log('-------------');

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

let mainDiv2 = document.createElement('div');
document.body.appendChild(mainDiv2);
mainDiv2.classList.add('mainDiv');
for (let user of users) {
    let userDiv = document.createElement('div');
    userDiv.innerText = `${user.name} - ${user.age} years
    Status - ${user.status}
    Country - ${user.address.country} City - ${user.address.city} Street - ${user.address.street} Housenumber - ${user.address.houseNumber}`;
    mainDiv2.appendChild(userDiv);
    userDiv.classList.add('userDiv');
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

let mainDiv1 = document.createElement('div');
document.body.appendChild(mainDiv1);
mainDiv1.classList.add('mainDiv');
for (let user of users) {
    let userDiv1 = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    p1.innerText = user.name;
    p2.innerText = user.age;
    p3.innerText = user.status;
    p4.innerText = user.address.country + '-' + user.address.city + '-' + user.address.street + '-' + user.address.houseNumber;
    userDiv1.append(p1, p2, p3, p4);
    mainDiv1.appendChild(userDiv1);
    userDiv1.classList.add('userDiv');
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

let mainDiv3 = document.createElement('div');
document.body.appendChild(mainDiv3);
mainDiv3.classList.add('mainDiv');
for (let user of users) {
    let userDiv = document.createElement('div');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');
    let p7 = document.createElement('p');
    p1.innerText = user.name;
    p2.innerText = user.age;
    p3.innerText = user.status;
    p4.innerText = user.address.country;
    p5.innerText = user.address.city;
    p6.innerText = user.address.street;
    p7.innerText = user.address.houseNumber;
    userDiv.append(p1, p2, p3, p4, p5, p6, p7);
    mainDiv3.appendChild(userDiv);
    userDiv.classList.add('userDiv');
}

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let wrap = document.createElement('div');
document.body.appendChild(wrap);
wrap.setAttribute('id', 'wrap');

for (let i = 0; i < rules.length; i++) {
    let rule = rules[i];

    let ruleDiv = document.createElement('div');
    ruleDiv.classList.add('rules', `rule${i + 1}`);
    wrap.appendChild(ruleDiv);

    let h2 = document.createElement('h2');
    h2.innerText = `${rule.title}`;
    ruleDiv.appendChild(h2);

    let p = document.createElement('p');
    p.innerText = `${rule.body}`;
    ruleDiv.appendChild(p);

}



