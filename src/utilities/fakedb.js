import { Children } from "react";

// use local storage to manage cart data
const addToDb = id => {
    const playerSign = getPlayerSign();
    playerSign.push(id);
    const jsonPlayer = JSON.stringify(playerSign)
    localStorage.setItem('player-sign', jsonPlayer);
}

const removeFromDb = id => {
    const playerSign = getPlayerSign();
    const removePlayer = playerSign.filter(player=> player !==id )
    localStorage.setItem('player-sign', JSON.stringify(removePlayer));

}

const getPlayerSign = () => {
    let playerSign = [];


    const playerStored = localStorage.getItem('player-sign');

    if (playerStored) {
            playerSign = JSON.parse(playerStored);
    }
    return playerSign;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('player-sign');
}

export {
    addToDb,
    removeFromDb,
    getPlayerSign,
    deleteShoppingCart
}
