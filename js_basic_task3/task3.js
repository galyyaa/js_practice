// Створіть програму, яка приймає дві змінні(числа) і виводить список парних чисел, які знаходяться між ними.

function showEvenNumbers(from, to) {
    let evenNumbers = [];
    for (let i = from + 1; i < to; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}

let number1 = 1;
let number2 = 99;

let from = Math.min(number1, number2);
let to = Math.max(number1, number2);

let evenNumbers = showEvenNumbers(from, to);
 {
        console.log("Even numbers from", from, "and", to, "are:", evenNumbers);
    }
