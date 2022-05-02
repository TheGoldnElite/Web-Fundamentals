var arr2d = [[2, 5, 8],
            [3, 6, 1],
            [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
//console.log(arr2d[0][3]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array


//loops over the outer array
for(var i =0; i<arr2d.length; i++){
    var inner = arr2d[i]
    //loop over the inner array
    for(var y = 0; inner.length; y++){
        console.log(arr2d[i][y])
        
    }

}

var flattend= ([ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
function flattend(arr2d) {
    var flat = [];
    for ( var i = 0; i <arr2d.length;i++){
        var inner=arr2d[i];
        for (var y=0;inner.length;y++){
        flat.push(inner[i][y]);
    }
    return flat;
}
} 
var flatten = flattend();
console.log(flattend()); 