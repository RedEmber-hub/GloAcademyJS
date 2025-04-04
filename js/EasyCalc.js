let num = 266219;

// ф-ция перемножает цифры числа
const multiplyDigits = (number) => {
    const numStr = number.toString(); // приводим num к строке

    // создаем массив цифр строки; преобразуем в массив чисел; вычисляем произведение чисел массива
    const numberArray = Array.from(numStr).map(Number).reduce((acc, digit) => acc * digit, 1);
    return numberArray;
}

const result = multiplyDigits(num);
console.log(`Произведение цифр числа ${num}: ${result}`);
