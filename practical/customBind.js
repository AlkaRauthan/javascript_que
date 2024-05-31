
function sayHello(){
  return "Hello " + this.name;
}
        
var obj = {name: "Sandy"};
        
sayHello.call(obj);

const info = {
  firstName: "Alka",
  lastName:"Rauthan"
}

const printInfo = function(city,country){
  const usrString = `I am ${this.firstName} ${this.lastName} living in ${city} ${country}`;
  console.log(usrString);
}

Function.prototype.newBind = function(refObject,...args){
  const that = this;
    return function(){
      that.apply(refObject,args);
    }
}

const returningFunction = printInfo.newBind(info,"Rishikesh","India");
returningFunction();
//I am Alka Rauthan living in Rishikesh India

const returningFunction1 = printInfo.newBind(info,"Madurai");
returningFunction1("India");

//I am Alka Rauthan living in Madurai undefined will have to use ...args in inner function as well
