"use strict";
//arrow function to calculate the average
let calAvg = scores => ( scores.one + scores.two + scores.three ) / 3;

const teamDolphins = {
  one: 85 ,
  two: 54 ,
  three: 41 ,
}


const teamKoalas = {
  one: 23 ,
  two: 34 ,
  three: 27 ,
}

let testData = {
     one: 5,
     two: 5,
    three: 35,

};

function checkWinner(team1Score , team2Score){
    if(team1Score > 2*team2Score){
      console.log(`winner is team Dolphins with an average score of ${team1Score} `)
    }else if( team2Score > 2*team1Score) {
      console.log(`winner is team Koalas with an average score of ${team2Score} `)
    }else{
      console.log("no team Wins , better luck next time ")
    }
}

checkWinner(calAvg(teamDolphins), calAvg(teamKoalas));
