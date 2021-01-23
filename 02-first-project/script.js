var scores , activePlayer ,currentScore , winScore , twoSixCheck;

// initialize
init();


// dice
document.querySelector('.dice-1').style.display = 'none';
document.querySelector('.dice-2').style.display = 'none';


document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
document.getElementById('current--0').textContent = 0;
document.getElementById('current--1').textContent = 0;




document.querySelector('.btn--roll').addEventListener('click', function(){
  // roll dice
  var dice1 = Math.floor(Math.random()*6 +1);
  var dice2 = Math.floor(Math.random()*6 +1);

  // display
  document.querySelector('.dice-1').style.display = 'block';
  document.querySelector('.dice-2').style.display = 'block';

  document.querySelector('.dice-1').src = 'dice-'+ dice1 + '.png';
  document.querySelector('.dice-2').src = 'dice-'+ dice2 + '.png';

  // two sixes in a row on both dies

  // move earlier values to pos 0 and 2
  twoSixCheck.dice1.oldValue = twoSixCheck.dice1.newValue;
  twoSixCheck.dice2.oldValue = twoSixCheck.dice2.newValue;

  // add new values to pos 1 and 3
  twoSixCheck.dice1.newValue = dice1;
  twoSixCheck.dice2.newValue = dice2;

  // two sixes in a row on both dies
  if (twoSixCheck.dice1.oldValue === twoSixCheck.dice1.newValue === 6
    && twoSixCheck.dice2.oldValue === twoSixCheck.dice2.newValue ===6){
      // nextPlayer
      nextPlayer();
   }
  // update to score if not 1
  else if ((dice1 || dice2)!== 1){
    // add to round score
    roundScore += dice1 + dice2;
    document.querySelector('#current--'+ activePlayer).textContent = roundScore;
  }else{
    // next plater
  nextPlayer();
  }
});

document.querySelector('.btn--hold').addEventListener('click', function(){
    // add to global scores
    scores[activePlayer] += roundScore;

    // display scores
    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];


    // winner
    if (scores[activePlayer] >= winScore ){
      document.getElementById('name--' + activePlayer).textContent = 'Winner!!'

      // hide button after winning
      document.querySelector('.btn--hold').style.display = 'none';
      document.querySelector('.btn--roll').style.display = 'none';

    }else{
      // toggle player
      nextPlayer();

    }

});

document.querySelector('.btn--new').addEventListener('click', init);

function init(){


  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  twoSixCheck={
    dice1 : {
      oldValue : 0,
      newValue : 0
    },
    dice2 : {
      oldValue :0,
      newValue :0
      }
  };

  document.getElementById('name--0').textContent = 'PLAYER 1';
  document.getElementById('name--1').textContent = 'PLAYER 2';
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  document.querySelector('.btn--hold').style.display = 'block';
  document.querySelector('.btn--roll').style.display = 'block';



}

function nextPlayer(){

  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  document.querySelector('.player--0').classList.toggle('player--active')
  document.querySelector('.player--1').classList.toggle('player--active')
};

function getInputValue(){
           // Selecting the input element and get its value
            winScore = document.getElementById("winScore").value;

            // displaying winScore
            document.querySelector(".winScore-value").textContent = winScore;
            }
