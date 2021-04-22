import { player1, player2 } from './characters.js' 
import { $arena } from './createPlayer.js';
import generateLogs from './logs.js';
import createReloadButton from './reloadBtn.js';
import  playerWin from './winerDraw.js'

const $figthButtom = document.querySelector('.button');

const showReasult = () => {
    if(player1.hp === 0 || player2.hp === 0){
        $figthButtom.disabled = true;
        $arena.appendChild(createReloadButton())
    }

    if(player1.hp === 0 && player1.hp < player2.hp){
        $arena.appendChild(playerWin(player2.name));
        generateLogs('end', player2, player1);
    }else if(player2.hp === 0 && player2.hp < player1.hp){
        $arena.appendChild(playerWin(player1.name));
        generateLogs('end', player1, player2);
    }else if(player1.hp === 0 && player2.hp === 0){
        generateLogs('draw', player1, player2);
        $arena.appendChild(playerWin());
    }  
}

export default showReasult;