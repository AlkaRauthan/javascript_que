Design Patterns - ideas, opinions, and abstractions that can be useful in certain situations to solve a particular kind of problem.
A design pattern is a set of generalised instructions that provide a solution to commonly occurring problems in software design.
  -Creational 
  -Structural
  -Behavioral

  Creational Design pattern - Creational patterns consist of different mechanisms used to create objects.
   - Singleton
   - Factory pattern
   - Abstract factory pattern
   - Builder pattern
   - Prototype pattern

  
  -Singleton Pattern
      Singleton is a design pattern that ensures that a class has only one immutable instance.
      const Config = {
        start: () => console.log('App has started'),
        update: () => console.log('App has updated'),
      }

    // We freeze the object to prevent new properties being added and existing properties being modified or removed
      Object.freeze(Config)

      Config.start() // "App has started"
      Config.update() // "App has updated"

    Config.name = "Robert" // We try to add a new key
    console.log(Config) // And verify it doesn't work: { start: [Function: start], update: [Function: update] }

    let instance;let globalState = {color: ""};

class StateUtility {
  constructor() {
    if (instance) {
      throw new Error("New instance cannot be created!!");
    }

    instance = this;
  }

  getPropertyByName(propertyName) {
    return globalState[propertyName];
  }

  setPropertyValue(propertyName, propertyValue) {
    globalState[propertyName] = propertyValue;
  }
}

let stateUtilityInstance = Object.freeze(new StateUtility());

export default stateUtilityInstance;

to talk about singleton pattern in brief:

It is a pattern that restricts the class to create only one instance.
Singleton pattern can be considered the basics of global state management libraries such Redux or React Context.
They can be accessed globally and acts as a single access point for accessing the global state.

------------------------------------------------------------------------------------------------------------------------------------------------------------

  Factory method pattern 

  The Factory method pattern provides an interface for creating objects that can be modified after creation. 
  The cool thing about this is that the logic for creating our objects is centralized in a single place, simplifying and better organizing our code.

  class Alien {
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}

const alien1 = new Alien("Ali", "I'm Ali the alien!")
console.log(alien1.name) // output: "Ali"

  function Alien(name, phrase) {
    this.name = name
    this.phrase = phrase
    this.species = "alien"
}

Alien.prototype.fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
Alien.prototype.sayPhrase = () => console.log(this.phrase)

const alien1 = new Alien("Ali", "I'm Ali the alien!")

console.log(alien1.name) // output "Ali"
console.log(alien1.phrase) // output "I'm Ali the alien!"
alien1.fly() // output "Zzzzzziiiiiinnnnnggggg"

--------------------------------------------------------------------------------------------------------------
Abstract factory pattern
  The Abstract Factory pattern allows us to produce families of related objects without specifying concrete classes.
  The way it works is by presenting an abstract factory the client interacts with. 
  That abstract factory calls the corresponding concrete factory given the corresponding logic. And that concrete factory is the one that returns the end object.
  // We have a class or "concrete factory" for each vehicle type
class Car {
    constructor () {
        this.name = "Car"
        this.wheels = 4
    }
    turnOn = () => console.log("Chacabúm!!")
}

class Truck {
    constructor () {
        this.name = "Truck"
        this.wheels = 8
    }
    turnOn = () => console.log("RRRRRRRRUUUUUUUUUMMMMMMMMMM!!")
}

class Motorcycle {
    constructor () {
        this.name = "Motorcycle"
        this.wheels = 2
    }
    turnOn = () => console.log("sssssssssssssssssssssssssssssshhhhhhhhhhham!!")
}

// And and abstract factory that works as a single point of interaction for our clients
// Given the type parameter it receives, it will call the corresponding concrete factory
const vehicleFactory = {
    createVehicle: function (type) {
        switch (type) {
            case "car":
                return new Car()
            case "truck":
                return new Truck()
            case "motorcycle":
                return new Motorcycle()
            default:
                return null
        }
    }
}

const car = vehicleFactory.createVehicle("car") // Car { turnOn: [Function: turnOn], name: 'Car', wheels: 4 }
const truck = vehicleFactory.createVehicle("truck") // Truck { turnOn: [Function: turnOn], name: 'Truck', wheels: 8 }
const motorcycle = vehicleFactory.createVehicle("motorcycle") // Motorcycle { turnOn: [Function: turnOn], name: 'Motorcycle', wheels: 2 }

  ----------------------------------------------------------------------------------------------------------------------
  Builder Pattern-

  The Builder pattern is used to create objects in "steps".
  Normally we will have functions or methods that add certain properties or methods to our object.
  The cool thing about this pattern is that we separate the creation of properties and methods into different entities.

  // We declare our objects
const bug1 = {
    name: "Buggy McFly",
    phrase: "Your debugger doesn't work with me!"
}

const bug2 = {
    name: "Martiniano Buggland",
    phrase: "Can't touch this! Na na na na..."
}

// These functions take an object as parameter and add a method to them
const addFlyingAbility = obj => {
    obj.fly = () => console.log(`Now ${obj.name} can fly!`)
}

const addSpeechAbility = obj => {
    obj.saySmthg = () => console.log(`${obj.name} walks the walk and talks the talk!`)
}

// Finally we call the builder functions passing the objects as parameters
addFlyingAbility(bug1)
bug1.fly() // output: "Now Buggy McFly can fly!"

addSpeechAbility(bug2)
bug2.saySmthg() // output: "Martiniano Buggland walks the walk and talks the talk!"

  ------------------------------------------------------------------------------------------------------------------
  Prototype pattern

  The Prototype pattern allows you to create an object using another object as a blueprint, inheriting its properties and methods.

    // We declare our prototype object with two methods
const enemy = {
    attack: () => console.log("Pim Pam Pum!"),
    flyAway: () => console.log("Flyyyy like an eagle!")
}

// We declare another object that will inherit from our prototype
const bug1 = {
    name: "Buggy McFly",
    phrase: "Your debugger doesn't work with me!"
}

// With setPrototypeOf we set the prototype of our object
Object.setPrototypeOf(bug1, enemy)
  
