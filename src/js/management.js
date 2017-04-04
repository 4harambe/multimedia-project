console.log("qqwert");
getSounds();
var grid = "";
console.log(sounds);
for (var nr = 0; nr < sounds.length; nr++) {
  if (sounds[nr] !== "") {
    var source = sounds[nr]['source'];
    console.log("manage" + howl);
    var button = "<button class='flexitem' data-source=" + sounds[nr]['source'] + " onclick='howl.play();''>" + sounds[nr]['name'] + "</button>";
    html = grid.concat(button);
    }
  } else {
    alert("No sound files!");
  }
  document.getElementById('management_container').innerHTML = grid;
}
