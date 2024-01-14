// let array=[]
let increment=0;
const container=document.querySelector(".container");


//fast: Batch update. Here only one DOM operation is done.
// while (increment<10000) {
//    array.push(++increment);
// }
// container.innerHTML=array.join(" ");

//slow: Single update, here 10000 times DOM operation is done.
// while (increment<10000) {
//    ++increment;
//    container.innerHTML += " "+ increment
// }