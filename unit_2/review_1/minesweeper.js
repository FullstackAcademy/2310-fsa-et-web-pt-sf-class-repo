/*
[
 [o o o o o]
 [o o o o o]
 [o o o o o]
 [o x o o o]
 [o o o o o]
]
 */

const createMinesweeperBoard = (height, width) => {
   const grid = [];

   for (let y = 0; y < height; ++y) {
       const row = [];

       for (let x = 0; x < width; ++x) {
           row.push('o');
       }

       grid.push(row);
   }

   const randY = Math.floor(Math.random() * height);
   const randX = Math.floor(Math.random() * width);

   grid[randY][randX] = 'x';

   return grid;
}

const minefield = createMinesweeperBoard(5, 5);

console.log(minefield);

// I am going to create a board of any size, with the 'o's in every position but 1. Return to me the x, y coordinates of the mine so that my troops dont hit it.

function findMine(field) {
    for (let y = 0; y < field.length; ++y) {
        const row = field[y];

        for (let x = 0; x < row.length; ++x) {
            const cell = row[x];

            if (cell === 'x') {
                return [x, y];
            }
        }
    }

    return 'Mine not found.';
}

console.log(findMine(minefield));
