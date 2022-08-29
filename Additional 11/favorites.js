
for (let user of JSON.parse(localStorage.getItem('favorites'))) {
    let userDiv = document.createElement('div');
    document.getElementsByClassName('favoritesUsers')[0].appendChild(userDiv);
    userDiv.innerText = `Name - ${user.name}
    Age - ${user.age}`;
    userDiv.classList.add('userDiv');
}


