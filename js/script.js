alert('Привет, рада тебя видеть!');

const title = prompt('Как называется ваш проект?');
const screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?'));
const adaptive = confirm('Нужен ли адаптив на сайте?');
const service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = parseFloat(prompt('Сколько это будет стоить?'));
const service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = parseFloat(prompt('Сколько это будет стоить?'));

let rollback = 10;

// ф-ция для расчета стоимости всех дополнительных услуг
const getAllServicePrices = () => {
    return servicePrice1 + servicePrice2;
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
    if (price > 30000) {
        return 'Даем скидку в 10%';
    } else if (15000 < price && price <= 30000) {
        return 'Даем скидку в 5%';
    } else if (0 < price && price <= 15000) {
        return 'Скидка не предусмотрена';
    } else if (price <= 0) {
        return 'Что то пошло не так';
    }
}

//Функция возвращает итоговую стоимость за вычетом процента отката/цена со скидкой
const getServicePercentPrices = (fullPrice, rollback) => {
    return (fullPrice - (fullPrice * (rollback / 100)))
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

const allServicePrices = getAllServicePrices(); // вычисляем все дополнительные услуги

let fullPrice = getFullPrice(screenPrice, allServicePrices) // итоговая стоимость работы

let servicePercentPrice = getServicePercentPrices(fullPrice, rollback); // цена со скидкой
servicePercentPrice = Math.ceil(servicePercentPrice);  // округляем цену в большую сторону

console.log(`Массив строки: ${screens.toLowerCase().split(" ")}`);
console.log(getRollbackMessage(fullPrice));
console.log(`Стоимость за вычетом отката посреднику ${servicePercentPrice} рублей`);





