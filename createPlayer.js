import createEl from './createElement.js';

export const $arena = document.querySelector('.arenas');

const createPlayer = (playerObj) => {
    const $player = createEl('div', 'player' + playerObj.player);
    const $progressbar = createEl('div', 'progressbar');
    const $life = createEl('div', 'life');
    const $lifeCounter = createEl('span', 'live__counter')
    const $name = createEl('div', 'name');
    const $character = createEl('div', 'character');
    const $img = createEl('img', 'a');
    $img.src = playerObj.img;

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


export const createPlayerOnArena = (playerName) => {
    $arena.appendChild(createPlayer(playerName));
}