alert('Привет, рада тебя видеть!');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptiv: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},

    asking: () => {
        let servicePrice;
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор вёрстки');

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какие типы экранов нужно разработать?');
            let price = 0;

            do {
                price = parseFloat(prompt('Сколько будет стоить данная работа?'));
            } while (!appData.isNumber(appData.screenPrice))

            appData.screens.push({ id: i, name: name, price: price })
        }

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какой дополнительный тип услуги нужен?');

            do {
                servicePrice = prompt('Сколько это будет стоить?');
            } while (!appData.isNumber(servicePrice));  // проверяем, является ли введенная стоимость числом

            appData.services[name] = parseFloat(servicePrice);
        }

        appData.adaptiv = confirm('Нужен ли адаптив на сайте?');
    },

    addPrices: () => {
        for (let screenPrice of appData.screens) {
            appData.screenPrice += +screenPrice;
        }
        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },

    //ф-ция проверки на число
    isNumber: (num) => {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    //функция возвращает общую стоимость(работа + услуги)
    getFullPrice: () => {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
    },

    // функция возвращает title с заглавной буквы и остальными строчными
    getTitle: () => {
        appData.title = appData.title.trim().charAt(0).toUpperCase() + appData.title.trim().slice(1).toLowerCase();
    },

    getRollbackMessage: (price) => {
        if (price <= 0) return 'Что то пошло не так';
        if (price <= 15000) return 'Скидка не предусмотрена';
        if (price <= 30000) return 'Даем скидку в 5%';

        return 'Даем скидку в 10%';
    },

    // функция возвращает стоимость за вычетом отката (со скидкой)
    getServicePercentPrices: () => {
        appData.servicePercentPrice = (appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)))
    },

    start: () => {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice(); // итоговая стоимость работы
        appData.getServicePercentPrices(); // цена со скидкой
        appData.getTitle();

        appData.logger();
    },

    logger: () => {
        console.log('Стоимость всех дополнительных услуг:', appData.allServicePrices);
        console.log('Скидка:', appData.getRollbackMessage(appData.fullPrice));
        console.log(`Стоимость за вычетом отката посреднику ${appData.servicePercentPrice} рублей`);
        console.log(appData.screens);


        // //выводим все свойства объекта в колнсоль
        // for (let key in appData) {
        //     console.log(`${key}: ${appData[key]}`);
        // }
    }
}

appData.start();