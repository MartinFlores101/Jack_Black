/*

    T de trebol
    E de espadas
    D de diamente
    C de corazon

*/

function Card (type, value) {
    this.type = type;
    this.value = value;
    if (this.value>=11 && this.value<=13) {
        this.vreal = 10;
    } else {
        this.vreal = this.value;
    }
};

DECK = [
    /*new Card('D', 1),*/ new Card('D', 2), new Card('D', 3), new Card('D', 4), new Card('D', 5),
    new Card('D', 6), new Card('D', 7), new Card('D', 8), new Card('D', 9), new Card('D', 10),
    new Card('D', 11), new Card('D', 12), new Card('D', 13),

    /*new Card('C', 1),*/ new Card('C', 2), new Card('C', 3), new Card('C', 4), new Card('C', 5),
    new Card('C', 6), new Card('C', 7), new Card('C', 8), new Card('C', 9), new Card('C', 10),
    new Card('C', 11), new Card('C', 12), new Card('C', 13),

    /*new Card('S', 1),*/ new Card('S', 2), new Card('S', 3), new Card('S', 4), new Card('S', 5),
    new Card('S', 6), new Card('S', 7), new Card('S', 8), new Card('S', 9), new Card('S', 10),
    new Card('S', 11), new Card('S', 12), new Card('S', 13),

    /*new Card('H', 1),*/ new Card('H', 2), new Card('H', 3), new Card('H', 4), new Card('H', 5),
    new Card('H', 6), new Card('H', 7), new Card('H', 8), new Card('H', 9), new Card('H', 10),
    new Card('H', 11), new Card('H', 12), new Card('H', 13),
];

DEALER_HAND = [];
USER_HAND = [];

function reborujarDeck() {
    DECK = DECK.sort( function () {
        return Math.random()-0.5
    });

    /*DECK.forEach(card => {
        console.log(card)
    });*/
}

// NITRAM101

// JOHNSALAS8
function getSum(hand) {
    var sum = 0;
    hand.forEach(card => {
        if (card.value>=11 && card.value<=13) {
            sum += 10;
        } else { // faltaria hacerlo para los aces
            sum += card.vreal;
        }
    });
    return sum;
}

function isBlackJack(hand) {
    if (hand.length==2) {
        if (hand[0].value>=12 && hand[0].value<=13
            && hand[1].value==11) {
                return true;
            } else if (hand[1].value>=12 && hand[1].value<=13
            && hand[0].value==11) {
                return true;
            } else {
                return false;
            }
    } else {
        return false;
    }
}

function dealOut () {
    reborujarDeck();
    var hd = document.getElementById('handdealer');
    var hu = document.getElementById('cardsuser');

    var t = DECK.length-1;
    DEALER_HAND.push (
        DECK[t]
    );
    DECK.pop();
    hd.innerHTML += '<img style="height:114px;weight:22px;" src="../Card/'+
        (DEALER_HAND[0].value) + '' + DEALER_HAND[0].type +'.png">';
    
    t = DECK.length-1;
    USER_HAND.push (
        DECK[t]
    )
    DECK.pop();
    hu.innerHTML += '<img style="height:114px;weight:22px;" src="../Card/'+
        (USER_HAND[0].value) + '' + USER_HAND[0].type +'.png">';
    
    t = DECK.length-1;
    USER_HAND.push (
        DECK[t]
    )
    DECK.pop();
    hu.innerHTML += '<img style="height:114px;weight:22px;" src="../Card/'+
        (USER_HAND[1].value) + '' + USER_HAND[1].type +'.png">';

    t = DECK.length-1;
    DEALER_HAND.push (
        DECK[t]
    );
    DECK.pop();
    hd.innerHTML += '<img style="height:114px;weight:22px;" src="../Card/back.png">';
}