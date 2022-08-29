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

//Що значить доступ через Forms API?

let form1 = document.createElement('form');
form1.setAttribute('id', 'form1');
form1.classList.add('form1');
form1.innerText = 'Form 1';
document.body.appendChild(form1);

let input11 = document.createElement('input');
input11.setAttribute('type', 'text');
input11.setAttribute('name', 'input11');
let input12 = document.createElement('input');
input12.setAttribute('type', 'number');
input12.setAttribute('name', 'input12');
form1.append(input11, input12);

let form2 = document.createElement('form');
form2.setAttribute('name', 'form2');
form2.classList.add('form1');
form2.innerText = 'Form 2';
document.body.appendChild(form2);

let input21 = document.createElement('input');
input21.setAttribute('type', 'text');
input21.setAttribute('name', 'input21');
let input22 = document.createElement('input');
input22.setAttribute('type', 'number');
input22.setAttribute('name', 'input22');
form2.append(input21, input22);

let button = document.createElement('button');
button.innerText = 'Read informtion from form 1 and 2';
button.classList.add('buttonForForm1and2');
document.body.appendChild(button);
button.onclick = function () {
    console.log(document.forms.form1.input11.value);
    console.log(document.forms['form1']['input12'].value);
    console.log(document.forms['form2']['input21'].value);
    console.log(document.forms['form2']['input22'].value);
}


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

function tableCreator(amountOfRows, amountOfCells, content) {
    let table = document.createElement('table');
    document.body.appendChild(table);
    for (let i = 0; i < amountOfRows; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < amountOfCells; j++) {
            let td = document.createElement('td');
            td.style.border = '2px solid darkblue';
            td.style.background = 'lightskyblue';
            td.innerText = content;
            tr.appendChild(td);
        }
    }
}

tableCreator(6, 5, 'oiubv uy gefiu f ie yv');

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.

let wrapCarousel = document.createElement('div');
wrapCarousel.classList.add('wrapCarousel');
document.body.appendChild(wrapCarousel);

let placeForPhoto = document.createElement('div');
placeForPhoto.classList.add('placeForPhoto');
wrapCarousel.appendChild(placeForPhoto);

let img1 = document.createElement('img');
img1.src = 'data:image/jpeg;base64,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';
img1.alt = 'first photo';
img1.classList.add('photo');

let img2 = document.createElement('img');
img2.src = 'data:image/jpeg;base64,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';
img2.alt = 'second photo';
img2.classList.add('photo');

let img3 = document.createElement('img');
img3.src = 'https://static.vecteezy.com/system/resources/previews/002/723/528/non_2x/abstract-geometric-blue-background-free-vector.jpg';
img3.alt = 'third photo';
img3.classList.add('photo');

let photoDiv1 = document.createElement('div');
let photoDiv2 = document.createElement('div');
let photoDiv3 = document.createElement('div');

photoDiv1.classList.add('photoDiv', 'photoDiv1');
photoDiv2.classList.add('photoDiv', 'photoDiv2');
photoDiv3.classList.add('photoDiv', 'photoDiv3');

photoDiv1.appendChild(img1);
photoDiv2.appendChild(img2);
photoDiv3.appendChild(img3);

placeForPhoto.append(photoDiv1, photoDiv2, photoDiv3);

let arrowsDiv = document.createElement('div');
arrowsDiv.classList.add('arrowsDiv');
wrapCarousel.appendChild(arrowsDiv);

let arrowLeft = document.createElement('i');
arrowLeft.classList.add('fa-solid', 'fa-circle-arrow-left');
let arrowRight = document.createElement('i');
arrowRight.classList.add('fa-solid', 'fa-circle-arrow-right');
arrowsDiv.append(arrowLeft, arrowRight);

arrowRight.onclick = function () {
    if (photoDiv1.style.left === '-900px') {
        photoDiv1.style.left = '-1800px';
        photoDiv2.style.left = '-900px';
        photoDiv3.style.left = '0';
        arrowRight.style.color = '#379683'
    } else if (photoDiv1.style.left === '-1800px') {
    } else {
        photoDiv1.style.left = '-900px';
        photoDiv2.style.left = '0';
        photoDiv3.style.left = '900px';
        arrowLeft.style.color = '#05386B';
    }
}

arrowLeft.onclick = function () {
    if (photoDiv1.style.left === '-900px') {
        photoDiv1.style.left = '0px';
        photoDiv2.style.left = '900px';
        photoDiv3.style.left = '1800px';
        arrowLeft.style.color = '#379683'
    } else if (photoDiv1.style.left === '-1800px') {
        photoDiv1.style.left = '-900px';
        photoDiv2.style.left = '0px';
        photoDiv3.style.left = '900px';
        arrowRight.style.color = '#05386B';
    } else {
    }
}

//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Сворити масив нецензцрних слів.

let interestingWords = ['shit', 'asshole', 'bitch', 'bullshit', 'fuck', 'dick'];

//     Сворити інпут текстового типу.

let input = document.createElement('input');
input.setAttribute('type', 'text');
document.body.appendChild(input);

//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let contentChecker = document.createElement('button');
contentChecker.innerText = 'Check';
document.body.appendChild(contentChecker);
contentChecker.onclick = function () {
    for (let interestingWord of interestingWords) {
        if (input.value.includes(interestingWord)) {
            alert('Warning!');
        }
    }
}

// -- Взяти масив юзерів
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

// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ

let formForCheckboxes = document.createElement('div');
formForCheckboxes.classList.add('formForCheckboxes')
document.body.appendChild(formForCheckboxes);

let label1 = document.createElement('label');
let label2 = document.createElement('label');
let label3 = document.createElement('label');

label1.innerText = 'Status only false';
label2.innerText = 'Older then 28';
label3.innerText = 'City only Kyiv';

let checkbox1 = document.createElement('input');
let checkbox2 = document.createElement('input');
let checkbox3 = document.createElement('input');

checkbox1.setAttribute('type', 'checkbox');
checkbox2.setAttribute('type', 'checkbox');
checkbox3.setAttribute('type', 'checkbox');

let buttonForCheckboxes = document.createElement('button');
document.body.appendChild(buttonForCheckboxes);
buttonForCheckboxes.innerText = 'Create users list';

let div1 = document.createElement('div');
let div2 = document.createElement('div');
let div3 = document.createElement('div');

div1.append(checkbox1, label1);
div2.append(checkbox2, label2);
div3.append(checkbox3, label3);

formForCheckboxes.append(div1, div2, div3, buttonForCheckboxes);

buttonForCheckboxes.onclick = function () {
    let filtered1 = [];
    if (checkbox1.checked) {
        filtered1 = usersWithAddress.filter(value => value.isMarried ? false : value);
    } else {
        filtered1 = usersWithAddress;
    }
    let filtered2 = [];
    if (checkbox2.checked) {
        filtered2 = filtered1.filter(value => value.age >= 29 ? value : false);
    } else {
        filtered2 = filtered1;
    }
    let filtered3 = [];
    if (checkbox3.checked) {
        filtered3 = filtered2.filter(value => value.address.city === 'Kyiv' ? value : false);
    } else {
        filtered3 = filtered2;
    }

    let usersDiv = document.createElement('div');0
    usersDiv.classList.add('usersDiv');
    document.body.appendChild(usersDiv);

    for (let user of filtered3) {

        let userDiv = document.createElement('div');
        userDiv.classList.add('userDiv');
        usersDiv.appendChild(userDiv);

        let header = document.createElement('p');
        header.classList.add('header');
        header.innerText = 'User information';
        userDiv.appendChild(header);

        let userInfo = document.createElement('p');
        userInfo.innerText = `Id - ${user.id}
        Name - ${user.name}
        Age - ${user.age}
        Status - ${user.isMarried}`;
        userDiv.appendChild(userInfo);

        let userAddress = document.createElement('div');
        userAddress.innerText = `City - ${user.address.city}
        Street - ${user.address.street}
        Number of house - ${user.address.number}`;
        userAddress.classList.add('userAddress');
        userDiv.appendChild(userAddress);
    }
}