const $arena = document.querySelector('.arenas');
// const $randomButtom = document.querySelector('.button');
const $figthButtom = document.querySelector('.button');
const $formControl = document.querySelector('.control');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife'],
    attack,
    changeHP,
    elHp,
    renderLife,
    controlHP,
}

const player2 = {
    player: 2,
    name: 'Liu Kang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
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

function createEl(tag, className){
    $tag = document.createElement(tag);
    if (className){
        $tag.classList.add(className);
    }
    
    return $tag;
}

function changeHP(randomNum){
    // console.log(this.name, this.hp, this.hp <= 0 , randomNum)
    if (this.hp <= 0 || this.hp - randomNum < 0){
        this.hp = 0;
    }else{
        this.hp -= randomNum; 
    };
}

function elHp(){
    const $elHP = document.querySelector('.player' + this.player + ' .life');

    return $elHP;
}

function renderLife(){
    this.elHp().style.width = this.hp + '%';
}

function playerWin(name){
    const $loseTitle = createEl('div', 'loseTitle');

    if(name){
        $loseTitle.innerText = name + ' Wins';
    }else{
        $loseTitle.innerText = 'Draws';
    }

    return $loseTitle;
}

function createPlayer(playerObj){
    const $player = createEl('div', 'player' + playerObj.player);
    const $progressbar = createEl('div', 'progressbar');
    const $life = createEl('div', 'life');
    const $lifeCounter = createEl('span', 'live__counter')
    const $name = createEl('div', 'name');
    const $character = createEl('div', 'character');
    const $img = createEl('img', 'a');
    $img.src = playerObj.img;

    // $lifeCounter.innerText = playerObj.hp;
    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;


    $character.appendChild($img);
    $player.appendChild($character);
    $progressbar.appendChild($name);
    $life.appendChild($lifeCounter);
    $progressbar.appendChild($life);
    $player.appendChild($progressbar);

    return $player;
}

function createReloadButton (){
    $reloadWrap = createEl('div', 'reloadWrap');
    $restartButon = createEl('button', 'button');
    $restartButon.innerText = 'Restart';
    $reloadWrap.appendChild($restartButon);

    $restartButon.addEventListener('click', function(){
        console.log('reload')
        window.location.reload();
    })
    return $reloadWrap;
}

// $randomButtom.addEventListener('click', function(){
//     console.log('click-clack');
    
//     player1.changeHP(random(20));
//     player1.renderLife();
//     player1.elHp();
//     player2.changeHP(random(20));
//     player2.renderLife();
//     player2.elHp()

//     if(player1.hp === 0 || player2.hp === 0){
//         $randomButtom.disabled = true;
//          $arena.appendChild(createReloadButton())
//     }

//     if(player1.hp === 0 && player1.hp < player2.hp){
//         $arena.appendChild(playerWin(player2.name));
//     }else if(player2.hp === 0 && player2.hp < player1.hp){
//         $arena.appendChild(playerWin(player1.name));
//     }else if(player1.hp === 0 && player2.hp === 0){
//         $arena.appendChild(playerWin());
//     }   
// });

function random(num){
    const randomInt = Math.floor(Math.random() * num);

    return randomInt; 
}

function enemyAttack(){
    const hit = ATTACK[random(ATTACK.length)];
    const defence = ATTACK[random(ATTACK.length)];
    const value =  random(HIT[hit]);

    return {
        value,
        hit,
        defence
    }
}

$formControl.addEventListener('submit', function(e){
    e.preventDefault();
    
    const enemy = enemyAttack();
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

    if (attack.hit != enemy.defence){
        // player2.changeHP(attack.value);
        // player2.renderLife();
        // player2.elHp();
        player2.controlHP(attack.value);
    }

    if(enemy.hit != attack.defence){
        // player1.changeHP(enemy.value);
        // player1.renderLife();
        // player1.elHp();
        player1.controlHP(enemy.value);
    }

    if(player1.hp === 0 || player2.hp === 0){
        $figthButtom.disabled = true;
        $arena.appendChild(createReloadButton())
    }

    if(player1.hp === 0 && player1.hp < player2.hp){
        $arena.appendChild(playerWin(player2.name));
    }else if(player2.hp === 0 && player2.hp < player1.hp){
        $arena.appendChild(playerWin(player1.name));
    }else if(player1.hp === 0 && player2.hp === 0){
        $arena.appendChild(playerWin());
    }  
})

function controlHP(randomNum){
    this.changeHP(randomNum);
    this.renderLife();
    this.elHp();
}

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));
