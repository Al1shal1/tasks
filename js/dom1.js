 ///////////////#2

const btn = document.querySelector('#OpenOverlay');
const body=document.body;
const modal = createModal('Hello <b>World</b>!')

btn.addEventListener('click', (e)=>{
    body.appendChild(modal);
})

function createModal (content){
    
        const overlayElem = document.createElement('div');
        overlayElem.classList.add('overlay');

        overlayElem.addEventListener('click', (e)=> {
            if(!e.target.classList.contains('content')){
                closeElem.click();
            }
        })

        const containerElem = document.createElement('div');
        containerElem.classList.add('modal-container');

        const contentElem = document.createElement('div');
        contentElem.classList.add('content');

        contentElem.innerHTML = content;

        const closeElem = document.createElement('a');
        closeElem.classList.add('close');
        closeElem.textContent = 'x';
        closeElem.href = '#';

        closeElem.addEventListener('click', (e)=> {
            e.preventDefault();
            body.removeChild(overlayElem);

        });

        overlayElem.appendChild(containerElem);
        containerElem.appendChild(closeElem);
        containerElem.appendChild(contentElem);

        return overlayElem;



}
