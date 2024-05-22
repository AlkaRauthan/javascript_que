it is a technique for converting function calls with multiple arguments into chains of function calls with a single argument for each call,
but JavaScript supports multiple arguments in a single function call.
    
function multiply(a, b, c) {

    return a * b * c;
}

function curry(func) {

  return function curried(...args) {

    console.log(args);

    if (args.length >= func.length) {

      return func.apply(this, args);
    } else {

      console.log('calling else');

      return function(...args2) {
        
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

let curried = curry(multiply);

console.log(curried(1, 2, 3));  
console.log(curried(1)(2, 3));   
console.log(curried(1)(2)(3));  


function sum(a,b){
    return a+b
}

function multiply(a,b){
    return a*b
}

function operation(fn){
    return function(a){
        return function(b){
            fn(a,b)
        }
    }
}

operation(sum)(1)(2) 
operatin(multiply)(5)(5)

real use-
    const mult100 = operation(multiply)(100);
   mult100(5) // became configurable function which will multiple argument passed into it will be multiplied by 100
