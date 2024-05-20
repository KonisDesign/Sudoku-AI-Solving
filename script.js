function estValide(sudoku, ligne, colonne, nombre) {
    for (let j = 0; j < 9; j++) {
        if (sudoku[ligne][j] === nombre) {
            return false;
        }
    }

    for (let i = 0; i < 9; i++) {
        if (sudoku[i][colonne] === nombre) {
            return false;
        }
    }

    const debutLigneRegion = Math.floor(ligne / 3) * 3;
    const debutColonneRegion = Math.floor(colonne / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (sudoku[debutLigneRegion + i][debutColonneRegion + j] === nombre) {
                return false;
            }
        }
    }

    return true;
}

function completerSudoku(sudoku) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (sudoku[i][j] === 0) {
                for (let nombre = 1; nombre <= 9; nombre++) {
                    if (estValide(sudoku, i, j, nombre)) {
                        sudoku[i][j] = nombre;
                        if (completerSudoku(sudoku)) {
                            return true;
                        }
                        sudoku[i][j] = 0;
                    }
                }
                return false;
            }
        }
    }
    afficherSudoku(sudoku);
}

let sudoku = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

console.log("Sudoku initial : ");
afficherSudoku(sudoku);

function afficherSudoku(sudoku) {
    let answer;
    for (let i = 0; i < 9; i++) {
        answer = answer + sudoku[i].join(" ") + '\n';
    }
    const outputElement = document.getElementById("answer");
        outputElement.textContent = answer;
}