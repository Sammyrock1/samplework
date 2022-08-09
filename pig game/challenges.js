let scores,roundScores,activePlayer,gamePlaying;

init();
let lastDice;

//var x = document.querySelector('#score--0').textcontent;
//document.querySelector('#current--' + activePlayer).textContent = dice;
//document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dices +'</em>';
//document.querySelector('.dice').style.display = 'none'

document.querySelector('.btn--roll').addEventListener('click',function(){
    if(gamePlaying){
       //1. random number
let dice1 = Math.floor(Math.random()*6)+1;
let dice2 = Math.floor(Math.random()*6)+1;
//2.display the result
document.getElementById('dice-1').style.display = 'block';
document.getElementById('dice-2').style.display = 'block';
document.getElementById('dice-1').src= './images/dice-' + dice1 +'.png';
document.getElementById('dice-2').src= './images/dice-' + dice2 +'.png';

//.update the roumnd score if th rolled number was NOT a 1
if(dice1 !== 1 && dice2 !==  1){
    //add score
    roundScore += dice1;
    roundScores += dice2;
    document.querySelector('#current--' + activePlayer).textContent = roundScore;
}else{
    //next player
    nextPlayer();
    }
/*
if(dice === 6 && lastDice ===6){

    //player looses the score
    scores[activePlayer] = 0;
    document.querySelector('#score--' + activePlayer).textContent = '0';
    nextPlayer();
}else if(dice !== 1){
    //add score
    roundScore += dice;
    document.querySelector('#current--' + activePlayer).textContent = roundScore;
}else{
    //next player
    nextPlayer();
    }
    lastDice = dice;
    */
  }
});

document.querySelector('.btn--hold').addEventListener('click',function() {
    if(gamePlaying){
        //add CURRENT score to the GLOBAL score
     scores[activePlayer] += roundScore;
     //scores[activeplayer] = scores[activeplayer] + roundscore;
 
     //Update the UI(User interface)
     document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

     let input = document.querySelector('.final-score').value;
     let winningScore;
     //undefine,null,0 or " " COERCED to true
     //anything else is COERCED to true
     if(input){
        winningScore = input;
     }else{
        winningScore = 100;
     }
    

     //check if player won the game
     if (scores[activePlayer] >= winningScore){
         document.querySelector('#name--' + activePlayer).textContent = 'winner!';
         document.getElementById('dice-1').style.display = 'none';
         document.getElementById('dice-2').style.display = 'none';
         /*document.querySelector('.player--0' + activePlayer + 'player--0').classList.add('Winner');
         document.querySelector('.player--1' + activePlayer + 'player--1').classList.remove('player--active');*/
         gamePlaying = false ;
     }else{
     //nextplayer
     nextPlayer();}
     }
});
function nextPlayer(){
    //nextplayer
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //   if (activePlayer === 0){
//      activePlayer = 1;
//    }else{
//       activePlayer = 0; }
    roundScore = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
 //document.querySelector('.player player--0').classList.remove('player player--0');
 // document.querySelector('.player player--1').classList.add('active');
 document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click',init);
function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('score--0').textContent = '0';
     document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.getElementById('name--0').textContent = 'player 1';
    document.getElementById('name--1').textContent = 'player 2';
    document.querySelector('.player--0').classList.remove('Winner');
    document.querySelector('.player--1').classList.remove('Winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');


}