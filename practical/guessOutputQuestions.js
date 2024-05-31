(true + false) > 2+ true --false

var func = function func(){ console.log(func === func)}; func(); --- true

Number("1") - 1 == 0
-----------------------------------------------------------------------------
// Code 1:

let x= {}, y = {name:"Ronny"},z = {name:"John"};
x[y] = {name:"Vivek"};
x[z] = {name:"Akki"};
console.log(x[y]);

Output will be {name: “Akki”}.

Adding objects as properties of another object should be done carefully.
Writing x[y] = {name:”Vivek”} , is same as writing x[‘object Object’] = {name:”Vivek”} ,
While setting a property of an object, javascript coerces the parameter into a string.
Therefore, since y is an object, it will be converted to ‘object Object’.
Both x[y] and x[z] are referencing the same property.
-------------------------
// Code 2:

function runFunc(){
  console.log("1" + 1); 
  console.log("A" - 1);
  console.log(2 + "-2" + "2");
  console.log("Hello" - "World" + 78);
  console.log("Hello"+ "78");
}
runFunc();

11
Nan
2-22
NaN
Hello78

---------------------------
  
// Code 3:
var x = 23;

(function(){
  var x = 43;
  (function random(){
    x++;
    console.log(x);
    var x = 21;
  })();
})(); 
Answer:

Output is NaN.
  
------------------------------

let hero = {
    powerLevel: 99,
    getPower(){
      return this.powerLevel;
    }
  }
  
  let getPower = hero.getPower;
  
  let hero2 = {powerLevel:42};
  console.log(getPower()); 
  console.log(getPower.apply(hero2));

output: undefined and 42

--------------------------------------------------
  
const a = function(){
    console.log(this);
  
    const b = {
      func1: function(){
        console.log(this);
      }  
    }
  
    const c = {
      func2: ()=>{
        console.log(this);
      }
    }
  
    b.func1();
    c.func2();
  }
  
  a();

Ouputs:
window
object b
window since arrow function

---------------------------------------------------------

  const b = {
    name:"Vivek",
    f: function(){
      var self = this;
      console.log(this.name);
      (function(){
        console.log(this.name);
        console.log(self.name);
      })();
    }
  }
  b.f();

"Vivek"
undefined
"Vivek" 
-----------------------------------------------------
  (function(a){
  return (function(){
    console.log(a);
    a = 23;
  })()
})(45);

outputs 45

----------------------------------------------

  
