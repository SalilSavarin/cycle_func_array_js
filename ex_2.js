const cars = [
    {
        id: 1,
        name: 'M2',
        description: '2017 3.0 370 Robot',
        size: NaN,
        price: 3650000,
        available: true 
    },
    {
        id: 2,
        name: 'M5',
        description: '2022 4.4 600 Auto',
        size: NaN,
        price: 12000000,
        available: true 
    },
    {
        id: 3,
        name: 'X5 M',
        description: '2020 4.4 625 Auto',
        size: NaN,
        price: 13000000,
        available: true 
    },
    {
        id: 4,
        name: 'E AMG 63',
        description: '2022 4.0 612 Auto',
        size: NaN,
        price: 15400000,
        available: true 
    },
    {
        id: 5,
        name: 'S AMG 63',
        description: '2020 4.0 612 Auto',
        size: NaN,
        price: 17000000,
        available: true 
    }
]

const card = [
    {
        id: 1,
        car: cars[3],
        count: 1},
    {
        id: 2, 
        car: cars[4],
        count: 1
}
]

function addCarToCard(id, carCount) {
    let newItemInCard = {id: card.length + 1, car: cars[id-1], count: carCount};
    card.push(newItemInCard);
    console.log(card);
}


function deleteCarFromCard(card,id) {
    card.splice(id - 1, 1);
    return card;
}


function totalAmount(card) {
    let amount = 0;
    for (const itemInCard of card) {
        amount += itemInCard.count;
        }
    return amount;
    }



function totalSumm(card) {
    let sum = 0;
    for (const itemInCard of card) {
        sum += itemInCard.car.price;
    }
    return sum;
}


function total(card) {
    let sum = 0;
    let amount = 0;
    for (const itemInCard of card) {
        sum += itemInCard.car.price;
        amount += itemInCard.count;
    }
    const result = {totalItems: amount, totalPrice: sum};
    return result
}


function clearCard(card) {
    card.length = 0;
    console.log(card);
}


total(card)
totalSumm(card)
clearCard(card)
deleteCarFromCard(card, 2)
totalAmount(card)
addCarToCard(1,1)
