let title, screens, screenPrice, rollback, fullPrice, adaptive;

title = 'Пушистики';
screens = 'Простые, Сложные, Интерактивные';
screenPrice = 50;
rollback = 10;
fullPrice = 500;
adaptive = true;


alert('Привет, рада тебя видеть!');

console.log('Как дела?');
console.log(typeof title, typeof fullPrice, typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log(screens.toLowerCase().split(" "));
console.log(fullPrice * (rollback / 100));



