current_player = 0;
board = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]];


function newGame(){
  current_player = 0
  for (var x = 0; x < 7; x++){
    for (var y = 0; y < 6; y++){
      spot = document.createElement("div");
      spot.setAttribute("id", 'spot_'+ x);
      spot.setAttribute("style", 'background:grey');
      spot.setAttribute("onclick", 'move(this,\''+x+','+y+'\')');
      document.getElementById('game_container').appendChild(spot);
    }
  }
}

function move(checker,x,y){
  if (current_player == 0 && checker.style.background == 'grey'){
    checker.style.background = 'black';
    current_player = 1;
    board[x,y] = 'b';
    checker.innerHTML = board[x,y];
    checkVictory();
    console.log(board[x,y]);
  }
  else if (current_player == 1 && checker.style.background == 'grey'){
      checker.style.background = 'red';
      current_player = 0;
      board[x,y] = 'r';
      checker.innerHTML = board[x,y];
      checkVictory();
    }
    function checkVictory(){
      checkHorizontal();

    function checkHorizontal(){
      current_val = null;
      previous_val = 0;
      counter = 0;

      for (var x = 0; x < 7; x++){
        for (var y = 0; y < 6; y++){
          current_val = board[x,y];
          if (current_val === previous_val && current_val !== 0){
            counter++;
          } else{
            counter = 0;
          }
          if (counter == 3){
            alert('BLANK wins');
          }
          previous_val = current_val;
        }
      counter = 0;
      previous_val = 0;
      }
    }

  }
}
