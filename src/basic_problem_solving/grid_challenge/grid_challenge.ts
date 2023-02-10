export default function gridChallenge(grid: string[]): string {
    grid.sort()
    grid.map((g) => g.split(''))
    for(let i = 0; i < grid.length - 1; i++){
        for(let j = 0; j < grid[i].length; j++){
            console.log(grid[i][j], grid[i+1][j])
            if( grid[i][j] > grid[i+1][j]){
                return 'NO'
            }
        }
    }
    
    return 'YES'
}


// function gridChallenge(grid: string[]): string {
//     const length = grid.length,
//       rowGrid = Array<string[]>(length),
//       colGrid = Array<string[]>(length);
  
//     //We order every string present in the array. 
//     //We do this by transforming every string to an array, 
//     //then we call sort() and store the new sorted array in 
//     //a new 2D array that we will use later.
//     for (let i = 0; i < length; i++) rowGrid[i] = grid[i].split("").sort();
  
//     //We loop every column of the new 2D array
//     for (let j = 0; j < length; j++) {
//       //We extract evey column of the 2D array
//       colGrid[j] = rowGrid.map((word) => word[j]);
//       //We compare each column with its sorted version.
//       //If are not the same, then return "NO"
//       if (JSON.stringify(colGrid[j]) !== JSON.stringify(colGrid[j].sort()))
//         return "NO";
//     }
//     return "YES";
  
//   }