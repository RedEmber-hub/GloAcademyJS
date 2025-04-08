alert('Привет, рада тебя видеть!');

let title;
let screens;
let screenPrice;
let adaptive;

let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

//ф-ция проверки на число
const isNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = () => {
    title = prompt('Как называется ваш проект?', 'Калькулятор вёрстки');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые сложные');

    do {
        screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?'));
    } while (!isNumber(screenPrice))

    adaptive = confirm('Нужен ли адаптив на сайте?');
}

// ф-ция для расчета стоимости всех дополнительных услуг
const getAllServicePrices = () => {
    let sum = 0;
    let servicePrice;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        }

        do {
            servicePrice = prompt('Сколько это будет стоить?');
        } while (!isNumber(servicePrice));  // проверяем, является ли введенная стоимость числом

        sum += parseFloat(servicePrice);
    }

    return sum;
}

//ф-ция возвращает сумму стоимости верстки и стоимости дополнительных услуг
function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
}

//Функция возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой"
const getTitle = () => {
    return title.trim().charAt(0).toUpperCase() + title.trim().slice(1).toLowerCase();
}

const getRollbackMessage = (price) => {
    if (price <= 30000) return 'Даем скидку в 5%';
    if (price <= 15000) return 'Скидка не предусмотрена';
    if (price <= 0) return 'Что то пошло не так';

    return 'Даем скидку в 10%';
}

//Функция возвращает итоговую стоимость за вычетом процента отката/цена со скидкой
const getServicePercentPrices = (fullPrice, rollback) => {
    return (fullPrice - (fullPrice * (rollback / 100)))
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

asking();
allServicePrices = getAllServicePrices(); // вычисляем все дополнительные услуги
fullPrice = getFullPrice(screenPrice, allServicePrices) // итоговая стоимость работы
servicePercentPrice = getServicePercentPrices(fullPrice, rollback); // цена со скидкой
servicePercentPrice = Math.ceil(servicePercentPrice);  // округляем цену в большую сторону

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log('allServicePrices', allServicePrices);

console.log(`Массив строки: ${screens.toLowerCase().split(" ")}`);
console.log(getRollbackMessage(fullPrice));
console.log(`Стоимость за вычетом отката посреднику ${servicePercentPrice} рублей`);