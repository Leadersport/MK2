import { changeHP, elHp, renderLife, controlHP } from './renderHP.js';

class Player {
    constructor(props) {
        // console.log('this', this);
        // console.log('props', props);
        this.player = props.player;
        this.name = props.name;
        this.hp = props.hp;
        this.img = props.img;
        // weapon: ['knife'],
        
        this.changeHP = changeHP; 
        this.elHp = elHp; 
        this.renderLife = renderLife; 
        this.controlHP = controlHP; 
    }
    
    attack = () => {
        console.log(this.name + ' Figth...')
    };
}

export const player1 = new Player({
    name : 'Scorpion',
    player : 1,
    hp : 100,
    img : `http://reactmarathon-api.herokuapp.com/assets/scorpion.gif`,
}) 

export const player2 = new Player({
    name : 'Kitana',
    player : 2,
    hp : 100,
    img : `http://reactmarathon-api.herokuapp.com/assets/kitana.gif`,
})

console.log(player1)