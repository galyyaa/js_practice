// 2. Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає новий масив, в якому кожен елемент буде піднесений до квадрата.

 function numbers(arr) {
    return arr.map(num => num * num)
 }
 console.log(numbers([1,2,3,4,5,6,7,8,9,11,21,23]))
