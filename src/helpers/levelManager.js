const generateLevel = async (cards, level) => {
    let cardsToCut = [...cards]
    if(level > 20){
        level = 20
    }
    let cardsForLevel;
    switch (level) {
        case 1:
            cardsForLevel = cardsToCut.splice(0, 5)
            break;
        case 2:
            cardsForLevel = cardsToCut.splice(0, 6)
            break;
        case 3:
            cardsForLevel = cardsToCut.splice(0, 7)
            break;
        case 4:
            cardsForLevel = cardsToCut.splice(0, 8)
            break;
        case 5:
            cardsForLevel = cardsToCut.splice(0, 9)
            break;
        case 6:
            cardsForLevel = cardsToCut.splice(0, 10)
            break;
        case 7:
            cardsForLevel = cardsToCut.splice(0, 11)
            break;
        case 8:
            cardsForLevel = cardsToCut.splice(0, 12)
            break;
        case 9:
            cardsForLevel = cardsToCut.splice(0, 13)
            break;
        case 10:
            cardsForLevel = cardsToCut.splice(0, 14)
            break;
        case 11:
            cardsForLevel = cardsToCut.splice(0, 15)
            break;
        case 12:
            cardsForLevel = cardsToCut.splice(0, 16)
            break;
        case 13:
            cardsForLevel = cardsToCut.splice(0, 17)
            break;
        case 14:
            cardsForLevel = cardsToCut.splice(0, 18)
            break;
        case 15:
            cardsForLevel = cardsToCut.splice(0, 19)
            break;
        case 16:
            cardsForLevel = cardsToCut.splice(0, 20)
            break;
        case 17:
            cardsForLevel = cardsToCut.splice(0, 21)
            break;
        case 18:
            cardsForLevel = cardsToCut.splice(0, 22)
            break;
        case 19:
            cardsForLevel = cardsToCut.splice(0, 23)
            break;
        case 20:
            cardsForLevel = cardsToCut.splice(0, 24)
            break;
        default:
            break;
    }
    return cardsForLevel
}

module.exports = { generateLevel }