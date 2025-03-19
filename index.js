/* 
const diceElm = document.querySelector('.dice');
let side = 1;

const diceRoll = () => {

    side = side + 1;

    if (side > 6) {
        side = 1;
    };

    if (side === 1) {
        return diceElm.src = 'img/side1.svg';
    } else if (side === 2) {
        return diceElm.src = 'img/side2.svg';
    } else if (side === 3) {
        return diceElm.src = 'img/side3.svg';
    } else if (side === 4) {
        return diceElm.src = 'img/side4.svg';
    } else if (side === 5) {
        return diceElm.src = 'img/side5.svg';
    } else if (side === 6) {
        return diceElm.src = 'img/side6.svg';
    };
};

document.addEventListener('keydown', diceRoll);
*/

//POKOUŠÍM SE ZKRÁTIT

const diceElm = document.querySelector('.dice');
let side = 1;

const diceRoll = () => {
    
    side = side + 1;

    if (side > 6) {
        side = 1;
    };

    const sides = {
        1: 'img/side1.svg',
        2: 'img/side2.svg',
        3: 'img/side3.svg',
        4: 'img/side4.svg',
        5: 'img/side5.svg',
        6: 'img/side6.svg',
    };

    diceElm.src = sides[side]; 
}

document.addEventListener('keydown', diceRoll); 

//diceElm.src = sides[side] funguje tak, že aktuální hodnota proměnné side se použije jako klíč pro výběr z objektu sides - když má proměnná side hodnotu 5, tak je to vlastně sides[5] - tedy klíč 5, tedy img/side5