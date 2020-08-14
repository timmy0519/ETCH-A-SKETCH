let controlDiv = document.querySelector('#control')
let newButton = controlDiv.querySelector("#new")
let clearButton = controlDiv.querySelector("#clear")
let inputSize = 0
newButton.addEventListener('click',()=>{
    inputSize = Number(prompt());
    createSquares();
})
clearButton.addEventListener('click',()=>{
    inputSize = 0
    // controlDiv.removeChild(mainDiv)
    mainDiv.innerHTML = "";
})
let mainDiv = document.createElement('main')
document.body.appendChild(mainDiv);
function createSquares(){
    

    for(let i=0;i<inputSize;i++){
        for(let j=0;j<inputSize;j++){
            let sq = document.createElement('div')
            sq.className = 'square'
            sq.style.width = `${960/inputSize}px`;
            sq.style.height = `${960/inputSize}px`;
            sq.style.flexBasis = (1/inputSize*100).toString()+'%';
            mainDiv.appendChild(sq)
        }
    }
    let squares = mainDiv.childNodes;
    squares.forEach(square => {
        square.addEventListener('mouseover',()=>{
            let r = Math.random()*256, g = Math.random()*256, b = Math.random()*256;
            square.style.background =  `rgb(${r},${g},${b})`;

        });
        square.addEventListener('mouseleave',()=>{
            square['style'].background = ''
        });
    
    });
}



