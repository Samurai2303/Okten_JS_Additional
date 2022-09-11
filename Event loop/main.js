let money = 0;

function goWork(isWorkingDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWorkingDay) {
                money += 1000;
                resolve(money);
            } else {
                reject('Isn/t working day');
            }
        }, 800);
    })

}

function trip(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 550) {
                money -= 500;
                console.log('went to the trip');
                resolve(money);
            } else {
                reject('no trip(');
            }
        }, 1000);
    });
}

function byingSouvenirs(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 200) {
                money -= 100;
                console.log('We have some souvenirs');
                resolve(money);
            } else {
                reject('No souvenirs');
            }
        }, 200);
    });
}

// goWork(true)
//     .then(money => {
//         console.log('I got ', money, ' after working day');
//         return trip(money);
//     })
//     .then(moneyAfterTrip => {
//         console.log('I got ', moneyAfterTrip, ' after trip');
//         return byingSouvenirs(moneyAfterTrip);
//     })
//     .then(money => {
//         console.log('I got ', money, ' after bying souvenirs');
//         return money;
//     })
//     .catch(reason => {
//         console.warn(reason);
//     });

async function vacation() {
    try {
        let payment = await goWork(true);
        console.log('payment = ', payment);

        let moneyAfterTrip = await trip(payment);
        console.log('Money after trip = ', moneyAfterTrip);

        let moneyAfterBuyingSouvenirs = await byingSouvenirs(moneyAfterTrip);
        console.log('Money after buying souvenirs = ', moneyAfterBuyingSouvenirs);
    } catch (e) {
        console.warn(e);
    }
}

// чи робочий день
// чи спрацював будильник
// чи вже приготований сніданок
// маршруткою чи пішки до школи
// чи задали уроки
// йдемо в кіно чи гуляти
// чи потрібно готувати вечерю
// чи завтра робочий день

function isWorkingDay(isWorkingDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWorkingDay === 'yes') {
                console.log('Today is working day, so we need to go to school');
                resolve('yes');
            } else if (isWorkingDay === 'no') {
                console.log('Today is weekend, so we dont need to go to school');
                resolve('no');
            } else {
                reject('Day is not correct');
            }
        }, 1207)
    })
}

function alarmIsWork(alarmIsWork) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (alarmIsWork === 'yes') {
                console.log('We woke up in time and dont hurry');
                resolve('yes');
            } else if (alarmIsWork === 'no') {
                console.log('We are hurry');
                resolve('no');
            } else {
                reject('Alarm info is not correct');
            }
        }, 2105)
    })
}

function haveWeBreakfast(haveWeBreakfast) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (haveWeBreakfast === 'yes') {
                console.log('We have a breakfast and dont need to cook it');
                resolve('yes');
            } else if (haveWeBreakfast === 'no') {
                console.log('We need to cook breakfast');
                resolve('no');
            } else {
                reject('We dont know have we breakfast or not');
            }
        }, 2934)
    })
}

function byBusOrOnFoot(byBusOrOnFoot) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (byBusOrOnFoot === 'bus') {
                console.log('We are going by bus');
                resolve('bus');
            } else if (byBusOrOnFoot === 'foot') {
                console.log('We are going on foot');
                resolve('foot');
            } else {
                reject('We dont know if we go on foot or by bus');
            }
        }, 4658)
    })
}

function haveWeHw(haveWeHw) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (haveWeHw === 'yes') {
                console.log('We need to do homework');
                resolve('yes');
            } else if (haveWeHw === 'no') {
                console.log('We dont need to do homework');
                resolve('no');
            } else {
                reject('Smth went wrong (haveWeHw)');
            }
        }, 3541)
    })
}

function hangOutOrNot(hangOutOrNot) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hangOutOrNot === 'yes') {
                console.log('We can hang out with friends');
                resolve('yes');
            } else if (hangOutOrNot === 'no') {
                console.log('We cant hang out with friends');
                resolve('no');
            } else {
                reject('Smth went wrong (hangOutOrNot)')
            }
        }, 2938)
    })
}

function cinemaOrPark(cinemaOrPark) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cinemaOrPark === 'cinema') {
                console.log('We have money and we are going to the cinema');
                resolve('cinema');
            } else if (cinemaOrPark === 'park') {
                console.log('We havent enough money, so we are going to the park');
                resolve('park');
            } else {
                reject('Smth went wrong (cinemaOrPark)');
            }
        }, 2098)
    })
}

function haveWeDinner(haveWeDinner) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (haveWeDinner === 'yes') {
                console.log('We dont need to cook dinner');
                resolve('yes');
            } else if (haveWeDinner === 'no') {
                console.log('We have to cook dinner');
                resolve('no');
            } else {
                reject('Smth went wrong (haveWeDinner)');
            }
        }, 6554)
    })
}

function whatDayTomorrow(whatDayTomorrow) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (whatDayTomorrow === 'working') {
                console.log('We should go to the bed already');
                resolve('to Bed');
            } else if (whatDayTomorrow === 'weekend') {
                console.log('We can go to the bed not now');
                resolve('To play');
            } else {
                reject('Smth went wrong (whatDayTomorrow)');
            }
        }, 1234)
    })
}

async function day(isworkingday, alarmiswork, havewebreakfast, havewehw, havewedinner, whatdaytomorrow) {
    try {
        let workF = await isWorkingDay(isworkingday);

        let alarmF;
        let breakfastF;
        let busFootF;
        let haveHwF;
        let hangOutF;
        let cinemaOrparkF;
        let haveWeDinnerF;
        let whatDayTomorrowF;

        if (workF === 'yes') {
            alarmF = await alarmIsWork(alarmiswork);
            breakfastF = await haveWeBreakfast(havewebreakfast);

            if (breakfastF === 'no' || alarmF === 'no') {
                busFootF = await byBusOrOnFoot('bus');
            } else {
                busFootF = await byBusOrOnFoot('foot');
            }
            haveHwF = await haveWeHw(havewehw);
            if (haveHwF === 'yes') {
                hangOutF = await hangOutOrNot('no');
            } else {
                hangOutF = await hangOutOrNot('yes');
                if (busFootF === 'bus') {
                    cinemaOrparkF = await cinemaOrPark('park');
                } else {
                    cinemaOrparkF = await cinemaOrPark('cinema');
                }
            }
            haveWeDinnerF = await haveWeDinner(havewedinner);
            whatDayTomorrowF = await whatDayTomorrow(whatdaytomorrow);

        } else if (workF === 'no') {
            breakfastF = await haveWeBreakfast(havewebreakfast);
            haveHwF = await haveWeHw(havewehw);
            hangOutF = await hangOutOrNot('yes');
            haveWeDinnerF = await haveWeDinner(havewedinner);
            whatDayTomorrowF = await whatDayTomorrow(whatdaytomorrow);
        }

    } catch (e) {
        console.warn(e);
    }
}

// day('yes', 'yes', 'yes', 'no', 'yes', 'working');
// day('no', '', 'no', 'yes', 'no', 'working');
day('yes', 'no', 'no', 'no', 'no', 'weekend');



