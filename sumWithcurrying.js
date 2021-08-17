function sum (...args) {
  let s = args.reduce((a,b)=>a+b)

   return function (...x) {
     return x.length == 0 ? s : sum(s, ...x)
    };
}

console.log(sum(1,2)(2,3,4)(2)())\

function sum(x){
  return function(y){
    return function(z){
        return x+y+z;
      }
    }
}

var r = sum(1)(2)(3);
console.log(r);

function add(...args1){
  return function(...args2){
    return function(...args3){
      return args1.concat(args2).concat(args3).reduce((a,b)=>a+b)}}}

console.log(add(1)(2)(3))
console.log(add(1,2)(3,4)(5))

function curry(fn){
  return function(a){
    return function(b){
      return fn(a,b)
    }
  }
}

function addition(a,b){
  return a +b ;
}
let curriedSum = curry(addition);
let result = curriedSum(1)(2)
console.log(result);
