var arr = ["a", "b", "c", "d", "e"];
var newArr=[];

function myArr(arr){
    for (var i=arr.length-1; i >= 0; i--) {
        newArr.push(arr[i])
        
    }return newArr[i]
}
myArr(arr);
arr=newArr;
console.log(arr);



var arr = ["a", "b", "c", "d", "e"];

function myArr(arr){
    var temp=arr[0];
    arr[0]=arr[4]
    arr[4]=temp

}



var arr = ["a", "b", "c", "d", "e"];
var newArr=[];

function myArr(arr){
    for (i=0; i <arr.length;i++){
        newArr[i]=arr[arr.length-1-i]
    }return newArr
} 

function reverse(){
    for (var x =0;x<arr.length/2;x++){
        var y=arr.length-1-x;
        var temp =arr[x]
        arr[x]=arr[y];
        arr[y]=temp
    }
}

var arr2= ["a", "b", "c", "d", "e"];
var temp=[]

function reverse(arr){
counter=arr.length-1
while (counter >=0){
    temp.push(arr[counter]);
        counter--
}
}

reverse(arr2);

arr2=temp;
console.log(arr2)
