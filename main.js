current_player = 0;
board = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]];
b = 1;
r = 2;


function newGame(){
  current_player = 0
  for (var y = 0; y < 6; y++){
    for (var x = 0; x < 7; x++){
      spot = document.createElement("div");
      spot.setAttribute("id", 'spot_'+ x);
      spot.setAttribute("style", 'background:grey');
      z = 'this';
      spot.setAttribute("onclick", 'move('+z+','+x+','+y+')');
      document.getElementById('game_container').appendChild(spot);
    }
  }
}

function move(checker,x,y){
  console.log("x,y",x,y);
  if (current_player == 0 && checker.style.background == 'grey'){
    checker.style.background = 'black';
    current_player = 1;
    board[y][x] = b;
  }
  else if (current_player == 1 && checker.style.background == 'grey'){
      checker.style.background = 'red';
      current_player = 0;
      board[y][x] = r;
    }
    checkVictory();
}

function checkVictory(x,y){
  checkHorizontal(x,y);
  checkVertical(x,y);
}

function checkHorizontal(x,y){
      current_val = null;
      previous_val = 0;
      counter = 0;


      for (var y = 0; y < 6; y++){
        for (var x = 0; x < 7; x++){
          current_val = board[y][x];
          console.log('counter',counter);
          if (current_val === previous_val && current_val !== 0){
            counter += 1;
          } else {
            counter = 0;
          }
          if (counter == 3){
            alert('win');
          }
          previous_val = current_val;
        }
      counter = 0;
      previous_val = 0;
      }
    }

    function checkVertical(x,y){
      current_val = null;
      previous_val = 0;
      counter = 0;

      for (var x = 0; x < 7; x++){
        for (var y = 0; y < 6; y++){
          current_val = board[y][x];
          console.log('counter',counter);
          if (current_val === previous_val && current_val !== 0){
            counter += 1;
          } else {
            counter = 0;
          }
          if (counter == 3){
            alert('win');
          }
          previous_val = current_val;
        }
      counter = 0;
      previous_val = 0;
      }
    }
