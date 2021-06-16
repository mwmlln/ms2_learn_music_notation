// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName('game-btn');
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "game-start") {
                startGame();
            } else {
                answer = isCorrect()
                if (this.getAttribute("data-type") === answer) {
                    answerCorrect()
                } else {
                    answerWrong()
                }

            }
        })
    }
});


// function to start the process of the game

function startGame() {

    displayImg();
};

//Run countdown Timer for game duration of 60seconds

function runTimer() {};



// Set the queastion images and answers
let images = [
    '<img src="assets/images/note_c.png"  data-type="c" alt="Music notation image" class="note-img">',
    '<img src="assets/images/note_d.png"  data-type="d" alt="Music notation image" class="note-img">',
    '<img src="assets/images/note_e.png"  data-type="e" alt="Music notation image" class="note-img">',
    '<img src="assets/images/note_f.png"  data-type="f" alt="Music notation image" class="note-img">',
    '<img src="assets/images/note_g.png"  data-type="g" alt="Music notation image" class="note-img">',
    '<img src="assets/images/note_a.png"  data-type="a" alt="Music notation image" class="note-img">',
    '<img src="assets/images/note_b.png"  data-type="b" alt="Music notation image" class="note-img">',
];

//  Display random selection of the images 
function displayImg() {
    let dispImg = images[Math.floor(Math.random() * images.length)];
    document.getElementById("img-place").innerHTML = dispImg;
};

/**
 * Obtain the correct answer for the question
 */
function isCorrect() {
    let currentImg = document.getElementById("img-place").children[0];
    let keytype = currentImg.getAttribute("data-type");
    return keytype
};

/**
 * Calling scoreUp and correctGreen then diplay random image 
 */
function answerCorrect() {
    scoreUp();
    correctGreen();
    displayImg();
}

function answerWrong() {
    wrongRed();
    displayImg();
}

/**
 * Get the current score from DOM and increase it by one
 */
function scoreUp() {
    let oldtScore = parseInt(document.getElementById("corrent-score").innerText);
    document.getElementById("corrent-score").innerText = ++oldtScore
};

/**
 * Insert class to turn the text for correct green
 */
function correctGreen() {
    let correctSpan = document.getElementsByClassName("is-correct");
    correctSpan[0].classList.add("correct");
};

/**
 * Insert class to turn the text for wrong red
 */
function wrongRed() {
    let correctSpan = document.getElementsByClassName("is-correct");
    correctSpan[1].classList.add("wrong");
    }



