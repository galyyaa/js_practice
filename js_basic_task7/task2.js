// Створити 2 об'єкти через new Object();, до кожного об'єкту додати як мінімум 3 властивості та 1 метод.

const car = new Object()
car.country = "Germany"
car.brand = "Audi"
car.model = "RS"
car.infoModel = function () {
    console.log(`${this.brand} ${this.model} it's a sport version. This model made in ${this.country}.`)
};

const engine = new Object()
engine.type = "V8"
engine.capacity = "4.0"
engine.power = "600 horsepowers"
engine.infoAudi = function () {
    console.log(`General information about engine: type is ${this.type}, capacity is ${this.capacity}, power is ${this.power}.`)
};

car.infoModel()
engine.infoAudi()    