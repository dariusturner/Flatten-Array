let testArray = [[1,2,[3]],4];
let newArray = [];

function flattenArray(array) {
    for (var i = 0; i < testArray.length; i++) {
        if ( Array.isArray(testArray[i])) {
            for (var n = 0; n < testArray[i].length; n++)
            if ( Array.isArray(testArray[i][n])) {
                for ( var x = 0; x < testArray[i][n].length; x++)
                    newArray.push(testArray[i][n][x]);
            } else {
                newArray.push(testArray[i][n]);
            }
        } else {
            newArray.push(testArray[i]);
        }
    }
        console.log(newArray);
}

flattenArray(testArray);