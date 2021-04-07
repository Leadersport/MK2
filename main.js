const person1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife'],
    attack: function(){
        console.log(this.name + ' Figth...')
    }
}

const person2 = {
    name: 'Liu Kang',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['knife'],
    attack: function(){
        console.log(this.name + ' Figth...')
    }
}

const $arena = document.querySelector('.arenas');

function createPlayer(player, person){
    const $player = createEl(player);
    const $progressbar = createEl('progressbar');
    const $life = createEl('life');
    const $name = createEl('name');
    const $character = createEl('character');
    const $img = document.createElement('img');
    $img.src = person.img;

    $life.style.width = person.hp + '%';
    $name.innerText = person.name;

    $arena.appendChild($player);
    $player.appendChild($progressbar);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($character);
    $character.appendChild($img);
}

function createEl(className){
    $divEl = document.createElement('div');
    $divEl.classList.add(className);
    return $divEl;
}

createPlayer('player1', person1);
createPlayer('player2', person2);
