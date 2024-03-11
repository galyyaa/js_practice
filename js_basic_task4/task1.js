/*
1. Є масив чисел const numbers = [5, -4, 0, 6, 7, -1, 0, 0]
Використовуючи звичайний цикл for, порахуйте кількість позитивних та негативних чисел та нулів.
*/

const numbers = [5, -4, 0, 6, 7, -1, 0, 0]
let positiveCounter = 0
let negativeCounter = 0
let zerosCounter = 0

 for(let i=0; i<numbers.length; i++) {
    if (numbers[i]>0) {
    positiveCounter ++
   }
    else if (numbers[i]<0) {
     negativeCounter ++ 
    }
    else {
        zerosCounter ++
    }
 }

 console.log("Positive numbers:", positiveCounter)
 console.log("Negative numbers:", negativeCounter)
 console.log("Zeros:", zerosCounter)