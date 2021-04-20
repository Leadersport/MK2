const createEl = (tag, className) =>{
    const $tag = document.createElement(tag);
    if (className){
        $tag.classList.add(className);
    }
    
    return $tag;
}

export default createEl;