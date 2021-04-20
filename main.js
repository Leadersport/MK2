const $arena = document.querySelector('.arenas');
// const $randomButtom = document.querySelector('.button');
const $figthButtom = document.querySelector('.button');
const $formControl = document.querySelector('.control');
const $chat = document.querySelector('.chat');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

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

function playaerAttack(){
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

function showReasult(){
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


function generateLogs(type, player1, player2, valueAttack, playerHP){
    const date = new Date();
    const startTime = `<span>${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</span>`;
    
    let text = '';
    let el = ``;
    switch (type) {
        case 'start':
            text = logs[type].replace('[time]', startTime).replace('[player1]', player1.name).replace('[player2]', player2.name);
            el = `<p> ${text} </p>`;
            break;
        case 'hit':
            text = logs[type][random(type.length)].replace('[playerKick]', `<span style='color:red'>${player1.name}</span>`).replace('[playerDefence]', `<span style='color:green'>${player2.name}</span>`);
            el = `<p>${startTime} ${text} -${valueAttack} ${playerHP}/100</p>`
            break;
        case 'defence':
            text = logs[type][random(type.length)].replace('[playerKick]', `<span style='color:red'>${player1.name}</span>`).replace('[playerDefence]', `<span style='color:yellow'>${player2.name}</span>`);
            el = `<p>${startTime} ${text} ${playerHP}/100</p>`
            break;
        case 'end':
            text = logs[type][random(type.length)].replace('[playerWins]', player1.name).replace('[playerLose]', player2.name);
            el = `<p> ${text} </p>`;
            break;
        case 'draw':
            text = logs[type];
            el = `${text}`
            break;
    }
    $chat.insertAdjacentHTML('afterbegin', el)
}

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

function controlHP(randomNum){
    this.changeHP(randomNum);
    this.renderLife();
    this.elHp();
}

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));