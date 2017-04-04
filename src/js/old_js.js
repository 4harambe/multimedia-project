/* escape string */
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
/* alphabet keycodes a-z(65-90) */
var keycodes = [];
var k=0;
for(var j=65; j <= 90; j++){
    keycodes[j] = "";
    if(sounds[k] != null && sounds[k] != "." && sounds[k] != ".."){
        keycodes[j] = new Howl({
            src: 'launchpad/' + sounds[k]
        })
    }
    k++;
}

/* event listeners */
document.addEventListener('keydown', function(e) {
  console.log(sounds[nr]);

  if (e.key == sounds[nr]['hotkey']) {
    console.log('success');
  }
});
window.onkeydown = function(e) {
  var key = e.keyCode ? e.keyCode : e.which;
  console.log(sounds);
  console.log(nr);
  console.log(sounds[nr]);
  if (key == sounds[nr]['hotkey'].charCodeAt(0)) {
    howl.play();
    console.log("irgendöppis");
  }
}

/* manual howls */
var kick2 = new Howl({
    src: ['launchpad/kick2.mp3']
});

var snare = new Howl({
    src: ['launchpad/snare.mp3']
});

var hihat1 = new Howl({
    src: ['launchpad/hihat1.mp3']
});

var snap1 = new Howl({
    src: ['launchpad/snap1.mp3']
});

var du = new Howl({
    src: ['launchpad/du.wav']
});

var swing = new Howl({
    src: ['launchpad/swing.wav']
});

var the_remix = new Howl({
    src: ['launchpad/the_remix.wav']
});

var gone = new Howl({
    src: ['launchpad/gone.wav']
});

var dududududu = new Howl({
    src: ['launchpad/dududududu.wav']
});

/* play sound */
function playSound(e){
    switch (e.keyCode) {
        case 81:
            kick.play();
            break;

        case 87:
            snare.play();
            break;

        case 69:
            snap.play();
            break;

        case 82:
            hihat.play();
            break;

        case 65:
            du.play();
            break;

        case 83:
            swing.play();
            break;

        case 68:
            theremix.play();
            break;

        case 70:
            gone.play();
            break;
        case 89:
          dududu.play();
          break;

        case 88:

          break;
    }
}
