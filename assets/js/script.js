// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName('game-btn');
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "game-start") {
                startGame();
            } else if (this.getAttribute("data-type") === "game-stop") {
                timerStat = false; 
            } else {
                answer = isCorrect();
                if (this.getAttribute("data-type") === answer) {
                    answerCorrect();
                } else {
                    answerWrong();
                }
            }
        });
    }
});

//setting timer status
let timerStat = false;

/**
 * function to start the process of the game
 */
function startGame() {
    timerStat = true;
    showGamePanel();
    runTimer();
    displayImg();
}

/**
 * Function to display/hide the gaming panel
 */
const gamePanel = document.getElementById("game-panel");

function hideGamePanel() {
    gamePanel.style.display = "none";
}

function showGamePanel() {
    gamePanel.style.display = "block";
    gameBtnHide();
}


//  Toggle display of start button.

const gameStartBtn = document.getElementsByClassName("game-start")[0];

function gameBtnHide() {
    gameStartBtn.style.display = "none";
}

function startBtnShow() {
    gameStartBtn.style.display = "inline-block";
}



/**
 * Run countdown Timer for a game duration of 60seconds
 */
function runTimer() {
    let counter = 60;
    let myTimer = setInterval(function () {
        counter--;

        if (counter >= 0 && timerStat == true) {
            timer = document.getElementById("game-timer");
            timer.innerHTML = counter;
        } else {
            clearInterval(myTimer);
            gameOver();
        }
    }, 1000);
}

/**
 * Function to stop the game and reset score and timer
 */
function gameOver() {
    let yourScore = document.getElementById("corrent-score").innerHTML;
    alert(`Game Over! You scored ${yourScore}.`);
    document.getElementById("last-score").innerHTML = yourScore;
    document.getElementById("corrent-score").innerHTML = 0;
    document.getElementById("game-timer").innerHTML = 60;
    document.getElementById("img-place").innerHTML = '<img src="assets/images/notaions.png" alt="Music notation" class="note-img">';
    startBtnShow();
    hideGamePanel();
}

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

/**
 * Display random selection of the image 
 */
function displayImg() {
    let dispImg = images[Math.floor(Math.random() * images.length)];
    document.getElementById("img-place").innerHTML = dispImg;
}

/**
 * Obtain the correct answer for the question
 */
function isCorrect() {
    let currentImg = document.getElementById("img-place").children[0];
    let keytype = currentImg.getAttribute("data-type");
    return keytype;
}

/**
 * Calling scoreUp and correctGreen then diplay random image 
 */
function answerCorrect() {
    scoreUp();
    correctGreen();
    displayImg();
}

/**
 * Calling class to turn text red for Wrong and display new image
 */
function answerWrong() {
    wrongRed();
    displayImg();
}

/**
 * Get the current score from DOM and increase it by one
 */
function scoreUp() {
    let oldtScore = parseInt(document.getElementById("corrent-score").innerText);
    document.getElementById("corrent-score").innerText = ++oldtScore;
};

/**
 * Insert class to turn the text for correct green
 */
function correctGreen() {
    let correctSpan = document.getElementsByClassName("is-correct");
    correctSpan[0].classList.add("correct");
    setTimeout(function () {
        rmGreen();
    }, 1000);
}

/**
 * Remove inserted class to reset the correct text
 */
function rmGreen() {
    let correctSpan = document.getElementsByClassName("is-correct");
    correctSpan[0].classList.remove("correct");
}

/**
 * Insert class to turn the text for wrong red
 */
function wrongRed() {
    let correctSpan = document.getElementsByClassName("is-correct");
    correctSpan[1].classList.add("wrong");
    setTimeout(function () {
        rmRed();
    }, 1000);
}


/**
 * Remove inserted class to reset the wrong text
 */
function rmRed() {
    let wrongSpan = document.getElementsByClassName("is-correct");
    wrongSpan[1].classList.remove("wrong");
}