// 4. Є масив рядків імен const names = ["John", "Fernando", "Alexandra", "Anatolii", "Arina", "Elon"]
//  Використовуючи .find(), виведіть перше ім'я, з довжиною більше 6 символів

const names = ["John", "Fernando", "Alexandra", "Anatolii", "Arina", "Elon"]
const namesNew = names.find((name) => name.length > 6 )
console.log(namesNew)