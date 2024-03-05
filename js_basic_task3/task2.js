// Створіть програму, яка приймає такі змінні: базовий рядок та символ, який потрібно замінити(як змінні), 
// а потім замінює вказаний символ у базовому рядку на "*" та записує у новий рядок, який потім виводить у консоль. 

let userInput = "JavaScript homework, task 2 ########## without symbols :)";
let symbol = "#";
let newInput = replaceChar(userInput, symbol);

function replaceChar(userInput, symbol) {
    let newInput = userInput.replace(new RegExp(symbol, 'g'), '*');
    return newInput;}

console.log("Actual result:", newInput)