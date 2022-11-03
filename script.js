const grid = document.getElementById("grid");
const playBtn = document.getElementById("playBtn");
const difficulty = document.getElementById("difficulty");

function createSquare(squareClass) {
    const div = document.createElement('div');
    div.classList.add("square");
    div.classList.add(squareClass);
    return div;
}

playBtn.addEventListener('click', function() {
    if (difficulty.value === "easy") {
        grid.replaceChildren();
        for (let i = 1; i <= 100; i++) {
            let element = createSquare("square-easy");
            element.addEventListener('click', function () {
                this.classList.toggle('active');
                console.log(i);
            })
            element.innerHTML = i;
            grid.append(element);
        }
    }

    else if (difficulty.value === "medium") {   
        grid.replaceChildren();
        for (let i = 1; i <= 81; i++) {
            let element = createSquare("square-medium");
            element.addEventListener('click', function () {
                this.classList.toggle('active');
                console.log(i);
            })
            element.innerHTML = i;
            grid.append(element);
        }
    }

    else if (difficulty.value === "hard") {      
        grid.replaceChildren();
        for (let i = 1; i <= 49; i++) {
            let element = createSquare("square-hard");
            element.addEventListener('click', function () {
                this.classList.toggle('active');
                console.log(i);
            })
            element.innerHTML = i;
            grid.append(element);
        }
    }
});

