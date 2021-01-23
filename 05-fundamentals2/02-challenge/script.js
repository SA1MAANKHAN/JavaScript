"use strict";


let bills = [125 ,555 , 44]
let tips = new Array;
let total = new Array;

// calculates tips
function calTips(bill){
  if(50 <= bill <= 300){
    return bill * .15
  }
  return bill*.2
}

tips.push(calTips(bills[0]));
tips.push(calTips(bills[1]));
tips.push(calTips(bills[2]));


total.push(bills[0] + calTips(bills[0]));
total.push(bills[1] + calTips(bills[1]));
total.push(bills[2] + calTips(bills[2]));

console.log(`bills: ${bills}`);
console.log(`tips: ${tips}`)
console.log(`total ftkka : ${total}`)
