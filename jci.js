class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Generic animal sound");
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    makeSound() {
        console.log("Woof!");
    }
}
const myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound();