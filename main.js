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
new_y = null;


function newGame(){
  current_player = 0
  for (var y = 0; y < 6; y++){
    for (var x = 0; x < 7; x++){
      spot = document.createElement("div");
      spot.setAttribute("id", x+','+y);
      spot.setAttribute("style", 'background:grey');
      z = 'this';
      spot.setAttribute("onclick", 'move('+z+','+x+','+y+')');
      document.getElementById('game_container').appendChild(spot);
    }
  }
}

function move(checker,x,y){
  checkColumn(x,y);
  console.log('new_y',new_y);
  placeChecker(x, new_y);
  checkVictory(x,y);
}

function checkVictory(x,y){
  checkHorizontal(x,y);
  checkVertical(x,y);
  checkDiagonal(x,y);
}

function checkHorizontal(x,y){
      current_val = null;
      previous_val = 0;
      counter = 0;


      for (var y = 0; y < 6; y++){
        for (var x = 0; x < 7; x++){
          current_val = board[y][x];
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

    function checkDiagonal(){
      current_val = null;
      previous_val = 0;
      counter = 0;
      x_temp = 0;
      y_temp = 0;

      //down-right top
      for (var x = 0; x < 7; x++){
        x_temp = x;
        y_temp = 0;

        while (x_temp < 7 && y_temp < 6){
          current_val = board[y_temp][x_temp];
          if (current_val === previous_val && current_val !== 0){
            counter += 1;
          } else {
            counter = 0;
          }
          if (counter == 3){
            alert('win');
          }
          previous_val = current_val;
          x_temp++;
          y_temp++;
        }
      counter = 0;
      previous_val = 0;
      }

      //down-left top
      for (var x = 0; x < 7; x++){
        x_temp = x;
        y_temp = 0;

        while (0 <= x_temp  && y_temp < 6){
          current_val = board[y_temp][x_temp];
          if (current_val === previous_val && current_val !== 0){
            counter += 1;
          } else {
            counter = 0;
          }
          if (counter == 3){
            alert('win');
          }
          previous_val = current_val;
          x_temp--;
          y_temp++;
        }
      counter = 0;
      previous_val = 0;
      }

      //down-right from left
      for (var y = 0; y < 7; y++){
        x_temp = 0;
        y_temp = y;

        while (x_temp < 7 && y_temp < 6){
          current_val = board[y_temp][x_temp];
          if (current_val === previous_val && current_val !== 0){
            counter += 1;
          } else {
            counter = 0;
          }
          if (counter == 3){
            alert('win');
          }
          previous_val = current_val;
          x_temp++;
          y_temp++;
        }
      counter = 0;
      previous_val = 0;
      }

      //down-left from right
      for (var y = 0; y < 7; y++){
        x_temp = 6;
        y_temp = y;

        while (0 <= x_temp  && y_temp < 6){
          current_val = board[y_temp][x_temp];
          if (current_val === previous_val && current_val !== 0){
            counter += 1;
          } else {
            counter = 0;
          }
          if (counter == 3){
            alert('win');
          }
          previous_val = current_val;
          x_temp--;
          y_temp++;
        }
      counter = 0;
      previous_val = 0;
      }
    }

function checkColumn(x,y){
  for (y = 0; y < 6; y++){
    if (board[y][x] == 0)
      new_y = y;
  }
}

function placeChecker(x,new_y){
  div_spot = document.getElementById(x+','+new_y);
  if (current_player == 0 && div_spot.style.background == 'grey'){
    div_spot.style.background = 'black';
    current_player = 1;
    board[new_y][x] = b;
  }
  else if (current_player == 1 && div_spot.style.background == 'grey'){
      div_spot.style.background = 'red';
      current_player = 0;
      board[new_y][x] = r;
    }
}
