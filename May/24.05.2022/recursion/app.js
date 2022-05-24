// countdown 10 to 0 

for(let i = 10 ; i >= 0 ; i--){
 //console.log(i);
}


// let counter = 10
// do {
//  console.log(counter --);
// } while(counter > 0);
///////////////////////////////////

// while
// let counter = 10 ;
// while(counter >= 0 ){
    
//     console.log(counter);
//     counter --
// }

///////////////////
function countdown(num){
    console.log(num);
    if(num > 0) {
        return countdown(num -1)
    }
    
}
//countdown(30);

// factorial 6 = 6 x 5 x 4 x 3 x 2 x 1
// factorial 3 = 3 x 2 x 1

function factor(num){
    let result = 1 ;
    for(let i = num ; i > 1 ;i--){
        result = result * i
    }
    return result;
}
console.log("factor 5 ",factor(5));
console.log("factor 4 ",factor(4));
