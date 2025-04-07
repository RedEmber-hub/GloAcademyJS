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

if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if (15000 < fullPrice && fullPrice <= 30000) {
    console.log('Даем скидку в 5%');
} else if (0 < fullPrice && fullPrice <= 15000) {
    console.log('Скидка не предусмотрена');
} else if (fullPrice <= 0) {
    console.log('Что то пошло не так');
}

console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log(`Процент отката посреднику за работу ${fullPrice * (rollback / 100)}`);
console.log(`Стоимость за вычетом отката посредника ${servicePercentPrice} рублей`);
console.log(`Тип данных title: ${typeof title}, тип данных fullPrice: ${typeof fullPrice}, тип данных adaptive: ${typeof adaptive}`);
console.log(`Длина строки переменной screens: ${screens.length}`);
console.log(`Массив строки: ${screens.toLowerCase().split(" ")}`);





