var score = 0
var shots = 0

function start() {
    var shootBtn = document.getElementById("ShootBtn");
    var passBtn = document.getElementById("PassBtn");
    var nextBtn = document.getElementById("NextBtn");

    console.log("Welcome")

    nextBtn.addEventListener("click", newRound);
    shootBtn.addEventListener("click", shootBtnClicK);
    passBtn.addEventListener("click", passBtnClick);

    newRound();
}

var images = [
    "res/imgs/reveal_shoot_human.png",
    "res/imgs/reveal_pass_human.png",
    "res/imgs/reveal_shoot_malteser.png",
    "res/imgs/reveal_pass_malteser.png"
]

var is_prisoner = false

window.onload = start;

function shootBtnClicK() {
    decided(true)
}
function passBtnClick() {
    decided(false)
}

function sound(path) {
    var audio = new Audio(path);
    audio.play();
}
function updateScoreLabel() {
    document.getElementById("ScoreLabel").innerText = "SCORE: " + score.toString() + "/" + shots.toString()
}

function decided(shot) {
    var img = document.getElementById("PrisonerImg")
    document.getElementById("ShootBtn").style.visibility = "hidden"
    document.getElementById("PassBtn").style.visibility = "hidden"

    if (shot) { sound("res/audio/gunshot.mp3") }
    shots += 1

    if (is_prisoner) {
        if (shot) {
            sound("res/audio/flesh.mp3")
            img.src = images[0]
        } else {
            sound("res/audio/ding.mp3")
            score += 1
            img.src = images[1]
        }
    } else {
        if (shot) {
            sound("res/audio/ding.mp3")
            score += 1
            sound("res/audio.bone_crack.mp3")
            img.src = images[2]
        } else {
            img.src = images[3]
        }
    }

    updateScoreLabel()

    document.getElementById("NextBtn").style.visibility = "visible"
}

function newRound() {
    is_prisoner = Math.random() > 0.5;
    document.getElementById("PrisonerImg").src = "res/imgs/hidden.png"
    document.getElementById("ShootBtn").style.visibility = "visible"
    document.getElementById("PassBtn").style.visibility = "visible"
    document.getElementById("NextBtn").style.visibility = "hidden"

    while (chosen == 0) {}

    window.alert("Chose: " + chosen.toString());
}