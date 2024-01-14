
const fruits = ["mango", "apple", "orange", "guava"];

const init = () => {
  document.getElementById("fruits").innerHTML = "";
  fruits.sort().forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    document.getElementById("fruits").appendChild(li);
  });
};
//create custom prototype
Array.prototype.myPush=function(...a){
   this.push(a[0])
   init()
}

// Handle add item
const addItem = () => {
  //===========
  // method-1
  //===========
  //   fruits.push(document.getElementById("input").value);
  //   init();
  
  //===========
  // method-2: create custom prototype to insert init() into it.
  //===========
  fruits.myPush(document.getElementById("input").value);
};

init();
