alert('Привет, рада тебя видеть!');

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?'));
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = parseFloat(prompt('Сколько это будет стоить?'));
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = parseFloat(prompt('Сколько это будет стоить?'));

let fullPrice = screenPrice + servicePrice1 + servicePrice2; // итоговая стоимость работы

let rollback = 10;
let servicePercentPrice = (fullPrice - (fullPrice * (rollback / 100))); //цена со скидкой
servicePercentPrice = Math.ceil(servicePercentPrice); //округляем цену в большую сторону

console.log('Как дела?');

switch (true) {
    case (fullPrice > 30000):
        console.log('Даем скидку в 10%');
        break;
    case (15000 < fullPrice <= 30000):
        console.log('Даем скидку в 5%');
        break;
    case (0 < fullPrice <= 15000):
        console.log('Скидка не предусмотрена');
        break;
    case (fullPrice <= 0):
        console.log('Что то пошло не так');
        break;
}

console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log(screens.toLowerCase().split(" "));
console.log(`Процент отката посреднику за работу ${fullPrice * (rollback / 100)}`);
console.log(`Стоимость за вычетом отката посредника ${servicePercentPrice} рублей`);




