import { player1, player2 } from './modules/characters.js'
import { createPlayerOnArena } from './modules/createPlayer.js';
import generateLogs from './modules/logs.js';
import showReasult from './modules/showResults.js';
import { playaerAttack, enemyAttack, $formControl} from './modules/fight.js';

 class Game{
    constructor(props){
        // console.log('this', this);
        // console.log('props', props);
    }

    start = () => {
        createPlayerOnArena(player1);
        createPlayerOnArena(player2);
    
        generateLogs('start', player1, player2);
    }
}

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

export default Game;