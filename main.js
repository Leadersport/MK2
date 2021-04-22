import { player1, player2 } from './modules/characters.js'
import { createPlayerOnArena, $arena} from './modules/createPlayer.js';
import random from './modules/random.js';
import generateLogs from './modules/logs.js';
import playerWin from './modules/winerDraw.js'
import createReloadButton from './modules/reloadBtn.js';
import showReasult from './modules/showResults.js';
import { playaerAttack, enemyAttack, $formControl} from './modules/fight.js';

generateLogs('start', player1, player2);

$formControl.addEventListener('submit', function(e){
    e.preventDefault();
    
    const enemy = enemyAttack();
    const player = playaerAttack();    

    if (player.defence != enemy.hit){
        player1.controlHP(enemy.value);
        generateLogs('hit', player2, player1, enemy.value, player1.hp);
        
    }else{
        generateLogs('defence', player2, player1, 0, player1.hp);
    }

    if(enemy.defence != player.hit){
        player2.controlHP(player.value);
        generateLogs('hit', player1, player2, player.value, player2.hp);
    }else{
        generateLogs('defence', player1, player2, 0, player2.hp);

    }
    
    showReasult();
   
})

createPlayerOnArena(player1);
createPlayerOnArena(player2);
