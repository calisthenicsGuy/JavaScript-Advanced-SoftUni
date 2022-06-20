function cardFactory(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        S : '♠',
        H : '♥',
        D : '♦',
        C : '♣',
    };


    if (!faces.includes(face) || !suits[suit]) {
        throw new Error('Invalid input!!!');
    }

    function errors() {
        if (face != face.toUpperCase()) {
            throw {
                message : 'Face must be UPPER Case!',
                type : 'Invalid input!',
            };
        } 
        if (suit != suit.toUpperCase()) {
            throw {
                message : 'Suit must be UPPER case!',
                type : 'Invalid input!',
            };
        }

        // face.toUpperCase();
        // suit.toUpperCase();
    }


    try {
        errors();
    } catch (err) {
        console.log(err);
    }

    let customCard = {
        face,
        suit,
        toString() {
            console.log(this.face + suits[this.suit]);
        }
    };

    return customCard;
}


let card = cardFactory('A', 'S');
card.toString(); // A♠
    
let secondCard = cardFactory('10', 'H');
secondCard.toString(); // 10♥
    
let thirdCard = cardFactory('a', 'S');
thirdCard.toString(); // will procesing
    
let fourthCard = cardFactory('q', 'S'); // Uncaught Error Error: Invalid input!!!
fourthCard.toString();