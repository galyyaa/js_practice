// Створити 3 об'єкти через {}, кожен об'єкт повинен мати як мінімум 3 властивості і 2 методи.

const person = {
    name: "Galya",
    surname: "Morgun",
    city: "Kyiv",
    fullName: function () {
        console.log(`My name is ${this.name} ${this.surname}.`)
    },
    place: function () {
        console.log(`I am from ${this.city}.`)
    }
}
person.fullName()
person.place()

console.log("-----------------------")

const literature = {
    book: "Kobzar",
    writer: "Taras Shevchenko",
    monthOfBirth: "March",
    bookWriter: function () {
        console.log(`${this.writer} was burn on 9th of ${this.monthOfBirth}.`)
    },
    bookName: function () {
        console.log(`The most famous book is ${this.book}.`)
    },
}
literature.bookWriter()
literature.bookName()

console.log("-----------------------")

const asia = {
    country: "Japan",
    capital: "Tokyo",
    language: "Japanese",
    infoJapan: function () {
        console.log(`${this.capital} is the capital of ${this.country}.`)
    },
    langJapan: function () {
        console.log(`The official language is ${this.language}.`)
    },
}
asia.infoJapan()
asia.langJapan()