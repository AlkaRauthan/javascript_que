Structural patterns refer to how to assemble objects and classes into larger structure
  -Adapter Pattern
  -Decorator pattern
  -Facade pattern
  -Proxy pattern

  Adapter pattern -
    The Adapter allows two objects with incompatible interfaces to interact with each other.
    Say we have an array of cities and a function that returns the greatest number of habitants any of those cities have.
    The number of habitants in our array is in millions, but we have a new city to add that has its habitants without the million conversion:

  // Our array of cities
const citiesHabitantsInMillions = [
    { city: "London", habitants: 8.9 },
    { city: "Rome", habitants: 2.8 },
    { city: "New york", habitants: 8.8 },
    { city: "Paris", habitants: 2.1 },
] 

// The new city we want to add
const BuenosAires = {
    city: "Buenos Aires",
    habitants: 3100000
}

// Our adapter function takes our city and converts the habitants property to the same format all the other cities have
const toMillionsAdapter = city => { city.habitants = parseFloat((city.habitants/1000000).toFixed(1)) }

toMillionsAdapter(BuenosAires)

// We add the new city to the array
citiesHabitantsInMillions.push(BuenosAires)


  --------------------------------------------------------------------------------------
  Decorator pattern -
  The Decorator pattern lets you attach new behaviors to objects by placing them inside wrapper objects that contain the behaviors.
  Decorator pattern allows a user to add new functionality to an existing object without altering its structure.

  / The constructor to decorate
function MacBook() { 

  this.cost = function () { return 997; }; 
  this.screenSize = function () { return 11.6; }; 

} 

// Decorator 1
function Memory( macbook ) { 

  var v = macbook.cost(); 
  macbook.cost = function() { 
    return v + 75; 
  }; 

} 

// Decorator 2
function Engraving( macbook ){

  var v = macbook.cost(); 
  macbook.cost = function(){
    return  v + 200;
  };

}
 
// Decorator 3
function Insurance( macbook ){

  var v = macbook.cost(); 
  macbook.cost = function(){
     return  v + 250;
  };

}

var mb = new MacBook(); 
Memory( mb ); 
Engraving( mb );
Insurance( mb );

// Outputs: 1522
console.log( mb.cost() );

// Outputs: 11.6
console.log( mb.screenSize() );


--------------------------------------------------------------------------------------------------------------------
  Facade pattern

  
