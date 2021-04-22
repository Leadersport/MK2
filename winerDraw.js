import { $arena } from './createPlayer.js';
import createEl from './createElement.js';

const playerWin = (name) => {
    const $loseTitle = createEl('div', 'loseTitle');

    if(name){
        $loseTitle.innerText = name + ' Wins';
    }else{
        $loseTitle.innerText = 'Draws';
    }

    return $loseTitle;
}

export default playerWin;