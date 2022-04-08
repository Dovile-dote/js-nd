class Dog {
    constructor(name, color, eyesColor, meal) {
        this.name = name;
        this.species = 'dog';
        this.color = color;
        this.eyesColor = eyesColor;
        this.legsNumber = 4;
        this.sound = 'au au';
        this.meal = meal;
        this.orSitting = false;
    }

    makeSound() {
        console.log(`${this.name}: ${this.sound}!!`);
    }

    sayHello() {
        let status = 'I am standing'
        if(this.orSitting === true) {
            status = 'I am sitting';
        } 
        console.log(`Hi, I am a ${this.species} and my name is ${this.name}. My color is ${this.color}.
        My eyes are ${this.eyesColor}. I have ${this.legsNumber} legs. Right now ${status}.`);
    }

    sitDown(orSitting) {
        this.orSitting = true;
        console.log(`${this.name}: I am sitting.`);
    }

    standUp(orSitting) {
        this.orSitting = false;
        console.log(`${this.name}: I am standing.`);
    }
}

const dog = new Dog('Rex', 'black', 'blue', 'cake');
console.log(dog);
console.log('----------');
dog.sitDown();
console.log('----------');
dog.sayHello();
console.log('----------');
dog.standUp();
console.log('----------');
dog.sayHello();

class Cat {
    constructor(name, color, eyesColor, meal) {
        this.name = name;
        this.species = 'cat';
        this.color = color;
        this.eyesColor = eyesColor;
        this.legsNumber = 4;
        this.sound = 'miau miau';
        this.meal = meal;
        this.orLying = false;
    }

    makeSound() {
        console.log(`${this.name}: ${this.sound}!!`);
    }

    sayHello() {
        let status = 'I am standing'
        if(this.orLying === true) {
            status = 'I am lying';
        } 
        console.log(`Hi, I am a ${this.species} and my name is ${this.name}. My color is ${this.color}.
        My eyes are ${this.eyesColor}. I have ${this.legsNumber} legs. Right now ${status}.`);
    }

    destroyItem() {
        console.log(`Rainis just destroyed ${this.meal}`);
    }

    lieDown(orLying) {
        this.orLying = true;
        console.log(`${this.name}: I am lying down.`);
    }

    standUp(orLying) {
        this.orLying = false;
        console.log(`${this.name}: I am standing.`);
    }
}

const cat = new Cat('Rainis', 'black', 'blue', 'cake');
console.log(cat);
console.log('----------');
cat.makeSound();
console.log('----------');
cat.sayHello();
console.log('----------');
cat.destroyItem();;
console.log('----------');
cat.lieDown();
console.log('----------');
cat.standUp();

class Hamster {
    constructor(name, color, eyesColor, meal) {
        this.name = name;
        this.species = 'hamster';
        this.color = color;
        this.eyesColor = eyesColor;
        this.legsNumber = 4;
        this.sound = 'krimst krimst!!';
        this.meal = meal;
        this.orEatingNow = false;
    }

    makeSound() {
        console.log(`${this.name}: ${this.sound}!!`);
    }

    sayHello() {
    console.log(`Hi, I am a ${this.species} and my name is ${this.name}. My color is ${this.color}.
    My eyes are ${this.eyesColor}. I have ${this.legsNumber} legs.`);
    }

    eat(orEatingNow) {
        this.orEatingNow = true;
        console.log(`${this.name} just destroyd a ${this.meal}.`);
    }

    stopEating(orEatingNow) {
        this.orEatingNow = false;
        console.log(`${this.name} wants to eat.`);
    }
}

const hamster = new Hamster('Chamiakas', 'black', 'blue', 'cake');
console.log(hamster);
console.log('----------');
hamster.makeSound();
console.log('----------');
hamster.sayHello();
console.log('----------');
hamster.eat();;
console.log('----------');
hamster.stopEating();

class Parrot {
    constructor(name, color, eyesColor) {
        this.name = name;
        this.species = 'parrot';
        this.color = color;
        this.eyesColor = eyesColor;
        this.wingsNumber = 2;
        this.sound = 'I am captain Jack';
        this.words = '';
    }

    makeSound() {
        console.log(`${this.name}: ${this.sound}!!`);
    }

    sayHello() {
        console.log(`Hi, I am a ${this.species} and my name is ${this.name}. My color is ${this.color}.
        My eyes are ${this.eyesColor}. I have ${this.wingsNumber} wings.`);
        }
    
    newWord(words) {
        this.words += words;
        console.log(`${this.name}: ${this.words}.`);
    }
}

const parrot = new Parrot('Jack', 'black', 'blue');
console.log(parrot);
console.log('----------');
parrot.makeSound();
console.log('----------');
parrot.sayHello();
console.log('----------');
parrot.newWord('word');
console.log('---------');
parrot.newWord(', post, car, bike')

class Chicken {
    constructor(name, color, eyesColor) {
        this.name = name;
        this.species = 'chicken';
        this.color = color;
        this.eyesColor = eyesColor;
        this.wingsNumber = 2;
        this.sound = 'cyp cyp';
    }

    makeSound() {
        console.log(`${this.name}: ${this.sound}!!`);
    }

    sayHello() {
        console.log(`Hi, I am a ${this.species} and my name is ${this.name}. My color is ${this.color}.
        My eyes are ${this.eyesColor}. I have ${this.wingsNumber} wings.`);
    }
}

const chicken = new Chicken('Little', 'black', 'blue');
console.log(chicken);
console.log('----------');
chicken.makeSound();
console.log('----------');
chicken.sayHello();
console.log('----------');

class Pike {
    constructor(name, color, eyesColor) {
        this.name = name;
        this.species = 'pike';
        this.color = color;
        this.eyesColor = eyesColor;
        this.sound = 'bul bul';
    }

    makeSound() {
        console.log(`${this.name}: ${this.sound}!!`);
    }

    sayHello() {
        console.log(`Hi, I am a ${this.species} and my name is ${this.name}. My color is ${this.color}.
        My eyes are ${this.eyesColor}.`);
    }
}

const pike = new Pike('Zuvis', 'green', 'brown');
pike.makeSound();
pike.sayHello();