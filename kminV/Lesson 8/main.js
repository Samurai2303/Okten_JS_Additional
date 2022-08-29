// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

let textArea = document.createElement('textarea');
textArea.classList.add('textArea1');
document.body.appendChild(textArea);
textArea.setAttribute('rows', '10');
textArea.setAttribute('cols', '40');
textArea.value = localStorage.getItem('valueTextArea');
textArea.onkeydown = function () {
    localStorage.setItem('valueTextArea', textArea.value);
}

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

let name = document.getElementsByClassName('name')[0];
name.value = localStorage.getItem('name');

name.onkeydown = function () {
    localStorage.setItem('name', name.value);
}

let surname = document.getElementsByClassName('surname')[0];
surname.value = localStorage.getItem('surname');

surname.onkeydown = function () {
    localStorage.setItem('surname', surname.value);
}

let email = document.getElementsByClassName('email')[0];
email.value = localStorage.getItem('email');

email.onkeydown = function () {
    localStorage.setItem('email', email.value);
}

let option1 = document.getElementsByClassName('option1')[0];
if (localStorage.getItem('option') === 'option1') {
    option1.setAttribute('selected', 'selected');
}
option1.onclick = function () {
    localStorage.setItem('option', 'option1');
}

let option2 = document.getElementsByClassName('option2')[0];
if (localStorage.getItem('option') === 'option2') {
    option2.setAttribute('selected', 'selected');
}
option2.onclick = function () {
    localStorage.setItem('option', 'option2');
}

let option3 = document.getElementsByClassName('option3')[0];
if (localStorage.getItem('option') === 'option3') {
    option3.setAttribute('selected', 'selected');
}
option3.onclick = function () {
    localStorage.setItem('option', 'option3');
}

let option4 = document.getElementsByClassName('option4')[0];
if (localStorage.getItem('option') === 'option4') {
    option4.setAttribute('selected', 'selected');
}
option4.onclick = function () {
    localStorage.setItem('option', 'option4');
}

let option5 = document.getElementsByClassName('option5')[0];
if (localStorage.getItem('option') === 'option5') {
    option5.setAttribute('selected', 'selected');
}
option5.onclick = function () {
    localStorage.setItem('option', 'option5');
}

let checkbox1 = document.getElementsByClassName('checkbox1')[0];
if (localStorage.getItem('checkbox1') === 'checked') {
    checkbox1.setAttribute('checked', 'checked');
}
checkbox1.onclick = function () {
    if (checkbox1.getAttribute('checked')) {
        localStorage.setItem('checkbox1', 'not');
    } else {
        localStorage.setItem('checkbox1', 'checked');
    }
}

let checkbox2 = document.getElementsByClassName('checkbox2')[0];
if (localStorage.getItem('checkbox2') === 'checked') {
    checkbox2.setAttribute('checked', 'checked');
}
checkbox2.onclick = function () {
    if (checkbox2.getAttribute('checked')) {
        localStorage.setItem('checkbox2', 'not');
    } else {
        localStorage.setItem('checkbox2', 'checked');
    }
}

let checkbox3 = document.getElementsByClassName('checkbox3')[0];
if (localStorage.getItem('checkbox3') === 'checked') {
    checkbox3.setAttribute('checked', 'checked');
}
checkbox3.onclick = function () {
    if (checkbox3.getAttribute('checked')) {
        localStorage.setItem('checkbox3', 'not');
    } else {
        localStorage.setItem('checkbox3', 'checked');
    }
}

let checkbox4 = document.getElementsByClassName('checkbox4')[0];
if (localStorage.getItem('checkbox4') === 'checked') {
    checkbox4.setAttribute('checked', 'checked');
}
checkbox4.onclick = function () {
    if (checkbox4.getAttribute('checked')) {
        localStorage.setItem('checkbox4', 'not');
    } else {
        localStorage.setItem('checkbox4', 'checked');
    }
}

let checkbox5 = document.getElementsByClassName('checkbox5')[0];
if (localStorage.getItem('checkbox5') === 'checked') {
    checkbox5.setAttribute('checked', 'checked');
}
checkbox5.onclick = function () {
    if (checkbox5.getAttribute('checked')) {
        localStorage.setItem('checkbox5', 'not');
    } else {
        localStorage.setItem('checkbox5', 'checked');
    }
}

let username = document.getElementsByClassName('username')[0];
username.value = localStorage.getItem('username');

username.onkeydown = function () {
    localStorage.setItem('username', username.value);
}

let password = document.getElementsByClassName('password')[0];
password.value = localStorage.getItem('password');

password.onkeydown = function () {
    localStorage.setItem('password', password.value);
}

let passwordAgain = document.getElementsByClassName('passwordAgain')[0];
passwordAgain.value = localStorage.getItem('passwordAgain');

passwordAgain.onkeydown = function () {
    localStorage.setItem('passwordAgain', passwordAgain.value);
}

let comment = document.getElementsByClassName('comment')[0];
comment.value = localStorage.getItem('comment');

comment.onkeydown = function () {
    localStorage.setItem('comment', comment.value);
}

//Перший момент, запам'ятовує браузер усе, окрім останньої натиснутої літери. Це я накосячив, чи просто браузер?
//І другий, щось не те з select, наче нормально все написав, а воно не робить, чому?


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

let wrapDiv = document.createElement('div');
document.body.appendChild(wrapDiv);
wrapDiv.classList.add('wrapDiv');

let arrowsDiv = document.createElement('div');
wrapDiv.appendChild(arrowsDiv);
arrowsDiv.classList.add('arrowsDiv');

let arrowLeft = document.createElement('i');
arrowLeft.classList.add('fa-solid', 'fa-arrow-left');
arrowsDiv.appendChild(arrowLeft);

let arrowRight = document.createElement('i');
arrowRight.classList.add('fa-solid', 'fa-arrow-right');
arrowsDiv.appendChild(arrowRight);

let textAreaWithButton = document.createElement('textarea');
wrapDiv.appendChild(textAreaWithButton);
textAreaWithButton.setAttribute('rows', '10');
textAreaWithButton.setAttribute('cols', '40');
textAreaWithButton.classList.add('textAreaWithButton');
if (localStorage.getItem('textAreaWithButton')) {
    textAreaWithButton.value = JSON.parse(localStorage.getItem('textAreaWithButton'))[JSON.parse(localStorage.getItem('textAreaWithButton')).length - 1];
}


let saveButton = document.createElement('button');
wrapDiv.appendChild(saveButton);
saveButton.innerText = 'Save';
saveButton.classList.add('saveButton');

saveButton.onclick = function () {
    let storageValue = JSON.parse(localStorage.getItem('textAreaWithButton'));
    if (storageValue) {
        localStorage.setItem('textAreaWithButton', JSON.stringify([...storageValue, textAreaWithButton.value]));
    } else {
        localStorage.setItem('textAreaWithButton', JSON.stringify([textAreaWithButton.value]));
    }
};

let indexOfArray;
if (JSON.parse(localStorage.getItem('textAreaWithButton'))) {
    indexOfArray = JSON.parse(localStorage.getItem('textAreaWithButton')).length - 1;
} else {
    indexOfArray = 0;
}

arrowRight.onclick = function () {
    if (indexOfArray === JSON.parse(localStorage.getItem('textAreaWithButton')).length - 1) {
    } else if (indexOfArray === JSON.parse(localStorage.getItem('textAreaWithButton')).length - 2) {
        textAreaWithButton.value = JSON.parse(localStorage.getItem('textAreaWithButton'))[++indexOfArray];
        arrowRight.style.background = 'cornflowerblue';
        arrowLeft.style.background = 'darkblue';
    } else {
        textAreaWithButton.value = JSON.parse(localStorage.getItem('textAreaWithButton'))[++indexOfArray];
        arrowLeft.style.background = 'darkblue';
    }
};

arrowLeft.onclick = function () {
    if (indexOfArray === 0) {
    } else if (indexOfArray === 1) {
        textAreaWithButton.value = JSON.parse(localStorage.getItem('textAreaWithButton'))[--indexOfArray];
        arrowLeft.style.background = 'cornflowerblue';
        arrowRight.style.background = 'darkblue';
    } else {
        textAreaWithButton.value = JSON.parse(localStorage.getItem('textAreaWithButton'))[--indexOfArray];
        arrowRight.style.background = 'darkblue';
    }
}

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

let recordBook = document.createElement('div');
document.body.appendChild(recordBook);
recordBook.classList.add('recordBook');

let recordBookName = document.createElement('p');
recordBookName.innerText = 'Record Book';
recordBook.appendChild(recordBookName);
recordBookName.classList.add('recordBookName');

let contactsDiv = document.createElement('div');
contactsDiv.classList.add('contactsDiv');
recordBook.appendChild(contactsDiv);

let newContact = document.createElement("button");
newContact.classList.add('newContact');
recordBook.appendChild(newContact);
newContact.innerText = 'Add new contact';

newContact.onclick = function () {
    let newContactForm = document.createElement('div');
    newContactForm.classList.add('newContactForm');
    document.body.appendChild(newContactForm);

    let fullNameLabel = document.createElement('label');
    fullNameLabel.innerText = 'Write full name';
    newContactForm.appendChild(fullNameLabel);

    let fullName = document.createElement('input');
    fullName.setAttribute('type', 'text');
    fullName.classList.add('inputNewContact');
    fullNameLabel.appendChild(fullName);

    let numberLabel = document.createElement('label');
    newContactForm.appendChild(numberLabel);
    numberLabel.innerText = 'Write phone number';

    let number = document.createElement('input');
    number.setAttribute('type', 'number');
    number.classList.add('inputNewContact');


};

















