alert('Привет, рада тебя видеть!');

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptiv: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',


    asking: () => {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор вёрстки');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые сложные');

        do {
            appData.screenPrice = parseFloat(prompt('Сколько будет стоить данная работа?'));
        } while (!appData.isNumber(appData.screenPrice))

        appData.adaptiv = confirm('Нужен ли адаптив на сайте?');
    },

    //ф-ция проверки на число
    isNumber: (num) => {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },


    getAllServicePrices: () => {
        let sum = 0;
        let servicePrice;

        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            }

            do {
                servicePrice = prompt('Сколько это будет стоить?');
            } while (!appData.isNumber(servicePrice));  // проверяем, является ли введенная стоимость числом

            sum += parseFloat(servicePrice);
        }

        return sum;
    },

    //функция возвращает общую стоимость(работа + услуги)
    getFullPrice: () => {
        return appData.screenPrice + appData.allServicePrices;
    },

    // функция возвращает title с заглавной буквы и остальными строчными
    getTitle: () => {
        return appData.title.trim().charAt(0).toUpperCase() + appData.title.trim().slice(1).toLowerCase();
    },

    getRollbackMessage: (price) => {
        if (price <= 0) return 'Что то пошло не так';
        if (price <= 15000) return 'Скидка не предусмотрена';
        if (price <= 30000) return 'Даем скидку в 5%';

        return 'Даем скидку в 10%';
    },

    // функция возвращает стоимость за вычетом отката (со скидкой)
    getServicePercentPrices: () => {
        return (appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)))
    },

    start: () => {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices(); // вычисляем все дополнительные услуги
        appData.fullPrice = appData.getFullPrice(); // итоговая стоимость работы
        appData.servicePercentPrice = appData.getServicePercentPrices(); // цена со скидкой
        appData.servicePercentPrice = Math.ceil(appData.servicePercentPrice);  // округляем цену в большую сторону


        appData.logger();
    },

    logger: () => {
        console.log('Стоимость всех дополнительных услуг:', appData.allServicePrices);

        console.log(`Массив экранов: ${appData.screens.toLowerCase().split(" ")}`);
        console.log('Скидка:', appData.getRollbackMessage(appData.fullPrice));
        console.log(`Стоимость за вычетом отката посреднику ${appData.servicePercentPrice} рублей`);

        //выводим все свойства объекта в колнсоль
        for (let key in appData) {
            console.log(`${key}: ${appData[key]}`);
        }
    }
}

appData.start();