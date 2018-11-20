/*
 * Create a list that holds all of your cards
 */


const listCards = document.querySelectorAll('.fa');
cardArray = Array.from(listCards);
let shuffleCards  = shuffle(cardArray.slice(4,listCards.length));

listCards.forEach(function(cv,ci){
    if(ci>3){cv.remove(), this}});



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
const listAddCard = document.querySelectorAll('.card');
const moveElem = document.querySelector('.moves');

for(i=0; i<listAddCard.length; i++){
	
	listAddCard.item(i).appendChild(shuffleCards[i]);
    if(i>0){
        if(shuffleCards[i].classList.value === shuffleCards[0].classList.value){
            listAddCard.item(i).classList.add('match');
        }
    }
    else listAddCard.item(i).classList.add('match'); 
}
let turnCheck = 0;
let cardChecker = '';
let prevCard = '';
let moves = 3;

let matchCheck = function(evtObj){
  funcShow(evtObj);  
  console.log(turnCheck);
     if(turnCheck===1){
        setTimeout(function(){}, 1000);
        if(evtObj.target.innerHTML===cardChecker){
            evtObj.target.classList.add('match');
            prevCard.classList.add('match');
        }
        else{

            alert('No match');
        }
        funcRemove(prevCard, evtObj);
        turnCheck = 0;
        cardChecker = '';
        prevCard = '';
        moves++;
        moveElem.innerHTML = moves;
        return;
     }
     prevCard = evtObj.target;
     cardChecker = evtObj.target.innerHTML;
     turnCheck++;
 }

 let funcShow = function(e){
    e.target.classList.add('open', 'show');
    console.log('funcShow');
 }

const cardDeck = document.querySelectorAll('.card');
 for(var i=0;i<cardDeck.length;i++){
     cardDeck[i].addEventListener('click', matchCheck);
    }

let funcRemove = function (p1,p2){

        setTimeout(function(){}, 1000);    
        p1.classList.remove('open', 'show');
        p2.target.classList.remove('open', 'show');
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

 // * set up the event listener for a card. If a card is clicked:
 // *  - display the card's symbol (put this functionality in another function that you call from this one)
 // *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 // *  - if the list already has another card, check to see if the two cards match
 // *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 // *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 // *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 // *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 // */

// Reload the page

const reloadBtn = document.querySelector('.fa-repeat');
reloadBtn.addEventListener('click', function(){location.reload();});





 
