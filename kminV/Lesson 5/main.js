// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.

class Computer {
    constructor(ram, power, name) {
        this.ram = ram;
        this.power = power;
        this.name = name;
    }

    turnOn() {
        console.log(this);
    }
}

// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class Laptop extends Computer {
    constructor(ram, power, name, diagonal) {
        super(ram, power, name);
        this.diagonal = diagonal;
        this.battery = Math.round(power / diagonal * ram);

    }
}

// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

class Ultrabook extends Laptop {
    constructor(ram, power, name, diagonal, weight) {
        super(ram, power, name, diagonal);
        this.weight = weight;
    }

    turnOn() {
        if (this.weight > 2000 || this.battery < 240) {         //4 hours = 240 minutes
            console.log('Error');
        } else {
            super.turnOn();
        }
    }
}

let a = new Ultrabook(8, 600, 'fhgfgh', 18, 1000);

// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

Computer.prototype.startGame = function (nameOfGame) {
    console.log(`You are playing ${nameOfGame} with ${Math.round(this.power / this.ram)} FPS`);
}


let computer1 = new Computer(8, 500, 'computer 1');

computer1.turnOn();
computer1.startGame('minecraft');

console.log('--------------');

// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

Computer.prototype.powerUpgrade = function (percentage) {
    if (percentage > 0 && percentage <= 10) {
        this.power = this.power / 100 * (percentage + 100);
    } else {
        console.log('You can upgrade your computer power only up to 10%')
    }
}

// Від базового ПК необхідно зробити ігровий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

computer1.ram = 4;

computer1.startGame('gta');

console.log('--------------');

Computer.prototype.startGame = function (nameOfGame) {
    this.power = this.power / 100 * 99.9;
    if (this.power < 500 && this.ram < 8) {
        console.log('This piece of crap cant run games');
    } else {
        console.log(`You are playing ${nameOfGame} with ${Math.round(this.power / this.ram)} FPS`);
    }
}

computer1.startGame('happy farm');

console.log('--------------');
