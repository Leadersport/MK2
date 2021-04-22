import { changeHP, elHp, renderLife, controlHP } from './renderHP.js';

export const CHARACTER = {
    player: 0,
    name: 'Player 0',
    hp: 100,
    img: `http://reactmarathon-api.herokuapp.com/assets/scorpion.gif`,
    weapon: ['knife'],
    attack,
    changeHP,
    elHp,
    renderLife,
    controlHP,
}

function attack(){
    console.log(this.name + ' Figth...')
}

export const player1 = Object.create(CHARACTER); 
player1.name = 'Scorpion';
player1.player = 1;
player1.img = `http://reactmarathon-api.herokuapp.com/assets/${player1.name.toLowerCase()}.gif`;

export const player2 = Object.create(CHARACTER);
player2.name = 'Kitana';
player2.player = 2;
player2.img = `http://reactmarathon-api.herokuapp.com/assets/${player2.name.toLowerCase()}.gif`;