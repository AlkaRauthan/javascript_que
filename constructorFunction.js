
function Student(firstName,lastName,age){
    this.name = name;
    this.age = age;
    var fullName = firstName + lastName; // private variable


    this.getFullName = function(){
        return fullName;
    }

    var getSubject = function(){
        return "any"
    }
    
    getSubjectNew = function(){
        return "new"
    }
}

Student.prototype.getSubjectWithName = function(){
    return this.getFullName() + " of any class";
}


var a = new Student("A","B",44);
/* console.log(a.getFullName()); //"AB"
console.log(a.getSubject()); // will not work as private variable
console.log(a.getSubjectNew()); //will not work as global variable 
console.log(getSubjectNew()); // print new as it is been declared as global variable */

console.log(a.getSubjectWithName()); //"AB"
