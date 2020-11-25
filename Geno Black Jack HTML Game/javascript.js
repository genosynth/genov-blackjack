let wins = 0;
let draws = 0;
let losses = 0;
let remainingCards =[]; //remainingCards is always being updated when specific cards are drawn
let showCard = false;
let myCards = [];
let myTotal;
let hisTotal;
let hisCards = [];
let deal = true;
let hit,standAct = false;
var cardDatabase = {
    "AH": "./Pictures/AceHearts.png",
    "AD": "./Pictures/AceDiamonds.png",
    "AS": "./Pictures/AceSpades.png",
    "AC": "./Pictures/AceClubs.png",
    "2H": "./Pictures/2Hearts.png",
    "2D": "./Pictures/2Diamonds.png",
    "2S": "./Pictures/2Spades.png",
    "2C": "./Pictures/2Clubs.png",
    "3H": "./Pictures/3Hearts.png",
    "3D": "./Pictures/3Diamonds.png",
    "3S": "./Pictures/3Spades.png",
    "3C": "./Pictures/3Clubs.png",
    "4H": "./Pictures/4Hearts.png",
    "4D": "./Pictures/4Diamonds.png",
    "4S": "./Pictures/4Spades.png",
    "4C": "./Pictures/4Clubs.png",
    "5H": "./Pictures/5Hearts.png",
    "5D": "./Pictures/5Diamonds.png",
    "5S": "./Pictures/5Spades.png",
    "5C": "./Pictures/5Clubs.png",
    "6H": "./Pictures/6Hearts.png",
    "6D": "./Pictures/6Diamonds.png",
    "6S": "./Pictures/6Spades.png",
    "6C": "./Pictures/6Clubs.png",
    "7H": "./Pictures/7Hearts.png",
    "7D": "./Pictures/7Diamonds.png",
    "7S": "./Pictures/7Spades.png",
    "7C": "./Pictures/7Clubs.png",
    "8H": "./Pictures/8Hearts.png",
    "8D": "./Pictures/8Diamonds.png",
    "8S": "./Pictures/8Spades.png",
    "8C": "./Pictures/8Clubs.png",
    "9H": "./Pictures/9Hearts.png",
    "9D": "./Pictures/9Diamonds.png",
    "9S": "./Pictures/9Spades.png",
    "9C": "./Pictures/9Clubs.png",
    "10H": "./Pictures/10Hearts.png",
    "10D": "./Pictures/10Diamonds.png",
    "10S": "./Pictures/10Spades.png",
    "10C": "./Pictures/10Clubs.png",
    "JH": "./Pictures/JHearts.png",
    "JD": "./Pictures/JDiamonds.png",
    "JS": "./Pictures/JSpades.png",
    "JC": "./Pictures/JClubs.png",
    "QH": "./Pictures/QHearts.png",
    "QD": "./Pictures/QDiamonds.png",
    "QS": "./Pictures/QSpades.png",
    "QC": "./Pictures/QClubs.png",
    "KH": "./Pictures/KHearts.png",
    "KD": "./Pictures/KDiamonds.png",
    "KS": "./Pictures/KSpades.png",
    "KC": "./Pictures/KClubs.png",
    }
  
var cardValues = {
    "AH": 11,
    "AD": 11,
    "AS": 11,
    "AC": 11,
    "2H": 2,
    "2D": 2,
    "2S": 2,
    "2C": 2,
    "3H": 3,
    "3D": 3,
    "3S": 3,
    "3C": 3,
    "4H": 4,
    "4D": 4,
    "4S": 4,
    "4C": 4,
    "5H": 5,
    "5D": 5,
    "5S": 5,
    "5C": 5,
    "6H": 6,
    "6D": 6,
    "6S": 6,
    "6C": 6,
    "7H": 7,
    "7D": 7,
    "7S": 7,
    "7C": 7,
    "8H": 8,
    "8D": 8,
    "8S": 8,
    "8C": 8,
    "9H": 9,
    "9D": 9,
    "9S": 9,
    "9C": 9,
    "10H": 10,
    "10D": 10,
    "10S": 10,
    "10C": 10,
    "JH": 10,
    "JD": 10,
    "JS": 10,
    "JC": 10,
    "QH": 10,
    "QD": 10,
    "QS": 10,
    "QC": 10,
    "KH": 10,
    "KD": 10,
    "KS": 10,
    "KC": 10,

}
function dealCards(){
    

    deckOfCards = Object.keys(cardValues); //creates an array with all cards 
    //myCard1
    let num = Math.floor(Math.random()*52);
    
    let myCard1 = deckOfCards[num]; 
    
    //console.log(myCard1);
    delete deckOfCards[num];
    //console.log(deckOfCards);
    deckOfCards = deckOfCards.filter(el => {
        return el != null && el != '';
      });
      //console.log(deckOfCards);
    myCards.push(myCard1);
    
    //myCard2
    num = Math.floor(Math.random()*51);
    let myCard2 = deckOfCards[num];
    delete deckOfCards[num];

    deckOfCards = deckOfCards.filter(el => {
        return el != null && el != '';
    });
        //console.log(deckFiltered1);
    myCards.push(myCard2);

    //hisCard1
    num = Math.floor(Math.random()*50);
    let hisCard1 = deckOfCards[num];
    delete deckOfCards[num];
    deckOfCards = deckOfCards.filter(el => {
        return el != null && el != '';
      });
      //console.log(deckFiltered2);
    hisCards.push(hisCard1);  

    //myCard2
    num = Math.floor(Math.random()*49);
    let hisCard2 = deckOfCards[num];
    delete deckOfCards[num];

    deckOfCards = deckOfCards.filter(el => {
        return el != null && el != '';
    });
        //console.log(deckFiltered3);
    hisCards.push(hisCard2);
    remainingCards = deckOfCards;
   
   
    /* 
    console.log(myCard1);
    console.log(myCard2);
    console.log(hisCard1);
    console.log(hisCard2);
    console.log(remainingCards);
    */
}

function checkMyAce(){

    for (i=0; i<myCards.length; i++){
        
        
        if (myCards[i].charAt(0) === 'A'){
        //myAces = myAces + 1;
        cardValues[myCards[i]] = 1;
            
        //myCards[i].charAt(0) = 'U'

        console.log(cardValues[myCards[i]])
                
        }
        /* if (myAces >= 2){
            
        }
        */
    }
       
}

function checkHisAce(){

    if (hisTotal>21){
        let myAces = 0;
        for (i=0; i<hisCards.length; i++){
            
            
            if (hisCards[i].charAt(0) === 'A'){
            
            cardValues[hisCards[i]] = 1;
                        

            //console.log(cardValues[hisCards[i]])
            
            }
            
            
        }
    }   
    calcValues();
    showHisResults();
}


function calcValues(){
    let myValue = 0;
    for (i=0; i<myCards.length; i++){
        
        myValue = myValue + cardValues[myCards[i]];    
    }
    
    myTotal = myValue;
    //console.log("Your Total is " + myTotal);

    let hisValue = 0;
    for (i=0; i<hisCards.length; i++){
        hisValue = hisValue + cardValues[hisCards[i]];

    }
    hisTotal = hisValue;
    //console.log("His Total is " + hisTotal);

   
    

}


function frontEndCards(){

    if (deal === true)  {  
        hit = true;
        standAct = true;
        dealCards();
        
            
        for (let i=0; i<2; i++){  //Displaying my 2 Cards
            var img = document.createElement("img"); 
            
            img.src = cardDatabase[myCards[i]]; 
            var src = document.getElementById("mycards"); 
            
            src.appendChild(img); 
        }

        for (let i=0; i<1; i++){ //Displaying his 2 Cards
            var img = document.createElement("img");
            img.src = cardDatabase[hisCards[i]];
            var src = document.getElementById("hiscards");
            src.appendChild(img);
        }

        var img = document.createElement("img");
        img.src = "./Pictures/BackCard.png";
        var src = document.getElementById("hiscards");
        src.appendChild(img);
        showMyResults();
        deal = false;
        calcValues();
        if (myTotal === 21){
            document.getElementById("container").innerHTML = "YOU GOT BLACKJACK" ;
            standAct = true;
            deal = false;
            stand();
            showScore();
        }
    
    }

   
}


function hitCard(){ //User hits a card
    if (hit === true){   
        let x = remainingCards.length;
        let num = Math.floor(Math.random()*(x));
        //console.log(x);
        
        //console.log(cardDatabase[remainingCards[num]]);
        var img = document.createElement("img");
        img.src = cardDatabase[remainingCards[num]];
        var newCard = remainingCards[num];
        delete remainingCards[num];
        const remainingCards1 = remainingCards.filter(el => {
            return el != null && el != '';
        });

        remainingCards = remainingCards1;
        //console.log(remainingCards);
        var src = document.getElementById("mycards");
        src.appendChild(img);
        myCards.push(newCard);
        calcValues(); 
        if (myTotal>21){  //Checking Ace and updating your value
            checkMyAce(); 
            calcValues(); 
            showMyResults()
        } 
        if (myTotal >21){
            
            
            document.getElementById("container").innerHTML = "YOU LOOSE" ;
            losses = losses + 1;
            hit = false;
            standAct = false;
            showHisResults();
            revealCard();
        }
        if (myTotal === 21){
            revealCard();
            botDecision();
            showHisResults();

            //document.getElementById("container").innerHTML = "BLACKJACK! YOU WIN!" ;
            //wins = wins + 1;
            deal = false;
            hit = false;
            standAct = false;
            //revealCard();    
            
        }
        showMyResults();
        
        showScore();
        deal = false;
    }
}

function revealCard(){
    let hisMenu = document.getElementById('hiscards');
    hisMenu.removeChild(hisMenu.lastElementChild);
    var img = document.createElement("img");
    img.src = cardDatabase[hisCards[1]];
    var src = document.getElementById("hiscards");
    src.appendChild(img);
    showCard = true;

}

function stand(){

    if (standAct === true){    
        revealCard();
        calcValues();
        showHisResults();
        botDecision();   
        showHisResults();
        standAct = false;
        hit = false;
    }
    


}

function botDecision(){
    while (hisTotal < myTotal && myTotal <= 21){
        let x = remainingCards.length;
        let num = Math.floor(Math.random()*(x));
        hisCard3 = remainingCards[num];
        //console.log(hisCard3);
        hisCards.push(hisCard3);
        let y = hisCards.length;
        //console.log(y);
        hisTotal = hisTotal + cardValues[hisCards[y-1]]; //y-1 instead of y to not get null value since index starts from 0
        //console.log(hisTotal)
        delete remainingCards[num];
        remainingCards = remainingCards.filter(el => {
            return el != null && el != '';
          });
    
       
        //console.log(remainingCards);

        var img = document.createElement("img");
        img.src = cardDatabase[hisCards[y-1]]; 
        var src = document.getElementById("hiscards");
        src.appendChild(img);
        showMyResults();
        checkHisAce();
    }

    
    
    if (hisTotal > 21){
        document.getElementById("container").innerHTML = "YOU WIN" ;
        wins = wins + 1;
    }
    if (myTotal < 21 && hisTotal > myTotal && hisTotal < 22){
        document.getElementById("container").innerHTML = "YOU LOOSE" ;
        losses = losses + 1;
        
    }

    if (myTotal === hisTotal){
        document.getElementById("container").innerHTML = "ITS A TIE" ;
        draws = draws + 1;
    }
    deal = false;
    showScore();
    
   
}
function showMyResults() {
        calcValues();
        //console.log("Your Total is " + myTotal);
        
        document.getElementById("myresult").innerHTML = "Your Total is : " + myTotal;
        
    }

    function showHisResults() {
        calcValues();
        //console.log("Opponent's Total is " + hisTotal);
        
        document.getElementById("hisresult").innerHTML = "Opponent's Total is : " + hisTotal;
        if (showCard === true) {
            document.getElementById("hisresult").innerHTML = "Opponent's Total is : " + hisTotal;
        }
       
    }

function replay() {
    //location.reload();
    remainingCards =[]; //remainingCards is always being updated when specific cards are drawn
    showCard = false;
    myCards = [];
    myTotal = 0;
    hisTotal = 0;
    hisCards = [];
    
    cardValues["AH"] = 11;
    cardValues["AC"]= 11;
    cardValues["AS"] = 11;
    cardValues["AD"] = 11;

    deal = true;
    hit = false;
    standAct = false;
    document.getElementById("hisresult").innerHTML = "" ;
    document.getElementById("myresult").innerHTML = "" ;
    document.getElementById("hiscards").innerHTML = "";
    document.getElementById("mycards").innerHTML = "";
    document.getElementById("container").innerHTML = "" ;
       


}

function showScore(){

    document.getElementById("wins").innerHTML = wins ;
    document.getElementById("draws").innerHTML = draws ;
    document.getElementById("losses").innerHTML = losses ;
}


/*
function checkBJ(){ 
    if (myTotal === 21){
           
        document.getElementById("container").innerHTML = "BLACKJACK! YOU WIN!" ;
        wins = wins + 1;
        hit = false;
        standAct = false;
        revealCard();    
        
    }
    showMyResults();
    showScore();
}

function showHideButton(x){    
    var a = document.getElementById(x); 
if (a.style.display === "none") {
    a.style.display = "block";
} else {
  a.style.display = "none";
  
    }
}

*/


  

