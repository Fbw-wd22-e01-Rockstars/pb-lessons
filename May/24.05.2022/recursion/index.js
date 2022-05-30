// let sumArr = function(arr){

//   if(arr.length === 1){
//       return arr[0];
//   }
//   return arr.pop() +  sumArr(arr)
//     //      3      + sumArr([1,2])
//     //      3      + 2 + sumArr([1])
//     //      3      + 2 +  1 
//     //           6 
// // return (3 + return 2 + return 1 )
// } 
//     const array = [1, 2, 3];
//     console.log(sumArr(array));

let fiboArr = (num) => {
    if(num === 0){
        return [0]
    }
    if( num == 1){
       return [0,1]
    }else{
        let arr = fiboArr(num-1);
        arr.push(arr[arr.length -1] + arr[arr.length -2]);
        return arr
    }
}
console.log(fiboArr(0));
console.log(fiboArr(1));
console.log(fiboArr(2));
console.log(fiboArr(5));