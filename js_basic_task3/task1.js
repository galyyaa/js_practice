/*
Створіть програму, яка приймає рядок від користувача (як змінну) та замінює всі голосні літери на "*" у цьому рядку. 
Виведіть отриманий рядок(із змінами) у консоль.
*/

let userInput = "JavaScript homework";
let newInput = replaceVowels(userInput);


function replaceVowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    for (let char of string) {
        if (vowels.includes(char)) {
            result += '*';
        } else {
            result += char;
        }
    }
    return result;
}
console.log(newInput)