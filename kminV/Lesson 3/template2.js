// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)

document.getElementById('main_header').style.color = 'darksalmon';

// b) робить шириниу елементу ul 400px

document.getElementsByTagName('ul')[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

document.querySelectorAll('.linkList').forEach(value => value.style.width = '50%');

// d) отримує текст який зберігається в елементі з класом listElement2

console.log(document.getElementsByClassName('listElement2')[0].innerText);

console.log('------------');

// e) отримує всі елементи li та змінює ім колір фону на сірий

document.querySelectorAll('li').forEach(value => value.style.background = 'gray');

// f) отримує всі елементи 'a' та додає їм клас anchor

document.querySelectorAll('a').forEach(value => value.classList.add('anchor'));

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (let i of document.getElementsByTagName('a')) {
    i.innerText === 'link3' ? i.style.fontSize = '40px' : false;
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

document.querySelectorAll('a').forEach(value => value.classList.add(`element_${value.innerText}`));

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let bg = prompt('Enter color of bg');
// for (let i of document.getElementsByClassName('sub-header')) {
//     i.style.background = bg;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// document.querySelectorAll('.sub-header').forEach(value => value.innerText === 'content 2 segment' ? value.style.background = prompt('Enter bg') : false);

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// document.getElementsByClassName('content_1')[0].innerText = prompt('Enter any text for content_1');

// l) отримати елементи p та змінити їм padding на 20px

document.querySelectorAll('p').forEach(value => value.style.padding = '20px');

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

document.querySelectorAll('.text2').forEach(value => value.innerText = 'june-2022');

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

// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

let h1 = document.createElement('h1');
h1.innerText = 'Правила бойцовского клуба';
document.body.appendChild(h1);

let wrap = document.createElement('div');
wrap.setAttribute('id', 'wrap');
document.body.appendChild(wrap);

for (let i = 0; i < rules.length; i++) {
    let rule = rules[i];

    let ruleDiv = document.createElement('div');
    ruleDiv.classList.add('rules', `rule${i + 1}`);
    wrap.appendChild(ruleDiv);

    let h2 = document.createElement('h2');
    h2.innerText = `${rule.title}`;

    let p = document.createElement('p');
    p.innerText = `${rule.body}`;

    ruleDiv.append(h2, p);
}