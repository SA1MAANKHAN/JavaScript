"use strict";


let jonas = {
  firstName : "Jonas",
  lastName : "Something",
  birthYear : 1991 ,
  friends : ['Michael' , 'Jon', 'Sam' , 'Tim'],
  location : 'Portugal',
  job : 'Teacher',
  calAge : function(){ this.age =  2020 - this.birthYear} ,
  hasDriversLiscence : false,
}

jonas.calAge();

console.log(`${jonas.firstName} is ${jonas.age} year old
  and has ${jonas.friends.length} friends and
  his best firend is called ${jonas.friends[0]}. He also has ${driverLiscence(jonas.hasDriversLiscence)} drivers liscence.`)

  function driverLiscence(license){
    if(license){
      return 'a'
    }
    return 'no'
  }
