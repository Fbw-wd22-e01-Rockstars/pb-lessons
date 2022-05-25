const numArr1 = [1, 4, 4,4, 7, 7,7,7]; // 
function uniqueArr(arr){
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            for(let a = i;a<arr.length;a++){
                arr.splice(a,1);
            }
            
        }
    }
}
function uniqueArr2(arr){
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
           do {
            arr.splice(i,1);

           } while (arr[i]=== arr[i+1]);
        }
    }
}

uniqueArr2(numArr1);
//console.log(numArr1);


const boxes = [{ num:1 ,open:false },{ num:2 ,open:false },{ num:3 ,open:false },{ num:4 ,open:false },{ num:5 ,open:false },{ num:6 ,open:false },{ num:7 ,open:false },{ num:8 ,open:false },{ num:9 ,open:false },{ num:10 ,open:false }];
for(let a = 0; a < boxes.length; a++){
    for(let i =a+1 ; i <= boxes.length; i++){
        console.log(i);
       if(i % 2 === 0){
        //boxes[i].open = true;
        //console.log(boxes[i]);
       }
       else{
        //boxes[i].open =  !boxes[i].open 
       }
       
      }

}
//console.log(boxes);
// for(let i =1 ; i <= boxes.length; i+=2){
  
//   boxes[i].open = true;
//   console.log(boxes[i]);
// }
// for(let i = 2 ;i <= boxes.length; i+=3){
//     boxes[i].open =  !boxes[i].open
//   console.log(boxes[i]);

// }