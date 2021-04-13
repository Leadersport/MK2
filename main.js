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
    },
    changeHP: changeHP,
    elHp: elHp,
    renderLife: renderLife,
}

const player2 = {
    player: 2,
    name: 'Liu Kang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['knife'],
    attack: function(){
        console.log(this.name + ' Figth...')
    },
    changeHP: changeHP,
    elHp: elHp,
    renderLife: renderLife,
}

function createEl(tag, className){
    $tag = document.createElement(tag);
    if (className){
        $tag.classList.add(className);
    }
    
    return $tag;
}

function changeHP(randomNum){
    console.log(this.name, this.hp, this.hp <= 0 , randomNum)
    this.hp <= 0 || this.hp - randomNum < 0 ? this.hp = 0 : this.hp -= randomNum; 
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

$randomButtom.addEventListener('click', function(){
    console.log('click-clack');
    
    player1.changeHP(random(20));
    player1.renderLife();
    player1.elHp();
    player2.changeHP(random(20));
    player2.renderLife();
    player2.elHp()

    if(player1.hp === 0 || player2.hp === 0){
        $randomButtom.disabled = true;
         $arena.appendChild(createReloadButton())
    }

    if(player1.hp === 0 && player1.hp < player2.hp){
        $arena.appendChild(playerWin(player2.name));
    }else if(player2.hp === 0 && player2.hp < player1.hp){
        $arena.appendChild(playerWin(player1.name));
    }else if(player1.hp === 0 && player2.hp === 0){
        $arena.appendChild(playerWin());
    }   
});


function random(num){
    const randomInt = Math.floor(Math.random() * num);

    return randomInt; 
}



$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));
