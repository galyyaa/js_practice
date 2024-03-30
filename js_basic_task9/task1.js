// За допомогою setTimeout створіть функцію, яка приймає рядок, та кількість секунд.
// Функція повинна виводити переданий текст через передану кількість секунд.

function printTextWithDelay(string, seconds) {
    setTimeout(function(){
        console.log(string)
    }, seconds * 1000)
}
printTextWithDelay("Text with delay", 2)