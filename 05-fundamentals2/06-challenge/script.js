"use strict";

let bills = [125, 555, 44, 45, 23 ,67, 2214, 242, 86, 90]
let tips = new Array;
let total = new Array;


for (let i = 0; i < bills.length; i++){
  tips.push(calTips(bills[i]))
  total.push(bills[i] + calTips(bills[i]))
}

console.log(`bills: ${bills}`);
console.log(`tips: ${tips}`)
console.log(`total ftkka : ${total}`)
averageBill(total);

// calculates tips
function calTips(bill){
  if(50 <= bill <= 300){
    return bill * .15
  }
  return bill*.2
}

function averageBill(array){
  let sum = 0;
  for(let i = 0; i< array.length ;i++){
  sum += array[i];
  }
  console.log("the average bill is: $" + sum/array.length)
}
