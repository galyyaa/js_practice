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

class Cat extends Animal {
    constructor(color, name, hobby, age, food) {
        super(color);
        this.name = name;
        this.hobby = hobby;
        this.age = age;
        this.food = food;
    }
    infoCat() {
        console.log(`${this.name} is a British cat, that's why he's ${this.color}. He's ${this.age} years old.`);
    }
    describeCat() {
        console.log(`My cat loves to ${this.hobby}, run and eat ${this.food}:)`);
    }

}
const animal = new Animal("gray", "wolf", "wild")
animal.sayHello()
animal.info()
console.log('----------------')
const dog = new Dog("gray", "husky", "Rex");
dog.infoDog()
dog.describeDog()
console.log('----------------')
const cat = new Cat("gray", "Tim", "play", 6, "snacks");
cat.infoCat()
cat.describeCat()