// Використовуючи замикання, створіть функцію divider, яка приймає дільник(число, на яке треба ділити) та повертає 
// іншу функцію, яка у свою чергу приймає ділене(число, яке потрібно поділити на дільник) та повертає результат ділення.

function divider(divisor) {
    return function (number) {
        return number / divisor;
    };
}

const divideByFive = divider(5);
console.log(divideByFive(10));