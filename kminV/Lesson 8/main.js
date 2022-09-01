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


console.log(JSON.parse(localStorage.getItem('recordBook')));


if (localStorage.getItem('recordBook')) {
    for (let i = 0; i < JSON.parse(localStorage.getItem('recordBook')).length; i++) {
        let contact = JSON.parse(localStorage.getItem('recordBook'))[i];

        let contactDiv = document.createElement('div');
        contactsDiv.appendChild(contactDiv);
        contactDiv.classList.add('createdContact');
        contactDiv.innerText = `Full name - ${contact.name}
        Phone number - ${contact.phone}
        Email - ${contact.email}
        Company name - ${contact.company}
        Department of the company - ${contact.department}
        Birthday - ${contact.birthday}`;

        let twoButtonsWrap = document.createElement('div');
        contactDiv.appendChild(twoButtonsWrap);
        twoButtonsWrap.classList.add('twoButtonsWrap');

        let editButton = document.createElement('button');
        editButton.classList.add('createdContactButton');
        editButton.innerText = 'Edit contact';
        editButton.onclick = function () {

            let editDiv = document.createElement('div');
            editDiv.classList.add('newContactForm');
            document.body.appendChild(editDiv);

            let fullNameDivE = document.createElement('div');
            fullNameDivE.classList.add('formDiv');
            editDiv.appendChild(fullNameDivE);

            let fullNameE = document.createElement('input');
            fullNameE.setAttribute('type', 'text');
            fullNameE.classList.add('inputNewContact');
            fullNameDivE.appendChild(fullNameE);
            fullNameE.value = contact.name;

            let fullNamePE = document.createElement('p');
            fullNamePE.innerText = 'Write full name';
            fullNamePE.classList.add('pNewContact');
            fullNameDivE.appendChild(fullNamePE);

            let numberDivE = document.createElement('div');
            numberDivE.classList.add('formDiv');
            editDiv.appendChild(numberDivE);

            let numberE = document.createElement('input');
            numberE.setAttribute('type', 'number');
            numberE.classList.add('inputNewContact');
            numberDivE.appendChild(numberE);
            numberE.value = contact.phone;

            let numberPE = document.createElement('p');
            numberDivE.appendChild(numberPE);
            numberPE.innerText = 'Write phone number';
            numberPE.classList.add('pNewContact');

            let emailDivE = document.createElement('div');
            emailDivE.classList.add('formDiv');
            editDiv.appendChild(emailDivE);

            let emailE = document.createElement('input');
            emailE.classList.add('inputNewContact');
            emailE.setAttribute('type', 'email');
            emailDivE.appendChild(emailE);
            emailE.value = contact.email;

            let emailPE = document.createElement('p');
            emailDivE.appendChild(emailPE);
            emailPE.innerText = 'Write email';
            emailPE.classList.add('pNewContact');

            let companyDivE = document.createElement('div');
            companyDivE.classList.add('formDiv');
            editDiv.appendChild(companyDivE);

            let companyE = document.createElement('input');
            companyE.setAttribute('type', 'text');
            companyE.classList.add('inputNewContact');
            companyDivE.appendChild(companyE);
            companyE.value = contact.company;

            let companyPE = document.createElement('p');
            companyDivE.appendChild(companyPE);
            companyPE.innerText = 'Write name of the company';
            companyPE.classList.add('pNewContact');

            let departmentDivE = document.createElement('div');
            departmentDivE.classList.add('formDiv');
            editDiv.appendChild(departmentDivE);

            let departmentE = document.createElement('input');
            departmentE.setAttribute('type', 'text');
            departmentE.classList.add('inputNewContact');
            departmentDivE.appendChild(departmentE);
            departmentE.value = contact.department;

            let departmentPE = document.createElement('p');
            departmentDivE.appendChild(departmentPE);
            departmentPE.innerText = 'Write department of the company';
            departmentPE.classList.add('pNewContact');

            let birthdayDivE = document.createElement('div');
            birthdayDivE.classList.add('formDiv');
            editDiv.appendChild(birthdayDivE);

            let birthdayE = document.createElement('input');
            birthdayE.classList.add('inputNewContact');
            birthdayE.setAttribute('type', 'date');
            birthdayDivE.appendChild(birthdayE);
            birthdayE.value = contact.birthday;

            let birthdayPE = document.createElement('p');
            birthdayDivE.appendChild(birthdayPE);
            birthdayPE.innerText = 'Write date of birth';
            birthdayPE.classList.add('pNewContact');

            let createButtonDiv = document.createElement('div');
            editDiv.appendChild(createButtonDiv);
            createButtonDiv.classList.add('createButtonDiv');

            let editButtonE = document.createElement('button');
            createButtonDiv.appendChild(editButtonE);
            editButtonE.innerText = 'Edit contact';
            editButtonE.classList.add('createButton');
            editButtonE.onclick = function () {
                contactDiv.innerText = `Full name - ${fullNameE.value}
                Phone number - ${numberE.value}
                Email - ${emailE.value}
                Company name - ${companyE.value}
                Department of the company - ${departmentE.value}
                Birthday - ${birthdayE.value}`;

                let contactsArray = JSON.parse(localStorage.getItem('recordBook'));

                let beforeCurrent = [];
                for (let j = 0; j < i; j++) {
                    beforeCurrent.push(contactsArray[j]);
                }

                let afterCurrent = [];
                for (let j = i + 1; j < contactsArray.length; j++) {
                    afterCurrent.push(contactsArray[j]);
                }

                localStorage.setItem('recordBook', JSON.stringify([...beforeCurrent, {
                    name: fullNameE.value,
                    phone: numberE.value,
                    email: emailE.value,
                    company: companyE.value,
                    department: departmentE.value,
                    birthday: birthdayE.value
                }]), ...afterCurrent);

                twoButtonsWrap.cloneNode(true);

                editDiv.remove();
            }
        };

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('createdContactButton');
        deleteButton.innerText = 'Delete contact';
        deleteButton.onclick = function () {

            let contactsArray = JSON.parse(localStorage.getItem('recordBook'));

            let beforeCurrent = [];
            for (let j = 0; j < i; j++) {
                beforeCurrent.push(contactsArray[j]);
            }

            let afterCurrent = [];
            for (let j = i + 1; j < contactsArray.length; j++) {
                afterCurrent.push(contactsArray[j]);
            }

            localStorage.setItem('recordBook', JSON.stringify([...beforeCurrent, ...afterCurrent]));

            contactDiv.remove();
        };

        twoButtonsWrap.append(editButton, deleteButton);
    }
}

let newContact = document.createElement('button');
newContact.classList.add('newContact');
recordBook.appendChild(newContact);
newContact.innerText = 'Add new contact';

newContact.onclick = function () {
    let newContactForm = document.createElement('div');
    newContactForm.classList.add('newContactForm');
    document.body.appendChild(newContactForm);

    let fullNameDiv = document.createElement('div');
    fullNameDiv.classList.add('formDiv');
    newContactForm.appendChild(fullNameDiv);

    let fullName = document.createElement('input');
    fullName.setAttribute('type', 'text');
    fullName.classList.add('inputNewContact');
    fullNameDiv.appendChild(fullName);

    let fullNameP = document.createElement('p');
    fullNameP.innerText = 'Write full name';
    fullNameP.classList.add('pNewContact');
    fullNameDiv.appendChild(fullNameP);

    let numberDiv = document.createElement('div');
    numberDiv.classList.add('formDiv');
    newContactForm.appendChild(numberDiv);

    let number = document.createElement('input');
    number.setAttribute('type', 'number');
    number.classList.add('inputNewContact');
    numberDiv.appendChild(number);

    let numberP = document.createElement('p');
    numberDiv.appendChild(numberP);
    numberP.innerText = 'Write phone number';
    numberP.classList.add('pNewContact');

    let emailDiv = document.createElement('div');
    emailDiv.classList.add('formDiv');
    newContactForm.appendChild(emailDiv);

    let email = document.createElement('input');
    email.classList.add('inputNewContact');
    email.setAttribute('type', 'email');
    emailDiv.appendChild(email);

    let emailP = document.createElement('p');
    emailDiv.appendChild(emailP);
    emailP.innerText = 'Write email';
    emailP.classList.add('pNewContact');

    let companyDiv = document.createElement('div');
    companyDiv.classList.add('formDiv');
    newContactForm.appendChild(companyDiv);

    let company = document.createElement('input');
    company.setAttribute('type', 'text');
    company.classList.add('inputNewContact');
    companyDiv.appendChild(company);

    let companyP = document.createElement('p');
    companyDiv.appendChild(companyP);
    companyP.innerText = 'Write name of the company';
    companyP.classList.add('pNewContact');

    let departmentDiv = document.createElement('div');
    departmentDiv.classList.add('formDiv');
    newContactForm.appendChild(departmentDiv);

    let department = document.createElement('input');
    department.setAttribute('type', 'text');
    department.classList.add('inputNewContact');
    departmentDiv.appendChild(department);

    let departmentP = document.createElement('p');
    departmentDiv.appendChild(departmentP);
    departmentP.innerText = 'Write department of the company';
    departmentP.classList.add('pNewContact');

    let birthdayDiv = document.createElement('div');
    birthdayDiv.classList.add('formDiv');
    newContactForm.appendChild(birthdayDiv);

    let birthday = document.createElement('input');
    birthday.classList.add('inputNewContact');
    birthday.setAttribute('type', 'date');
    birthdayDiv.appendChild(birthday);

    let birthdayP = document.createElement('p');
    birthdayDiv.appendChild(birthdayP);
    birthdayP.innerText = 'Write date of birth';
    birthdayP.classList.add('pNewContact');                     //Як зробити в js, щоб в тегу label текст йшов після інпуту? через innerHTML?

    let createButtonDiv = document.createElement('div');
    newContactForm.appendChild(createButtonDiv);
    createButtonDiv.classList.add('createButtonDiv');

    let createButton = document.createElement('button');
    createButtonDiv.appendChild(createButton);
    createButton.classList.add('createButton');
    createButton.innerText = 'Create contact';

    createButton.onclick = function () {
        if (localStorage.getItem('recordBook')) {
            localStorage.setItem('recordBook', JSON.stringify([...JSON.parse(localStorage.getItem('recordBook')), {
                name: fullName.value,
                phone: number.value,
                email: email.value,
                company: company.value,
                department: department.value,
                birthday: birthday.value
            }]));
        } else {
            localStorage.setItem('recordBook', JSON.stringify([{
                name: fullName.value,
                phone: number.value,
                email: email.value,
                company: company.value,
                department: department.value,
                birthday: birthday.value
            }]));
        }

        let createdContact = document.createElement('div');
        contactsDiv.appendChild(createdContact);
        createdContact.classList.add('createdContact');

        let createdContactInfo = document.createElement('p');
        createdContactInfo.innerText = `Full name - ${fullName.value}
        Phone number - ${number.value}
        Email - ${email.value}
        Company name - ${company.value}
        Department of the company - ${department.value}
        Birthday - ${birthday.value}`;
        createdContact.appendChild(createdContactInfo);

        let twoButtonsWrap = document.createElement('div');
        createdContact.appendChild(twoButtonsWrap);
        twoButtonsWrap.classList.add('twoButtonsWrap');

        let editButton = document.createElement('button');
        editButton.classList.add('createdContactButton');
        editButton.innerText = 'Edit contact';
        editButton.onclick = function () {

            // editDiv.cloneNode(true);

            let editDiv = document.createElement('div');
            editDiv.classList.add('newContactForm');
            document.body.appendChild(editDiv);

            let fullNameDivE = document.createElement('div');
            fullNameDivE.classList.add('formDiv');
            editDiv.appendChild(fullNameDivE);

            let fullNameE = document.createElement('input');
            fullNameE.setAttribute('type', 'text');
            fullNameE.classList.add('inputNewContact');
            fullNameDivE.appendChild(fullNameE);
            fullNameE.value = JSON.parse(localStorage.getItem('recordBook'))[JSON.parse(localStorage.getItem('recordBook')).length - 1].name;

            let fullNamePE = document.createElement('p');
            fullNamePE.innerText = 'Write full name';
            fullNamePE.classList.add('pNewContact');
            fullNameDivE.appendChild(fullNamePE);

            let numberDivE = document.createElement('div');
            numberDivE.classList.add('formDiv');
            editDiv.appendChild(numberDivE);

            let numberE = document.createElement('input');
            numberE.setAttribute('type', 'number');
            numberE.classList.add('inputNewContact');
            numberDivE.appendChild(numberE);
            numberE.value = JSON.parse(localStorage.getItem('recordBook'))[JSON.parse(localStorage.getItem('recordBook')).length - 1].phone;

            let numberPE = document.createElement('p');
            numberDivE.appendChild(numberPE);
            numberPE.innerText = 'Write phone number';
            numberPE.classList.add('pNewContact');

            let emailDivE = document.createElement('div');
            emailDivE.classList.add('formDiv');
            editDiv.appendChild(emailDivE);

            let emailE = document.createElement('input');
            emailE.classList.add('inputNewContact');
            emailE.setAttribute('type', 'email');
            emailDivE.appendChild(emailE);
            emailE.value = JSON.parse(localStorage.getItem('recordBook'))[JSON.parse(localStorage.getItem('recordBook')).length - 1].email;

            let emailPE = document.createElement('p');
            emailDivE.appendChild(emailPE);
            emailPE.innerText = 'Write email';
            emailPE.classList.add('pNewContact');

            let companyDivE = document.createElement('div');
            companyDivE.classList.add('formDiv');
            editDiv.appendChild(companyDivE);

            let companyE = document.createElement('input');
            companyE.setAttribute('type', 'text');
            companyE.classList.add('inputNewContact');
            companyDivE.appendChild(companyE);
            companyE.value = JSON.parse(localStorage.getItem('recordBook'))[JSON.parse(localStorage.getItem('recordBook')).length - 1].company;

            let companyPE = document.createElement('p');
            companyDivE.appendChild(companyPE);
            companyPE.innerText = 'Write name of the company';
            companyPE.classList.add('pNewContact');

            let departmentDivE = document.createElement('div');
            departmentDivE.classList.add('formDiv');
            editDiv.appendChild(departmentDivE);

            let departmentE = document.createElement('input');
            departmentE.setAttribute('type', 'text');
            departmentE.classList.add('inputNewContact');
            departmentDivE.appendChild(departmentE);
            departmentE.value = JSON.parse(localStorage.getItem('recordBook'))[JSON.parse(localStorage.getItem('recordBook')).length - 1].department;

            let departmentPE = document.createElement('p');
            departmentDivE.appendChild(departmentPE);
            departmentPE.innerText = 'Write department of the company';
            departmentPE.classList.add('pNewContact');

            let birthdayDivE = document.createElement('div');
            birthdayDivE.classList.add('formDiv');
            editDiv.appendChild(birthdayDivE);

            let birthdayE = document.createElement('input');
            birthdayE.classList.add('inputNewContact');
            birthdayE.setAttribute('type', 'date');
            birthdayDivE.appendChild(birthdayE);
            birthdayE.value = JSON.parse(localStorage.getItem('recordBook'))[JSON.parse(localStorage.getItem('recordBook')).length - 1].birthday;

            let birthdayPE = document.createElement('p');
            birthdayDivE.appendChild(birthdayPE);
            birthdayPE.innerText = 'Write date of birth';
            birthdayPE.classList.add('pNewContact');

            let editButtonE = document.createElement('button');
            editDiv.appendChild(editButtonE);
            editButtonE.innerText = 'Edit contact';
            editButtonE.classList.add('createButton');
            editButtonE.onclick = function () {
                createdContactInfo.innerText = `Full name - ${fullNameE.value}
                Phone number - ${numberE.value}
                Email - ${emailE.value}
                Company name - ${companyE.value}
                Department of the company - ${departmentE.value}
                Birthday - ${birthdayE.value}`;

                let v = JSON.parse(localStorage.getItem('recordBook'));
                v.pop();

                localStorage.setItem('recordBook', JSON.stringify([...v, {
                    name: fullNameE.value,
                    phone: numberE.value,
                    email: emailE.value,
                    company: companyE.value,
                    department: departmentE.value,
                    birthday: birthdayE.value
                }]));

                editDiv.remove();
            }
        }

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('createdContactButton');
        deleteButton.innerText = 'Delete contact'
        deleteButton.onclick = function () {

            let v = JSON.parse(localStorage.getItem('recordBook'));
            v.pop();
            localStorage.setItem('recordBook', JSON.stringify(v));

            createdContact.remove();
        }

        twoButtonsWrap.append(editButton, deleteButton);

        newContactForm.remove();
    }
};

