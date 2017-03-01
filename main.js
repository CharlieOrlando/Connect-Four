turn_counter = 1;
checker_spot = [];
current_player = black;
board = [];

function fillBoard(){
  for (var x = 0; x < 7; x++){
    for (var y = 0; y < 6; y++){
      board = 
  }
}

function newGame(){
  turn_counter = 1;
  for (var x = 0; x < 7; x++){
    for (var y = 0; y < 6; y++){
      spot = document.createElement("div");
      spot.setAttribute("id", 'spot_'+ x);
      spot.setAttribute("style", 'background:grey');
      spot.setAttribute("onclick", 'move(this,\''+x+'\')');
      document.getElementById('game_container').appendChild(spot);
    }
  }
}

function move(color, x, y){
  if (turn_counter % 2 == 0 && color.style.background == 'grey'){
    color.style.background = 'black';
    turn_counter++;
  }
  else if (turn_counter % 2 > 0 && color.style.background == 'grey'){
      color.style.background = 'red';
      turn_counter++;
    }
}
