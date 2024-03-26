// По можливості кожен клас створювати в окремому файлі, і створити окремий клас для створення всіх об'єктів та роботи з ними. 
// Створити клас Animal. Додати до нього властивості color, name, type. Та методи sayHello та run. Реалізацію методів зробіть будь яку, але логічну.
// Створити дочірній клас Dog від Animal та в ньому додати 3 індивідуальні властивості для собак. І 2 індивідуальні методи.
// Створити дочірній клас Cat від Animal та в ньому додати 3 індивідуальні властивості для котів. І 2 індивідуальні методи.
// Створити об'єкти до Dog та Cat та попрактикуватись із методами.

class Animal {
    constructor(color, name, type) {
        this.color = color;
        this.name = name;
        this.type = type;
    }
    sayHello() {
        console.log(`I'm ${this.name} and I'm ${this.color}.`);
    };
    info() {
        console.log(`Wolves are ${this.type} animals.`)
    };
}

const animal = new Animal("gray", "wolf", "wild")
animal.sayHello()
animal.info()