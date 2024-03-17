const leftBnt = document.querySelector('#left');
const rightBnt = document.querySelector('#right');
const items = document.querySelector('#items');
const computedstyls = getComputedStyle(items);

rightBnt.addEventListener('click', (e) => {
    e.preventDefault();
    let right = parseInt(computedstyls.right);

if (right<500){
items.style.right = `${right + 100}px`;
}
})


leftBnt.addEventListener('click', (e)=> {
    e.preventDefault();
    let right = parseInt(computedstyls.right);

    if(right >0 ){
        items.style.right = `${right - 100}px`;
    }
    })

    







