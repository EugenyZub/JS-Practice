'use stric';

let finance = +prompt('Ваш бюджет на месяц?');
let shopName = prompt('Название вашего магазина?');

let mainList = {
    finance: finance,
    shopName: shopName,
    shopGoods: [],
    employers: {},
    open: true
};

for(let i = 0; i < 3; i++) {
    mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать?');
}

alert('Бюджет на 1 день: ' + mainList.finance/30);