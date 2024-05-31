
const objIntro ={
name:"rahul",
city:"gwalior"}

function sayIntro (company){
console.log(`name is ${this.name}, place is ${this.city} and company is ${company}`)
}
  
Function.prototype.myCall= function (context,...args){
  if(typeof this !=="function"){
    throw new Error(this,"invalid call")
  }
  context.fnc = this;
  context.fnc(...args);
}

sayIntro.myCall(objIntro,"cognizant")

Function.prototype.myApply= function (context,args){
  if(typeof this !=="function"){
  throw new Error(this,"invalid call")
  }
  if(!Array.isArray(args)){
    throw new TypeError("arguments are not in array")
  }
  context.fnc = this;
  context.fnc(...args);
}
sayIntro.myApply(objIntro,["cognizant","gurgaon"])

Function.prototype.myBind= function (context,args){
  if(typeof this !=="function"){
    throw new Error(this,"invalid call")
  }
  context.fnc = this;
  return function (){
    context.fnc(...args);
  }
}
sayIntro.myBind(objIntro,["cognizant","gurgaon"])
