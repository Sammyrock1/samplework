let scores,roundScores,activePlayer,gamePlaying;

init();


//var x = document.querySelector('#score--0').textcontent;
//document.querySelector('#current--' + activePlayer).textContent = dice;
//document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dices +'</em>';
//document.querySelector('.dice').style.display = 'none'

document.querySelector('.btn--roll').addEventListener('click',function(){
    if(gamePlaying){
       //1. random number
let dice = Math.floor(Math.random()*6)+1;
//2.display the result
let diceDom = document.querySelector('.dice')
diceDom.style.display = 'block';
diceDom.src= './images/dice-' + dice +'.png';
//.update the roumnd score if th rolled number was NOT a 1
if(dice !== 1){
    //add score
    roundScore += dice;
    document.querySelector('#current--' + activePlayer).textContent = roundScore;
}else{
    //next player
    nextPlayer();
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click',function() {
    if(gamePlaying){
        //add CURRENT score to the GLOBAL score
     scores[activePlayer] += roundScore;
     //scores[activeplayer] = scores[activeplayer] + roundscore;
 
     //Update the UI(User interface)
     document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

     //check if player won the game
     if (scores[activePlayer] >= 100 ){
         document.querySelector('#name--' + activePlayer).textContent = 'winner!';
         document.querySelector('.dice').style.display = 'none';
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
    document.querySelector('.dice').style.display = 'none';
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





