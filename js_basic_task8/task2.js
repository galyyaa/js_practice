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

class Dog extends Animal {
    constructor(color, breed, name) {
        super(color);
        this.breed = breed;
        this.name = name;
    }
    infoDog() {
        console.log(`His name is ${this.name} and he's a ${this.breed}.`);
    }
    describeDog() {
         console.log(`In general husky are ${this.color}.`);
    }

}

const animal = new Animal("gray", "wolf", "wild")
animal.sayHello()
animal.info()
console.log('----------------')
const dog = new Dog("gray", "husky", "Rex");
dog.infoDog()
dog.describeDog()