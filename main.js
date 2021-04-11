const $arena = document.querySelector('.arenas');
const $randomButtom = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife'],
    attack: function(){
        console.log(this.name + ' Figth...')
    }
}

const player2 = {
    player: 2,
    name: 'Liu Kang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['knife'],
    attack: function(){
        console.log(this.name + ' Figth...')
    }
}


function createEl(tag, className){
    $tag = document.createElement(tag);
    if (className){
        $tag.classList.add(className);
    }
    
    return $tag;
}

function changeHP(player){
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= random(20);
    $playerLife.style.width = player.hp + '%';
 
    if( player.hp <= 0){
        player.hp = 0;
        $playerLife.style.width = player.hp + '%';
        $randomButtom.disabled = true;
        if (player.name === player1.name){
            $arena.appendChild(playerLose(player2.name));
        }else{
            $arena.appendChild(playerLose(player2.name));
        }
    }
}


function playerLose(name){
    const $loseTitle = createEl('div', 'loseTitle');
    $loseTitle.innerText = name + ' Wins';

    return $loseTitle;
}

function createPlayer(playerObj){
    const $player = createEl('div', 'player' + playerObj.player);
    const $progressbar = createEl('div', 'progressbar');
    const $life = createEl('div', 'life');
    const $name = createEl('div', 'name');
    const $character = createEl('div', 'character');
    const $img = createEl('img', 'a');
    $img.src = playerObj.img;

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;

    $character.appendChild($img);
    $player.appendChild($character);
    $progressbar.appendChild($name);
    $progressbar.appendChild($life);
    $player.appendChild($progressbar);

    return $player;
}

$randomButtom.addEventListener('click', function(){
    console.log('click-clack');
    changeHP(player1);
    changeHP(player2);
})

function random(num){
    const randomInt = Math.floor(Math.random() * num);

    return randomInt; 
}

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));
