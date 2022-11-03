// =============FUNCTIONS=============
function createGrid(totalSquares, squareClass) {
    function createSquare(squareClass) {
        const div = document.createElement('div');
        div.classList.add("square");
        div.classList.add(squareClass);
        return div;
    }
    
    for (let i = 1; i <= totalSquares; i++) {
        let element = createSquare(squareClass);
        element.addEventListener('click', function () {
            this.classList.toggle('active');
            console.log(i);
        })
        element.innerHTML = i;
        grid.append(element);
    }
}
// =====================================

const grid = document.getElementById("grid");
const playBtn = document.getElementById("playBtn");
const difficulty = document.getElementById("difficulty");

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

