// DOM elements
const price = document.getElementById("price");
const totalPrice = document.getElementById("totalPrice");
const addToCart = document.getElementById("addToCart");


const ProductPrice= 500;
let total=0;
 
// Update initial total display
price.innerText = `৳ ${ProductPrice}`;
totalPrice.innerText = `Total: ৳ ${total}`;

addToCart.addEventListener("click",()=>{
   total+=ProductPrice;

   //updating the UI
   totalPrice.innerText = `Total: ৳ ${total}`
})