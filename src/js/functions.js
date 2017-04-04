/* build pad string */
function buildPads(usage){
  /* string where the html for the pads will be saved in */
  var grid = "";
  for (var nr = 0; nr < sounds.length; nr++) {
    if (sounds[nr] !== "") {
      var source = sounds[nr]['source'];
      /* normal page */
      if(usage == "home"){
        var howl = new Howl({
          src: source
        });
        console.log(howl);
        var button = "<button class='flexitem' onclick='howl.play();'>" + sounds[nr]['name'] + "</button>";
        console.log(button);
        grid = grid.concat(button);
        howls[sounds[nr]['hotkey']] = howl;
      /* management page */
      } else if(usage == "manage"){
        console.log("manage" + howl);
        var button = "<button class='flexitem' data-source=" + sounds[nr]['source'] + " onclick='howl.play();''>" + sounds[nr]['name'] + "</button>";
        html = grid.concat(button);
      }
    } else {
      alert("No sound files!");
    }
    if(usage == "home"){
      document.getElementById('flexcontainer').innerHTML = grid;
    }else if (usage == "manage") {
      document.getElementById('management_container').innerHTML = grid;
    }
  }
}

function readJsonFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
                var filesJson = JSON.parse(rawFile.responseText);
                var index = 0;
                for (var key in filesJson) {
                  if (filesJson.hasOwnProperty(key)) {
                    sounds[index] = filesJson[key];
                  }
                  index++;
                }
            }
        }
    }
    rawFile.send(null);
}

function getSounds(){
  return sounds;
}

function playSound(e){
    switch (true) {
        case e.keyCode == 65 && howls['a'] != null:
          howls['a'].play();
          break;

        case e.keyCode == 66 && howls['b'] != null:
          howls['b'].play();
          break;

        case e.keyCode == 67 && howls['c'] != null:
          howls['c'].play();
          break;

        case e.keyCode == 68 && howls['d'] != null:
          howls['d'].play();
          break;

        case e.keyCode == 69 && howls['e'] != null:
          howls['e'].play();
          break;

        case e.keyCode == 70 && howls['f'] != null:
          howls['f'].play();
          break;

        case e.keyCode == 71 && howls['g'] != null:
          howls['g'].play();
          break;

        case e.keyCode == 72 && howls['h'] != null:
          howls['h'].play();
          break;

        case e.keyCode == 73 && howls['i'] != null:
          howls['i'].play();
          break;

        case e.keyCode == 74 && howls['j'] != null:
          howls['j'].play();
          break;

        case e.keyCode == 75 && howls['k'] != null:
          howls['k'].play();
          break;

        case e.keyCode == 76 && howls['l'] != null:
          howls['l'].play();
          break;

        case e.keyCode == 77 && howls['m'] != null:
          howls['m'].play();
          break;

        case e.keyCode == 78 && howls['n'] != null:
          howls['n'].play();
          break;

        case e.keyCode == 79 && howls['o'] != null:
          howls['o'].play();
          break;

        case e.keyCode == 80 && howls['p'] != null:
          howls['p'].play();
          break;

        case e.keyCode == 81 && howls['q'] != null:
          howls['q'].play();
          break;

        case e.keyCode == 82 && howls['r'] != null:
          howls['r'].play();
          break;

        case e.keyCode == 83 && howls['s'] != null:
          howls['s'].play();
          break;

        case e.keyCode == 84 && howls['t'] != null:
          howls['t'].play();
          break;

        case e.keyCode == 85 && howls['u'] != null:
          howls['u'].play();
          break;

        case e.keyCode == 86 && howls['v'] != null:
          howls['v'].play();
          break;

        case e.keyCode == 87 && howls['w'] != null:
          howls['w'].play();
          break;

        case e.keyCode == 88 && howls['x'] != null:
          howls['x'].play();
          break;

        case e.keyCode == 89 && howls['y'] != null:
          howls['y'].play();
          break;

        case e.keyCode == 90 && howls['z'] != null:
          howls['z'].play();
          break;
    }
}
