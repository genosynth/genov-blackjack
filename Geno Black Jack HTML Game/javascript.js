let deckOfCards = ["AH", "AD", "AS", "AC", "2H", "2D", "2S", "2C", "3H", "3D", "3S", "3C", "4H", "4D", "4S", "4C",
                    "5H", "5D", "5S", "5C", "6H", "6D", "6S", "6C", "7H", "7D", "7S", "7C", "8H", "8D", "8S", "8C",
                    "9H", "9D", "9S", "9C", "10H", "10D", "10S", "10C", "JH", "JD", "JS", "JC", "QH", "QD", "QS", "QC",
                    "KH", "KD", "KS", "KC"]

let remainingCards =[]; //remainingCards is always being updated when specific cards are drawn
let showCard = false;
let myCards = [];
let myTotal;
let hisTotal;
let hisCards = [];
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
    "AH": 1,
    "AD": 1,
    "AS": 1,
    "AC": 1,
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
    
    //myCard1
    let num = Math.floor(Math.random()*52);
    let myCard1 = deckOfCards[num];
    delete deckOfCards[num];
    const deckFiltered = deckOfCards.filter(el => {
        return el != null && el != '';
      });
      //console.log(deckFiltered);
    myCards.push(myCard1);
    //myCard2
    num = Math.floor(Math.random()*51);
    let myCard2 = deckFiltered[num];
    delete deckFiltered[num];

    const deckFiltered1 = deckFiltered.filter(el => {
        return el != null && el != '';
    });
        //console.log(deckFiltered1);
    myCards.push(myCard2);
    //hisCard1
    num = Math.floor(Math.random()*50);
    let hisCard1 = deckFiltered1[num];
    delete deckFiltered1[num];
    const deckFiltered2 = deckFiltered1.filter(el => {
        return el != null && el != '';
      });
      //console.log(deckFiltered2);
    hisCards.push(hisCard1);  
    //myCard2
    num = Math.floor(Math.random()*49);
    let hisCard2 = deckFiltered2[num];
    delete deckFiltered2[num];

    const deckFiltered3 = deckFiltered2.filter(el => {
        return el != null && el != '';
    });
        //console.log(deckFiltered3);
    hisCards.push(hisCard2);
    remainingCards = deckFiltered3;
   
   
    console.log(myCard1);
    console.log(myCard2);
    console.log(hisCard1);
    console.log(hisCard2);
    console.log(deckFiltered3)
    console.log(remainingCards);
    
}

function calcValues(){
    let myValue = 0;
    for (i=0; i<myCards.length; i++){
    
        myValue = myValue + cardValues[myCards[i]];    
    }

    myTotal = myValue;
    console.log("Your Total is " + myTotal);

    let hisValue = 0;
    for (i=0; i<hisCards.length; i++){
        hisValue = hisValue + cardValues[hisCards[i]];

    }
    hisTotal = hisValue;
    console.log("His Total is " + hisTotal);

    

}

   // var yourScore = rpsDatabase[yourChoice][computerChoice];
   // var computerScore = rpsDatabase[computerChoice][yourChoice];

function frontEndCards(){
    document.getElementById("instructions").remove();   
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
    document.getElementById("deal").remove(); //removes the Deal button

    var x = document.getElementById("draw"); //shows the Draw button
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
    x.style.display = "none";
    
    }
    var y = document.getElementById("stand"); //shows the Stand button
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
    y.style.display = "none";
    
    }

    var z = document.getElementById("myresult"); //shows the User's Total
    if (z.style.display === "none") {
        z.style.display = "block";
    } else {
    z.style.display = "none";
    
    }

}


function hitCard(){ //User hits a card
    
    let x = remainingCards.length;
    let num = Math.floor(Math.random()*(x));
    console.log(x);
    
    console.log(cardDatabase[remainingCards[num]]);
    var img = document.createElement("img");
    img.src = cardDatabase[remainingCards[num]];
    var myCard3 = remainingCards[num];
    delete remainingCards[num];
    const remainingCards1 = remainingCards.filter(el => {
        return el != null && el != '';
      });

    remainingCards = remainingCards1;
    console.log(remainingCards);
    var src = document.getElementById("mycards");
    src.appendChild(img);
    myCards.push(myCard3);
    calcValues();
    
    if (myTotal >21){
        document.getElementById("draw").remove();
        document.getElementById("stand").remove();
        document.getElementById("container").innerHTML = "YOU LOOSE" ;
        showReplayButton();
        revealCard();
    }
    if (myTotal === 21){
        document.getElementById("draw").remove();
        document.getElementById("stand").remove();
        document.getElementById("container").innerHTML = "BLACKJACK! YOU WIN!" ;
        revealCard();    
        showReplayButton();
    }
    showResults();

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
    document.getElementById("draw").remove();
    document.getElementById("stand").remove();
    revealCard();
    calcValues();
    botDecision();   
    


}

function botDecision(){
    while (hisTotal < myTotal && myTotal < 21){
        let x = remainingCards.length;
        let num = Math.floor(Math.random()*(x));
        hisCard3 = remainingCards[num];
        console.log(hisCard3);
        hisCards.push(hisCard3);
        let y = hisCards.length;
        console.log(y);
        hisTotal = hisTotal + cardValues[hisCards[y-1]]; //y-1 instead of y to not get null value since index starts from 0
        console.log(hisTotal)
        delete remainingCards[num];
        remainingCards = remainingCards.filter(el => {
            return el != null && el != '';
          });
    
        //remainingCards = remainingCards1;
        console.log(remainingCards);

        var img = document.createElement("img");
        img.src = cardDatabase[hisCards[y-1]]; 
        var src = document.getElementById("hiscards");
        src.appendChild(img);
        showResults();

    }
    if (hisTotal > 21){
        document.getElementById("container").innerHTML = "YOU WIN" ;
    }
    if (myTotal < 21 && hisTotal > myTotal && hisTotal < 22){
        document.getElementById("container").innerHTML = "YOU LOOSE" ;
    }

    if (myTotal === hisTotal){
        document.getElementById("container").innerHTML = "ITS A TIE" ;
    }
showResults();
showReplayButton();
   
}
function showResults() {
        calcValues();
        console.log("Your Total is " + myTotal);
        console.log("Opponent's Total is " + hisTotal);
        document.getElementById("myresult").innerHTML = "Your Total is: " + myTotal;
        if (showCard === true) {
            document.getElementById("hisresult").innerHTML = "Opponent's Total is : " + hisTotal;
        }
    
    }

function replay() {
    location.reload();
}

function showReplayButton(){
    var a = document.getElementById("replay"); //shows the Replay button
if (a.style.display === "none") {
    a.style.display = "block";
} else {
  a.style.display = "none";
  
}
}

dealCards();
showResults();



  

