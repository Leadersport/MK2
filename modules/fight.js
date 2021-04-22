import random from './random.js';

export const $formControl = document.querySelector('.control');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];


export const enemyAttack = () => {
    const hit = ATTACK[random(ATTACK.length)];
    const defence = ATTACK[random(ATTACK.length)];
    const value =  random(HIT[hit]);

    return {
        value,
        hit,
        defence
    }
}

export const playaerAttack = () => {
    const attack = {};
    for (let items of $formControl) {
        if(items.checked && items.name === 'hit'){
            attack.value = random(HIT[items.value]);
            attack.hit = items.value;
        }

        if(items.checked && items.name === 'defence'){
            attack.defence = items.value;
        }

        items.checked = false;
    }
    return attack
}