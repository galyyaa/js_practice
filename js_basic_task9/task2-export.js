export function sayHello(callback) {
    console.log("Tell us your name")

setTimeout(function () {
    const name = "Hi, my name is Galya"
    callback(name)
}, 1500)
}

function tellName(name) {
    console.log(name)
}
sayHello(tellName)
