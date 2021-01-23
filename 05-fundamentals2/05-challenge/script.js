"use strict";


let john = {
  firstName : 'John',
  lastName : 'Smith',
  weight : 78,
  height : 1.69 ,
  calBmi : function(){
    return this.bmi = this.weight / (this.height*this.height);
  }
}

let mark =  {
  firstName : 'Mark',
  lastName : 'Miller',
  weight : 92,
  height : 1.95 ,
  calBmi : function(){
    return this.bmi = this.weight / (this.height*this.height);
  }
}

john.calBmi();
mark.calBmi();

if(john.bmi > mark.bmi){
  console.log(`${john.firstName} ${john.lastName}'s BMI (${Math.floor(john.bmi)}) is higher than ${mark.firstName} ${mark.lastName}'s BMI (${Math.floor(mark.bmi)})`)
}
else{
  console.log(`${mark.firstName} ${mark.lastName}'s BMI (${Math.floor(mark.bmi)}) is higher than ${john.firstName} ${john.lastName}'s BMI (${Math.floor(john.bmi)})`)
}
