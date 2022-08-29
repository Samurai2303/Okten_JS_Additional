// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.


let usersDiv = document.createElement('div');
usersDiv.classList.add('usersDiv');
document.body.appendChild(usersDiv);

for (let user of users) {
    let userDiv = document.createElement('div');
    userDiv.innerText = `Name - ${user.name}
    Age - ${user.age}`;
    userDiv.classList.add('userDiv');
    usersDiv.appendChild(userDiv);

    let addToFavorites = document.createElement('button');
    addToFavorites.innerText = 'Add to favorites';
    addToFavorites.classList.add('button');
    userDiv.appendChild(addToFavorites);

    addToFavorites.onclick = function () {
        if (JSON.parse(localStorage.getItem('favorites'))) {
            localStorage.setItem('favorites', JSON.stringify([...JSON.parse(localStorage.getItem('favorites')), user]));
        }else{
            localStorage.setItem('favorites', JSON.stringify([user]));
        }
    }
}

let nextPage = document.createElement('button');
nextPage.innerText = 'Favorite users';
nextPage.classList.add('nextPage');
nextPage.onclick = function () {
    location.href = `favorites.html`;
}
document.body.appendChild(nextPage);


let clear = document.createElement('button');
document.body.appendChild(clear);
clear.innerText = 'Clear local storage';
clear.onclick = function () {
    localStorage.clear();
}








