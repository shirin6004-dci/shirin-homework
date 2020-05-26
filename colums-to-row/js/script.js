let arr = [
    [2, 5, 8],
    [5, 9, 2],
    [7, 2, 3],
    [4, 9, 6]
]

var arrRevers = []
let col = 0;

for(let j = 0; j< arr.length;j++){
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        for (let x = 0; x < arr[i].length; x++) {
               
                if (x == col) {
                   temp.push(arr[i][x]) 
                }
        }
    }
        col ++
        if(temp.length>0)
        arrRevers.push(temp)
}



console.log(arrRevers);


