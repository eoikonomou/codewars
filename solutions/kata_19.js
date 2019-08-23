const validSolution = require('./kata_17');
// Did I Finish my Sudoku?

/*
Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter.
If the board is valid return 'Finished!', otherwise return 'Try again!'
*/

function doneOrNot(board) {
  return validSolution(board) ? 'Finished!' : 'Try again!';
}

module.exports = doneOrNot;
