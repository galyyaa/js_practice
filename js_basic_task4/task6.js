// 6. Є рядок email із ємейлом користувача string email = "daniel.abrams@gmail.com"
// За допомогою .split() розбийте його на дві частини по символу '@'. Запишіть вихідний масив у нову змінну.
// За допомогою .splice() треба замінити домен пошти(те що після @, тобто другий елемент масиву із індексом 1) на 'changed.com'.
// За допомогою .join() конвертуйте масив із зміненим ємейлом до рядка додав символ '@' між двома елементами масиву, виведіть цей рядок. 

const string_email = "daniel.abrams@gmail.com"
const words = string_email.split("@")
const removed = words.splice(1, 1, "changed.com")
console.log(words.join('@'))