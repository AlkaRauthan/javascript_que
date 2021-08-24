class Pet {
  legs = 4;

  constructor(sound) {
    this.sound = sound;
  }
}

const cat = new Pet('Moew!');

cat.legs;           // => 4
cat instanceof Pet; // => true
and create a cat when instantiating the class.

The secret is that class syntax in JavaScript is syntactic sugar on top of prototypal inheritance.

The above class-based code snippet is equivalent to the following:

const pet = {
  legs: 4
};

function CreatePet(sound) {
  return { sound, __proto__: pet };
}
CreatePet.prototype = pet;

const cat = CreatePet('Moew!');

cat.legs;                 // => 4
cat instanceof CreatePet; // => true
CreatePet.prototype = pet assignment is necessary to make cat instanceof CreatePet evaluate to true.
