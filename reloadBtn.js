import createEl from './createElement.js';

const createReloadButton = () => {
    const $reloadWrap = createEl('div', 'reloadWrap');
    const $restartButon = createEl('button', 'button');
    $restartButon.innerText = 'Restart';
    $reloadWrap.appendChild($restartButon);

    $restartButon.addEventListener('click', function(){
        console.log('reload')
        window.location.reload();
    })
    return $reloadWrap;
}

export default createReloadButton;