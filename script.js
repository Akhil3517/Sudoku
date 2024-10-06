// var numSelected = null;
// var tileSelected = null;

// var errors = 0;

// var board = [
//     "--74916-5",
//     "2---6-3-9",
//     "-----7-1-",
//     "-586----4",
//     "--3----9-",
//     "--62--187",
//     "9-4-7---2",
//     "67-83----",
//     "81--45---"
// ]

// var solution = [
//     "387491625",
//     "241568379",
//     "569327418",
//     "758619234",
//     "123784596",
//     "496253187",
//     "934176852",
//     "675832941",
//     "812945763"
// ]

// window.onload = function() {
//     setGame();
// }

// function setGame() {
//     // Digits 1-9
//     for (let i = 1; i <= 9; i++) {
//         //<div id="1" class="number">1</div>
//         let number = document.createElement("div");
//         number.id = i
//         number.innerText = i;
//         number.addEventListener("click", selectNumber);
//         number.classList.add("number");
//         document.getElementById("digits").appendChild(number);
//     }

//     // Board 9x9
//     for (let r = 0; r < 9; r++) {
//         for (let c = 0; c < 9; c++) {
//             let tile = document.createElement("div");
//             tile.id = r.toString() + "-" + c.toString();
//             if (board[r][c] != "-") {
//                 tile.innerText = board[r][c];
//                 tile.classList.add("tile-start");
//             }
//             if (r == 2 || r == 5) {
//                 tile.classList.add("horizontal-line");
//             }
//             if (c == 2 || c == 5) {
//                 tile.classList.add("vertical-line");
//             }
//             tile.addEventListener("click", selectTile);
//             tile.classList.add("tile");
//             document.getElementById("board").append(tile);
//         }
//     }
// }

// function selectNumber(){
//     if (numSelected != null) {
//         numSelected.classList.remove("number-selected");
//     }
//     numSelected = this;
//     numSelected.classList.add("number-selected");
// }

// function selectTile() {
//     if (numSelected) {
//         if (this.innerText != "") {
//             return;
//         }

//         // "0-0" "0-1" .. "3-1"
//         let coords = this.id.split("-"); //["0", "0"]
//         let r = parseInt(coords[0]);
//         let c = parseInt(coords[1]);

//         if (solution[r][c] == numSelected.id) {
//             this.innerText = numSelected.id;
//         }
//         else {
//             errors += 1;
//             document.getElementById("errors").innerText = errors;
//         }
//     }
// }
// function solveSudoku() {
//     const board = getBoard();
    
//     if (!isValidSudoku(board)) {
//         alert("The entered Sudoku is invalid. Please correct the grid.");
//         return;
//     }

//     if (isSolved(board)) {
//         alert("Well done! The Sudoku is already solved.");
//     } else if (solve(board)) {
//         setBoard(board);
//         alert("Let's go! The Sudoku is solved.");
//     } else {
//         alert("No solution exists for the given Sudoku.");
//     }
// }

// // Get the board values from the input fields
// function getBoard() {
//     let board = [];
//     for (let i = 0; i < 9; i++) {
//         board[i] = [];
//         for (let j = 0; j < 9; j++) {
//             let cell = document.getElementById(`cell-${i}-${j}`).value;
//             board[i][j] = cell === "" ? 0 : parseInt(cell);
//         }
//     }
//     return board;
// }

// // Set the solved values back into the input fields
// function setBoard(board) {
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             document.getElementById(`cell-${i}-${j}`).value = board[i][j] === 0 ? "" : board[i][j];
//         }
//     }
// }

// // Solves the Sudoku using backtracking
// function solve(board) {
//     let empty = findEmpty(board);
//     if (!empty) return true;

//     let [row, col] = empty;
//     for (let num = 1; num <= 9; num++) {
//         if (isValid(board, num, row, col)) {
//             board[row][col] = num;

//             if (solve(board)) return true;

//             board[row][col] = 0;
//         }
//     }
//     return false;
// }

// // Find empty cells (0 value)
// function findEmpty(board) {
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             if (board[i][j] === 0) return [i, j];
//         }
//     }
//     return null;
// }

// // Check if the board is valid for the current number
// function isValid(board, num, row, col) {
//     // Check row
//     for (let i = 0; i < 9; i++) {
//         if (board[row][i] === num) return false;
//     }

//     // Check column
//     for (let i = 0; i < 9; i++) {
//         if (board[i][col] === num) return false;
//     }

//     // Check 3x3 sub-grid
//     let startRow = Math.floor(row / 3) * 3;
//     let startCol = Math.floor(col / 3) * 3;
//     for (let i = startRow; i < startRow + 3; i++) {
//         for (let j = startCol; j < startCol + 3; j++) {
//             if (board[i][j] === num) return false;
//         }
//     }

//     return true;
// }

// // Check if the Sudoku is already solved
// function isSolved(board) {
//     return findEmpty(board) === null;
// }

// // Validate the initial Sudoku
// function isValidSudoku(board) {
//     for (let row = 0; row < 9; row++) {
//         for (let col = 0; col < 9; col++) {
//             if (board[row][col] !== 0) {
//                 let num = board[row][col];
//                 board[row][col] = 0; // Temporarily clear cell to check validity
//                 if (!isValid(board, num, row, col)) {
//                     board[row][col] = num; // Restore original value
//                     return false; // Invalid Sudoku
//                 }
//                 board[row][col] = num; // Restore original value
//             }
//         }
//     }
//     return true;
// }

// // Clear the grid (reset all cells to empty)
// function clearGrid() {
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             document.getElementById(`cell-${i}-${j}`).value = "";
//         }
//     }
// }




// function solveSudoku(){
//     const board=setboard();
//     if(!Valid(board)){
//         alert("Invalid")
//         return;
//     }
//     let s=solve(board)
//     if(s){
//         alert("Sudoku solved congo")
//     }
//     else{
//         alert("invalid input")
//     }
// }
// function solve (board){
//     let ind=null
//     for (let i = 0; i < 9; i++) {         
//         for (let j = 0; j < 9; j++) {             
//             if (board[i][j] == 0) {
//                 ind = [i,j]
//                 break;
//             }         
//         }     
//     }
//     if (!ind) {
//         for (let i = 0; i < 9; i++) {         
//             for (let j = 0; j < 9; j++) {             
//                 var Id = "cell-" + i + "-" + j;
//                 var c = document.getElementById(Id);
//                 if (board[i][j] === 0) {
//                 c.value = "";
//                 } else {
//                 c.value = board[i][j];
//                 }        
//             }     
//         }
//         return true;
//     } 
//     let [row, col] = empty;     
//     for (let num = 1; num <= 9; num++) {         
//         if (isValid(board, num, row, col)) {             
//             board[row][col] = num;              

//             if (solve(board)) return true;              

//             board[row][col] = 0;         
//         }     
//     }     
//     return false; 

// }   
// function valid(board){
//     for (let row = 0; row < 9; row++) {
//         for (let col = 0; col < 9; col++) {
//             if (board[row][col] !== 0) {
//                 let num = board[row][col];
//                 board[row][col] = 0; 
//                 if (!isValid(board, num, row, col)) {
//                     board[row][col] = num; 
//                     return false; 
//                 }
                
//                 board[row][col] = num; 
//             }
//         }
//     }
//     return true;
// }
// function isValid(board, num, row, col) {

//     for (let i = 0; i < 9; i++) {
//         if (board[row][i] === num) return false;
//     }

    
//     for (let i = 0; i < 9; i++) {
//         if (board[i][col] === num) return false;
//     }
//     let startRow = Math.floor(row / 3) * 3;
//     let startCol = Math.floor(col / 3) * 3;
//     for (let i = startRow; i < startRow + 3; i++) {
//         for (let j = startCol; j < startCol + 3; j++) {
//             if (board[i][j] === num) return false;
//         }
//     }

//     return true;
// }
// function clearbox() {
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             var Id = "cell-" + i + "-" + j;
//             var c = document.getElementById(Id);
//             c.value = "";

//         }
//     }
// }


function solveSudoku() {
    const board = getBoard();
    
    if (!isValidSudoku(board)) {
        alert("The entered Sudoku is invalid. Please correct the grid.");
        return;
    }

    if (isSolved(board)) {
        alert("Well done! The Sudoku is already solved.");
    } else if (solve(board)) {
        setBoard(board);
        alert("Let's go! The Sudoku is solved.");
    } else {
        alert("No solution exists for the given Sudoku.");
    }
}

function getBoard() {
    let board = [];
    for (let i = 0; i < 9; i++) {
        board[i] = [];
        for (let j = 0; j < 9; j++) {
            let cell = document.getElementById(`cell-${i}-${j}`).value;
            board[i][j] = cell === "" ? 0 : parseInt(cell);
        }
    }
    return board;
}

function setBoard(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            document.getElementById(`cell-${i}-${j}`).value = board[i][j] === 0 ? "" : board[i][j];
        }
    }
}

function solve(board) {
    let empty = findEmpty(board);
    if (!empty) return true;

    let [row, col] = empty;
    for (let num = 1; num <= 9; num++) {
        if (isValid(board, num, row, col)) {
            board[row][col] = num;

            if (solve(board)) return true;

            board[row][col] = 0;
        }
    }
    return false;
}

function findEmpty(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === 0) return [i, j];
        }
    }
    return null;
}

function isValid(board, num, row, col) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num) return false;
    }

    for (let i = 0; i < 9; i++) {
        if (board[i][col] === num) return false;
    }

    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (board[i][j] === num) return false;
        }
    }

    return true;
}

function isSolved(board) {
    return findEmpty(board) === null;
}

function isValidSudoku(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] !== 0) {
                let num = board[row][col];
                board[row][col] = 0; 
                if (!isValid(board, num, row, col)) {
                    board[row][col] = num; 
                    return false; 
                }
                board[row][col] = num; 
            }
        }
    }
    return true;
}

function clearbox() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            document.getElementById(`cell-${i}-${j}`).value = "";
        }
    }
}





