// 2. Є масив рядків const strings = ["String one", "String two", "string three"]
// За допомогою циклу for of пройтись по всім елементам та вивести у консоль всі рядки великими буквами.

const strings = ["String one", "String two", "string three"]
const UpperString = []
for (const string of strings) {
    UpperString.push(string.toUpperCase())
}
console.log(UpperString)