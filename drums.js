function playClipQ() {
    var clipQ = document.getElementById('Q');
    clipQ.play();
    document.getElementById('display').innerHTML = 'You have played the drum: Q.'
    }

function playClipW() {
    var clipW = document.getElementById('W');
    clipW.play();
    document.getElementById('display').innerHTML = 'You have played the drum: W.'
    }

function playClipE() {
    var clipE = document.getElementById('E');
    clipE.play();
    document.getElementById('display').innerHTML = 'You have played the drum: E.'
    }

function playClipA() {
    var clipA = document.getElementById('A');
    clipA.play();
    document.getElementById('display').innerHTML = 'You have played the drum: A.'
    }

function playClipS() {
    var clipS = document.getElementById('S');
    clipS.play();
    document.getElementById('display').innerHTML = 'You have played the drum: S.'
    }

function playClipD() {
    var clipD = document.getElementById('D');
    clipD.play();
    document.getElementById('display').innerHTML = 'You have played the drum: D.'
    }

function playClipZ() {
    var clipZ = document.getElementById('Z');
    clipZ.play();
    document.getElementById('display').innerHTML = 'You have played the drum: Z.'
    }

function playClipX() {
    var clipX = document.getElementById('X');
    clipX.play();
    document.getElementById('display').innerHTML = 'You have played the drum: X.'
    }

function playClipC() {
    var clipC = document.getElementById('C');
    clipC.play();
    document.getElementById('display').innerHTML = 'You have played the drum: C.'
    }


window.addEventListener("keypress", function (pressed) {
        if (pressed.key == 'Q') {playClipQ()}
        else if (pressed.key == 'q') {playClipQ()}
        else if (pressed.key == 'W') {playClipW()}
        else if (pressed.key == 'w') {playClipW()}
        else if (pressed.key == 'E') {playClipE()}
        else if (pressed.key == 'e') {playClipE()}
        else if (pressed.key == 'A') {playClipA()}
        else if (pressed.key == 'a') {playClipA()}
        else if (pressed.key == 'S') {playClipS()}
        else if (pressed.key == 's') {playClipS()}
        else if (pressed.key == 'D') {playClipD()}
        else if (pressed.key == 'd') {playClipD()}
        else if (pressed.key == 'Z') {playClipZ()}
        else if (pressed.key == 'z') {playClipZ()}
        else if (pressed.key == 'X') {playClipX()}
        else if (pressed.key == 'x') {playClipX()}
        else if (pressed.key == 'C') {playClipC()}
        else if (pressed.key == 'c') {playClipC()}
      })