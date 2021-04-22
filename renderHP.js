export function changeHP(randomNum){
    if (this.hp <= 0 || this.hp - randomNum < 0){
        this.hp = 0;
    }else{
        this.hp -= randomNum; 
    };
}

export function elHp(){
    const $elHP = document.querySelector('.player' + this.player + ' .life');
    return $elHP;
}

export function renderLife(){
    this.elHp().style.width = this.hp + '%';
}


export function controlHP(randomNum){
    this.changeHP(randomNum);
    this.renderLife();
    this.elHp();
}

// export default controlHP;