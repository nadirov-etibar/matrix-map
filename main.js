let n = 7;
let m = 3;
let matrix = [[5,4,4], [4,3,4], [3,2,4], [2,2,2], [3,3,4], [1,4,4], [4,1,1]];

let sum = 0;
let output = document.getElementById("a");


let areaOfMatrix = () => {
    let row = matrix.length;

    for(let i = 0; i < n; i++){
        let column = matrix[i].length;
        for (let j = 0; j < m; j++){

            if (j + 1 < column && matrix[i][j] === matrix[i][j+1]){
                if (i + 1 < row && matrix[i][j] === matrix[i + 1][j] && matrix[i][j] !== matrix[i+1][j+1]) {
                  sum = sum - 1;
                }
                continue;
            }

            if(i + 1 < row && matrix[i][j] == matrix[i+1][j]){
                if(j + 1 < column && matrix[i][j] === matrix[i][j+1] && matrix[i][j] !== matrix[i+1][j+1]){
                    sum = sum - 1;
                }

                continue;
            }

            sum = sum + 1;
        }
    }

    output.innerText = sum;

}

areaOfMatrix();
