/*

    T de trebol
    E de espadas
    D de diamente
    C de corazon

*/

var hd ;
var hu ;
var t;
var sumU=0;
var sumD=0;
var globi=0;

function Card (type, value, up=true) {
    this.type = type;
    this.value = value;
    this.up = up;
    if (this.value>=11 && this.value<=13) {
        this.vreal = 10;
    } else {
        this.vreal = this.value;
    }
};

DECK = [
    new Card('D', 1), new Card('D', 2), new Card('D', 3), new Card('D', 4), new Card('D', 5),
    new Card('D', 6), new Card('D', 7), new Card('D', 8), new Card('D', 9), new Card('D', 10),
    new Card('D', 11), new Card('D', 12), new Card('D', 13),

    new Card('C', 1), new Card('C', 2), new Card('C', 3), new Card('C', 4), new Card('C', 5),
    new Card('C', 6), new Card('C', 7), new Card('C', 8), new Card('C', 9), new Card('C', 10),
    new Card('C', 11), new Card('C', 12), new Card('C', 13),

    new Card('S', 1), new Card('S', 2), new Card('S', 3), new Card('S', 4), new Card('S', 5),
    new Card('S', 6), new Card('S', 7), new Card('S', 8), new Card('S', 9), new Card('S', 10),
    new Card('S', 11), new Card('S', 12), new Card('S', 13),

    new Card('H', 1), new Card('H', 2), new Card('H', 3), new Card('H', 4), new Card('H', 5),
    new Card('H', 6), new Card('H', 7), new Card('H', 8), new Card('H', 9), new Card('H', 10),
    new Card('H', 11), new Card('H', 12), new Card('H', 13),
];

DEALER_HAND = [];
USER_HAND = [];

function reborujarDeck() {
    DECK = DECK.sort( function () {
        return Math.random()-0.5
    });

}

// NITRAM101
function robarUsuario(){
    userHandCont=USER_HAND.length;
    
    hu = document.getElementById('cardsuser');
    
    t = DECK.length-1;
    
    USER_HAND.push (
        DECK[t]
    )
    DECK.pop();
    hu.innerHTML += '<img style="height:114px;weight:22px;" src="../Card/'+
        (USER_HAND[userHandCont].value) + '' + USER_HAND[userHandCont].type +'.png">';    
       
    getSumU();
        
}

function robarDealer(){
    dealerHandCont=DEALER_HAND.length;
    hd = document.getElementById('handdealer');
    t = DECK.length-1;
    DEALER_HAND.push (
        DECK[t]
    );

    DECK.pop();
    hd.innerHTML += '<img class="carddealer" style="height:114px;weight:22px;" src="../Card/'+
        (DEALER_HAND[dealerHandCont].value) + '' + DEALER_HAND[dealerHandCont].type +'.png">';
    
    //alert("Actual: " + DEALER_HAND[dealerHandCont].value);
    getSumD();   
}

function getSumU() {
    userHandCont2=USER_HAND.length;
    if(USER_HAND[userHandCont2-1].value>10){
        sumU=sumU+10;
    }else if(USER_HAND[userHandCont2-1].value==1){
        sumU=sumU+11;
    }
    else{
        sumU=sumU+USER_HAND[userHandCont2-1].value;
    }
    
    //alert("SumaU: " + sumU);
    cuentaUser();
}

function getSumD() {
    userHandCont3=DEALER_HAND.length;
    if(DEALER_HAND[userHandCont3-1].value>10){
        sumD=sumD+10;
    }else if(DEALER_HAND[userHandCont3-1].value==1){
        sumD=sumD+11;
    }
    else{
        sumD=sumD+DEALER_HAND[userHandCont3-1].value;
    }
    
    //alert("SumaD: " + sumD);
    cuentaDealer();
}

function cuentaUser(){
    if(userHandCont2==2 && sumU == 21){
        alert("JACK BLACK Usuario");
        
    }
    if(sumU>21){
        for(i =0;i<userHandCont2;i++){
            //alert("valor i: " + i + " " + USER_HAND[i].value)
            if(USER_HAND[i].value==1){
                USER_HAND[i].value =0;
                sumU=sumU-10;
                //alert("-10 " + sumU);
                break;
            }
        }
        if(sumU>21){
            alert("PIERDES");
        }
        
    }
}

function cuentaDealer(){
    if(userHandCont3==2 && sumD == 21){
        alert("BLACK JACK CASA | pierdes");
    }
    if(sumD>21){
        for(i =0;i<userHandCont3;i++){
            //alert("valor iD: " + i + " " + DEALER_HAND[i].value)
            if(DEALER_HAND[i].value==1){
                DEALER_HAND[i].value =0;
                sumD=sumD-10;
                break;
            }
        }
        if(sumD>21){
            //alert("GANAS DD");
        }
        
    }
}

function mePlanto(){

    console.log(DEALER_HAND);
    var cardd = document.getElementsByClassName('carddealer')
    console.log(cardd);

    for (let i = 0; i < DEALER_HAND.length; i++) {
        if (!DEALER_HAND[i].up) {
            cardd[i].src = '../Card/'+
            (DEALER_HAND[i].value) + '' + DEALER_HAND[i].type +'.png';
            break;
        }
    }

    //alert("ENTRA ");
    //alert("SumaU: " + sumU);
    //alert("SumaD: " + sumD);
    
    while(sumD < sumU && sumD<17 && sumU <22){
        //alert("ENTRA NEW");
        robarDealer();
        
    }
    if(sumU==sumD){
        alert("EMPATE");
    }else if(sumD < sumU || sumD>21){
        alert("GANAS");
    }else{
        alert("PIERDES");
    }
}

// JOHNSALAS8


function dealOut () {
    //location.reload(true);
    reborujarDeck();
    //alert("DEALER_HAND " + DEALER_HAND.length);

    //hd = document.getElementById('handdealer');
    hu = document.getElementById('cardsuser');

    robarDealer();
    
    robarUsuario();
    
    robarUsuario();
      
    t = DECK.length-1;
    DEALER_HAND.push (
        DECK[t]
    );
    DECK.pop();
    hd.innerHTML += '<img class="carddealer" style="height:114px;weight:22px;" src="../Card/back.png">';
    DEALER_HAND[dealerHandCont+1].up = false;
    //alert("Oculta: " + DEALER_HAND[dealerHandCont+1].value);
    getSumD();
}