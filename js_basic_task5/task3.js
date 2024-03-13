// 3. Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає суму всіх чисел у масиві.

function sum(numbers){
    return numbers.reduce((total, num) => total + num)
}
console.log(sum([12,13,15,78,99]))