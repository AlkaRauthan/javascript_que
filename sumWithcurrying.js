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
sum(1)(2)(3)
