// Використовуючи рекурсію, напишіть функцію, яка приймає два параметри - start та finish. За допомогою рекурсії, виведіть всі числа від start до finish.
// Приклад використання: printIntervalRec(10,15);

function printIntervalRec(startValue, finishValue) {

    if (startValue > finishValue) {
        return;
    }
    console.log(startValue);
    printIntervalRec(startValue + 1, finishValue);
}

printIntervalRec(10, 15);
