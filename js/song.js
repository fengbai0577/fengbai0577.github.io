let playBut = document.getElementById("song-play");
let myAudio = document.getElementById("myAudio");
let controlDom = document.getElementById('song-control');
let infoBar = document.getElementById('song-info');

playBut.addEventListener("click", playF);

function playF() {
    let flag = Array.from(controlDom.classList).some(function (item) {
        return item == 'active';
    });
    if (flag) {
        controlDom.classList.remove('active');
        infoBar.classList.remove('active');
        myAudio.pause();
    } else {
        controlDom.classList.add('active');
        infoBar.classList.add('active');
        myAudio.play();
    }
}