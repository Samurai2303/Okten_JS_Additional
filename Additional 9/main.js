// - Є масив :
//
let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

// Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.

let mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv');
document.body.appendChild(mainDiv);

for (let item of usersList) {

    let userDiv = document.createElement('div');
    userDiv.classList.add('userDiv');
    mainDiv.appendChild(userDiv);

    let user = document.createElement('div');
    user.classList.add('subDiv');
    userDiv.appendChild(user);

    let h2User = document.createElement('h2');
    h2User.innerText = 'User information';
    user.appendChild(h2User);

    let name = document.createElement('p');
    name.innerText = `Name - ${item.name}`;
    user.appendChild(name);

    let id = document.createElement('p');
    id.innerText = `ID - ${item.id}`;
    user.appendChild(id);

    let username = document.createElement('p');
    username.innerText = `Username - ${item.username}`;
    user.appendChild(username);

    let email = document.createElement('p');
    email.innerText = `Email - ${item.email}`;
    user.appendChild(email);

    let phone = document.createElement('p');
    phone.innerText = `Phone - ${item.phone}`;
    user.appendChild(phone);

    let address = document.createElement('div');
    address.classList.add('subDiv');
    userDiv.appendChild(address);

    let h2Address = document.createElement('h2');
    h2Address.innerText = 'Address';
    address.appendChild(h2Address);

    let street = document.createElement('p');
    street.innerText = `Street - ${item.address.street}`;
    address.appendChild(street);

    let suite = document.createElement('p');
    suite.innerText = `Suite - ${item.address.suite}`;
    address.appendChild(suite);

    let city = document.createElement('p');
    city.innerText = `City - ${item.address.city}`;
    address.appendChild(city);

    let zipcode = document.createElement('p');
    zipcode.innerText = `Zipcode - ${item.address.zipcode}`;
    address.appendChild(zipcode);

    let geo = document.createElement('div');
    geo.classList.add('subsubDiv');
    address.appendChild(geo);

    let h3Geo = document.createElement('h3');
    h3Geo.innerText = 'Geo';
    geo.appendChild(h3Geo);

    let lat = document.createElement('p');
    lat.innerText = `Lat = ${item.address.geo.lat}`;
    geo.appendChild(lat);

    let lng = document.createElement('p');
    lng.innerText = `Lng = ${item.address.geo.lng}`;
    geo.appendChild(lng);

    let company = document.createElement('div');
    company.classList.add('subDiv');
    userDiv.appendChild(company);

    let h2Company = document.createElement('h2');
    h2Company.innerText = 'Company';
    company.appendChild(h2Company);

    let companyName = document.createElement('p');
    companyName.innerText = `Company name - ${item.company.name}`;
    company.appendChild(companyName);

    let catchPhrase = document.createElement('p');
    catchPhrase.classList.add('catchPhrase');
    catchPhrase.innerText = `Catchphrase - ${item.company.catchPhrase}`;
    company.appendChild(catchPhrase);

    let bs = document.createElement('p');
    bs.innerText = `Bs - ${item.company.bs}`;
    company.appendChild(bs);

    let website = document.createElement('p');
    website.innerText = `Website - ${item.website}`;
    company.appendChild(website);
}

//     за допомоги рекурсії перебрати структуру сторінки. зробити об'єкт, всі заголовки покласти в (масив) характеристику headings,всі параграфи покласти в характеристику (масив) paragraphs

let headingsAndParagraphs = {
    headings: [],
    paragraphs: []
}

function explorer(htmlElement) {
    if (htmlElement.tagName === 'P') {
        headingsAndParagraphs["paragraphs"].push(htmlElement.innerText);
    }
    if (htmlElement.tagName === 'H2' || htmlElement.tagName === 'H3') {
        headingsAndParagraphs["headings"].push(htmlElement.innerText);
    }
    if (htmlElement.children.length) {
        for (const child of htmlElement.children) {
            explorer(child);
        }
    }
}

explorer(document.body);

console.log(headingsAndParagraphs);


//     зробити div contenteditable ввести будь яке ціле слово. та при натисканні табуляції перетворити його на подвійний тег
// asd ->tab-> <asd></asd>

let box = document.createElement('div');
box.classList.add('box');
document.body.appendChild(box);

let inputForTag = document.createElement('input');
inputForTag.setAttribute('type', 'text');
inputForTag.classList.add('inputForTag');
document.body.appendChild(inputForTag);

inputForTag.onkeydown = function (e) {
    if (e.key === 'Tab') {
        box.innerText = `<${inputForTag.value}></${inputForTag.value}>`;
    }
};



