// function first(myfunction){
//     setTimeout(()=>{
//         console.log(" the first one...");
//         myfunction();
//     },1000); // 1000 = 1 sec
    
// }

// function second(){
//     console.log(" the second one...");
// }
// first(second);
// //second();

function getLanguage(callback){
    console.log(" greeting...");
    const language = "German";
    callback(language);

}
function greeter(lang){
 if(lang ==="German"){
     console.log("Hallo");
 }
 else if(lang === "English"){
     console.log("Hello");
 }
}
getLanguage(greeter);



const numbers = [1,2,3,4,5,6,7,8,9];
// filtering the array to get the numbers > 4 
// const filtered = numbers.filter((item)=>{
//    return item > 4
// });
// console.log(filtered);
function filterArr(item){
    return item > 4
}
const result = numbers.filter(filterArr);
//console.log(result);



// request to  server 
function getData(callback){
   setTimeout(()=>{
    console.log("getting images from server");
    callback();
   },3000)
}
function renderData(){
    console.log("rendering images to browser");
}
getData(renderData);
//renderData();