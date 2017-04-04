/* json file in which the pads are saved in json format */
var jsonFile = "json/fullJson.json";

/* array with the (name, hotkey, source) objects */
var sounds = [];

/* howl object with all hotkey - sound collacations */
var howls = {
  "a": null, "b": null,
  "c": null, "d": null,
  "e": null, "f": null,
  "g": null, "h": null,
  "i": null, "j": null,
  "k": null, "l": null,
  "m": null, "n": null,
  "o": null, "p": null,
  "q": null, "r": null,
  "s": null, "t": null,
  "u": null, "v": null,
  "w": null, "x": null,
  "y": null, "z": null
};

readJsonFile(jsonFile);

var grid = "";
for (var nr = 0; nr < sounds.length; nr++) {
  if (sounds[nr] !== "") {
    var source = sounds[nr]['source'];
    var howl = new Howl({
      src: source
    });
    var button = "<button class='flexitem' onclick='howl.play();'>" + sounds[nr]['name'] + "</button>";
    grid = grid.concat(button);
    howls[sounds[nr]['hotkey']] = howl;
    document.getElementById('flexcontainer').innerHTML = grid;
  } else {
    alert("No sound files!");
  }
}

// buildPads("home");
