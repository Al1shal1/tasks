const  amountselector = document.querySelector('.amount-selector');
const colorselector = document.querySelector('.color-selector');
const blocks = document.querySelector('.blocks');

const createmarkup = function(amount){
    let markup = "";

    for (let i = 0; i< amount; i++){
        const block = document.createElement('div');
        block.classList.add('item');
        block.innerHTML = i +1 ;

        markup += block.outerHTML;
    }
    return markup;
}


amountselector.addEventListener('change', (e)=> {
    const amount =e.target.value;
    const markup = createmarkup(amount);
blocks.innerHTML = markup;
})

const colorBlock = (block, color)=> {
    block.style.backgroundColor = color;
}

let changed = false;

colorselector.addEventListener('change', (e)=>{
    const color = e.target.value;
    const items = blocks.querySelectorAll('.item');

    changed = !changed;

    for (let i = 0; i<items.length; i++){
        const selectedBlock =items[i];
        const blockNum = i+1;

        if (changed){
            if (blockNum %2 !== 0){
                colorBlock(selectedBlock, color);
            } else {
            colorBlock(selectedBlock, "#fff");
            } 
        }else{
            if (blockNum %2 == 0){
                colorBlock(selectedBlock, color);
            } else{
                colorBlock(selectedBlock, "#fff" );
            }
        }
    }
})
