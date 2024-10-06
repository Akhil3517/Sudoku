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





