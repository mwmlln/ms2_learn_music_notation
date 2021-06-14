// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
                if (this.getAttribute("data-type") === "game-start") {
                    startGame();
                } else { 
                    let currentImg = document.getElementById("img-place").innerHTML
                    if (this.getAttribute("data-type") === currentImg("data-type")) {
                        scoreUp()
                    }
                        
                        let keytype = this.getAttribute("data-type");
                    }
  
                } 
            }
        })
}
})



// function to start the process of the game

function startGame() {
    runTimer();
    displayImg();
}

//Run countdown Timer for game duration of 60seconds

function runTimer() {

}

//  Display random selection of the images 

function displayImg() {
    let images = new Array()
    images = [
        '<img src="assets/images/note_c.png" alt="Music notation image" data-type="c" class="note-img">',
        '<img src="assets/images/note_d.png" alt="Music notation image" data-type="d" class="note-img">',
        '<img src="assets/images/note_e.png" alt="Music notation image" data-type="e" class="note-img">',
        '<img src="assets/images/note_f.png" alt="Music notation image" data-type="f" class="note-img">',
        '<img src="assets/images/note_g.png" alt="Music notation image" data-type="g" class="note-img">',
        '<img src="assets/images/note_a.png" alt="Music notation image" data-type="a" class="note-img">',
        '<img src="assets/images/note_b.png" alt="Music notation image" data-type="b" class="note-img">',
    ];
    let dispImg = images[Math.floor(Math.random() * images.length)];
    document.getElementById("img-place").innerHTML = dispImg
}

function isCorrect() {
    let currentImg = document.getElementById("img-place").innerHTML
    let keytype = this.getAttribute("data-type");

}

function scoreUp(){

}

updateScore() {

}