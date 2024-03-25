// JS

function play(id) {
    document.getElementById(id).play();
}

function pause(id) {
    document.getElementById(id).pause();
}

function increaseVolume(id) {
    var player = document.getElementById(id);
    if (player.volume < 1) {
        player.volume += 0.1;
    }
}

function decreaseVolume(id) {
    var player = document.getElementById(id);
    if (player.volume > 0) {
        player.volume -= 0.1;
    }
}
