// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".

let text = document.createElement('p');
text.setAttribute('id', 'text');
text.innerText = 'lorem ipsum';
document.body.appendChild(text);

let button1 = document.createElement('button');
button1.classList.add('button');
button1.innerText = 'Show/Hide'
document.body.appendChild(button1);
button1.onclick = function () {
    text.classList.toggle('text');
}

//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.

let button2 = document.createElement('button');
document.body.appendChild(button2);
button2.classList.add('button');
button2.innerText = 'Hide me)';
button2.onclick = function () {
    button2.style.display = 'none';
}

// - Створіть меню, яке розгортається/згортається при клику

let menu = document.createElement('div');
document.body.appendChild(menu);
menu.classList.add('menu');

let arrow = document.createElement('i');
arrow.classList.add('fa-solid', 'fa-arrow-down');
menu.appendChild(arrow);

let menuText = document.createElement('p');
menuText.innerText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores dignissimos dolor ducimus eveniet, id laboriosam nostrum quisquam soluta voluptatum. Ad animi aut consequatur cumque enim est harum magnam maiores maxime, perferendis porro quas ratione repellat sequi tempora tempore veritatis. Consequuntur corporis est excepturi expedita neque sint tempora totam ut!`;
menuText.classList.add('menuText');
menu.appendChild(menuText);

arrow.onclick = function () {
    menu.classList.toggle('showingText');
};

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.

let commentsList = [
    {
        title: 'lorem',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis est, maiores numquam praesentium quasi sapiente?'
    },
    {
        title: 'lorem',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis est, maiores numquam praesentium quasi sapiente?'
    },
    {
        title: 'lorem',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis est, maiores numquam praesentium quasi sapiente?'
    },
    {
        title: 'lorem',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis est, maiores numquam praesentium quasi sapiente?'
    },
    {
        title: 'lorem',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis est, maiores numquam praesentium quasi sapiente?'
    },
    {
        title: 'lorem',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis est, maiores numquam praesentium quasi sapiente?'
    },
    {
        title: 'lorem',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis est, maiores numquam praesentium quasi sapiente?'
    },
    {
        title: 'lorem',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis est, maiores numquam praesentium quasi sapiente?'
    },
    {
        title: 'lorem',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis est, maiores numquam praesentium quasi sapiente?'
    },
    {
        title: 'lorem',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis est, maiores numquam praesentium quasi sapiente?'
    },
    {
        title: 'lorem',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis est, maiores numquam praesentium quasi sapiente?'
    },
    {
        title: 'lorem',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis est, maiores numquam praesentium quasi sapiente?'
    },
]

// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.

let commentsDiv = document.createElement('div');
commentsDiv.classList.add('commentsDiv');
document.body.appendChild(commentsDiv);

for (let item of commentsList) {

    let commentDiv = document.createElement('div');
    commentDiv.classList.add('commentDiv');
    commentsDiv.appendChild(commentDiv);

    let arrow1 = document.createElement('i');
    arrow1.classList.add('fa-solid', 'fa-arrow-down', 'commentArrow');
    commentDiv.appendChild(arrow1);

    let commentTitle = document.createElement('h3');
    commentTitle.innerText = item.title;
    commentDiv.appendChild(commentTitle);

    let p = document.createElement('p');
    p.classList.add('menuText');
    p.innerText = item.body;
    commentDiv.appendChild(p);
}

let commentArrows = document.getElementsByClassName('commentArrow');
let commentDivs = document.getElementsByClassName('commentDiv');

for (let i = 0; i < commentArrows.length; i++) {
    commentArrows[i].onclick = function () {
        commentDivs[i].classList.toggle('showComment');
    }
}

// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
//
//
//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
// -- Взяти масив юзерів
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ