// =============FUNCTIONS=============
function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function bombFound() {

}

function createGrid(totalSquares, squareClass) {
    function createSquare(squareClass) {
        const div = document.createElement('div');
        div.classList.add("square");
        div.classList.add(squareClass);
        return div;
    }

    for (let i = 1; i <= totalSquares; i++) {
        let element = createSquare(squareClass);
        element.addEventListener('click', function() {
            if 
                (bombs.includes(i)) {
                this.classList.add('active-bomb');
                stopGame = true;
            }
            else if (stopGame === false)
                {this.classList.add('active');
                console.log(i);}     
        })
        element.innerHTML = i;
        grid.append(element);
    }

    let bombs = [];
    while (bombs.length < 16) {
        bombs.push(generateNumber(1, totalSquares));
    }
    console.log(bombs);

    function merda() {
        
    }
}
// =====================================

const grid = document.getElementById("grid");
const playBtn = document.getElementById("playBtn");
const difficulty = document.getElementById("difficulty");
let stopGame = false;

playBtn.addEventListener('click', function() {
    if (difficulty.value === "easy") {
        grid.replaceChildren();
        createGrid(100, "square-easy");
    }

    else if (difficulty.value === "medium") {   
        grid.replaceChildren();
        createGrid(81, "square-medium");
    }

    else if (difficulty.value === "hard") {      
        grid.replaceChildren();
        createGrid(49, "square-hard");
    }
});

if (stopGame === true) {
    playBtn.setAttribute('disabled', 'disabled');
}