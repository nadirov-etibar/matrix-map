let n = 7;
let m = 3;
let matrix = [[5,4,4], [4,3,4], [3,2,4], [2,2,2], [3,3,4], [1,4,4], [4,1,1]];

let sum = 0;
let output = document.getElementById("a");


let areaOfMatrix = () => {
    for(let i = 0; i < n; i++){
        for (let j = 0; j < m; j++){
            sum = sum + 1;

            if (matrix[i][j] === matrix[i][j+1]){
                sum = sum - 1;
            }

            if (typeof matrix[i+1] !== "undefined"){
                if (matrix[i][j] === matrix[i+1][j]){
                    sum = sum - 1;
                }
            }
        }
    }

    output.innerText = sum;

}

areaOfMatrix();