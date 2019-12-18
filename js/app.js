// you should add titles to the gameborad to the dom
//the ai must select random tile pn the board
//you will select titles and the game will indicate a hit or a isss
//On hit the game is over
//Add a button to start a new game

//Setting the tile for the board
 var tile = document.getElementById("gameboard");
// Getting the win condition
 var wincon = document.getElementById('winner');

let win = false;


//The gameBoard tiles
 var board = [
  {tile: 0},
  {tile: 1},
  {tile: 2},
  {tile: 3},
  {tile: 4},
  {tile: 5},
  {tile: 6},
  {tile: 7},
  {tile: 8},
  {tile: 9},
  {tile: 10},
  {tile: 11},
  {tile: 12},
  {tile: 13},
  {tile: 14},
  {tile: 15},
 ]


//make the tiles and add the css
for (let i = 0; i < board.length; i++) {
  var tiles = document.createElement('div');
  console.log(tiles);
  tiles.classList.add('square');
  tiles.setAttribute('data-value',i)
  tile.appendChild(tiles)
//check to see if the ship is there when click on
  tiles.addEventListener('click',function () {
    checkShip(this)
  })
}


//Make the ship randomly appear on a square
var AI = board[Math.floor(Math.random() * Math.floor(board.length))]
// console.log(AI);


//Check to see if you hit or miss the ship
function checkShip(hitMiss) {
  let tile = hitMiss.getAttribute("data-value")

 if (!win) {
  if (tile == AI.tile) {
    hitMiss.style.backgroundColor = "green"
    wincon.innerText = 'You hit the ship!';
    win = true;
  } else {
    hitMiss.style.backgroundColor = "red"
    wincon.innerText = 'You missed try again.'
  }
 }
}
