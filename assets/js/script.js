// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "game-start") {
                startGame();
            } else {
                let keytype = this.getAttribute("data-type");
                alert(`You clicked ${keytype}`)
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
        '<img src="assets/images/note_c.png" alt="Music notation image" class="note-img">',
        '<img src="assets/images/note_d.png" alt="Music notation image" class="note-img">',
        '<img src="assets/images/note_e.png" alt="Music notation image" class="note-img">',
        '<img src="assets/images/note_f.png" alt="Music notation image" class="note-img">',
        '<img src="assets/images/note_g.png" alt="Music notation image" class="note-img">',
        '<img src="assets/images/note_a.png" alt="Music notation image" class="note-img">',
        '<img src="assets/images/note_b.png" alt="Music notation image" class="note-img">',
    ];
    let dispImg = images[Math.floor(Math.random() * images.length)];
    document.getElementById("img-place").innerHTML = dispImg
}

function isCorrect() {

}