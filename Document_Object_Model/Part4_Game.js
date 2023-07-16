// Restart Game Button
var restart = document.querySelector('#b');

// Grab all the squares (all the table cells)
var squares = document.querySelectorAll("td");


// Clear Squares Function (need to iterate all the squares)
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
  }

}
restart.addEventListener('click',clearBoard)


// Create a function that will check the square marker


// First by the method that may be repetative (need to have nine of them) but intuitive
var cellOne = document.querySelector('#one')
cellOne.addEventListener('click', function (params) {
  if (cellOne.textContent === ''){
    cellOne.textContent = 'X'
  }else if (cellOne.textContent === 'X') {
    cellOne.textContent = 'O'
  }else {
    cellOne.textContent = ''
  }
})

// The more efficient solution below, use `this` inside a function 
function changeMarker(){
    if(this.textContent === ''){
      this.textContent = 'X';
      // console.log(marker)
    }else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }
};

// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}
