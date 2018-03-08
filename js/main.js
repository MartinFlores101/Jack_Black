/*

    T de trebol
    E de espadas
    D de diamente
    C de corazon

*/

function Card (type, value) {
    this.type = type;
    this.value = value;
};

DECK = [
    /*new Card('D', 1),*/ new Card('D', 2), new Card('D', 3), new Card('D', 4), new Card('D', 5),
    new Card('D', 6), new Card('D', 7), new Card('D', 8), new Card('D', 9), new Card('D', 10),
    new Card('D', 11), new Card('D', 12), new Card('D', 13),

    /*new Card('T', 1),*/ new Card('T', 2), new Card('T', 3), new Card('T', 4), new Card('T', 5),
    new Card('T', 6), new Card('T', 7), new Card('T', 8), new Card('T', 9), new Card('T', 10),
    new Card('T', 11), new Card('T', 12), new Card('T', 13),

    /*new Card('E', 1),*/ new Card('E', 2), new Card('E', 3), new Card('E', 4), new Card('E', 5),
    new Card('E', 6), new Card('E', 7), new Card('E', 8), new Card('E', 9), new Card('E', 10),
    new Card('E', 11), new Card('E', 12), new Card('e', 13),

    /*new Card('C', 1),*/ new Card('C', 2), new Card('C', 3), new Card('C', 4), new Card('C', 5),
    new Card('C', 6), new Card('C', 7), new Card('C', 8), new Card('C', 9), new Card('C', 10),
    new Card('C', 11), new Card('C', 12), new Card('C', 13),
];

function reborujarDeck() {
    DECK = DECK.sort( function () {
        return Math.random()-0.5
    });

    /*DECK.forEach(card => {
        console.log(card)
    });*/
}
