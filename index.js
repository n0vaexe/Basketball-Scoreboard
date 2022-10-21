let homeScoreEl = document.getElementById("scorecard-home");
let guestScoreEl = document.getElementById("scorecard-guest");

function add1Home() {
    homeScoreEl.textContent++;
}

function add2Home() {
    homeScoreEl.textContent++;
    homeScoreEl.textContent++;
}

function add3Home() {
    homeScoreEl.textContent++;
    homeScoreEl.textContent++;
    homeScoreEl.textContent++;
}

function add1Guest() {
    guestScoreEl.textContent++;
}

function add2Guest() {
    guestScoreEl.textContent++;
    guestScoreEl.textContent++;
}

function add3Guest() {
    guestScoreEl.textContent++;
    guestScoreEl.textContent++;
    guestScoreEl.textContent++;
}

function newGame() {
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
}