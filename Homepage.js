let amountOfSaladsAdded = 0
let before = amountOfSaladsAdded
function myFunction() {
    //document.getElementById("demo").innerHTML = "To call us, dial: 0457892123";
    alert("To call us, dial: 0457892123")
    
}

async function addToCart() {
    amountOfSaladsAdded++;
    before = amountOfSaladsAdded
    alert("Item added to cart!")
    await sleep(1)
    document.getElementById("demo").innerHTML = ""
    console.log("cool")
    console.log(localStorage.amountOfSaladsAdded)
    if (typeof(Storage) !== "undefined") {
        if (localStorage.amountOfSaladsAdded) {
          localStorage.amountOfSaladsAdded = Number(localStorage.amountOfSaladsAdded)+1;
        } else {
          localStorage.amountOfSaladsAdded = 1;
        }
        //document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
      }
    
    

}


   async function sleep(sec){
       return new Promise((resolve) => setTimeout(resolve, sec*1000))
}


function checkout(){
    alert("Order placed!")
    localStorage.amountOfSaladsAdded = 0
}

if (typeof(Storage) !== "undefined") {
   localStorage.setItem("amount",before)
  } else {
    // Sorry! No Web Storage support..
  }


function storage() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.amountOfSaladsAdded) {
        localStorage.amountOfSaladsAdded = Number(localStorage.amountOfSaladsAdded)+1;
      } else {
        localStorage.amountOfSaladsAdded = 1;
      }
      //document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

console.log(localStorage.amountOfSaladsAdded)

document.getElementById("amm").innerHTML="Items in cart: " + localStorage.amountOfSaladsAdded
document.getElementById("amm").style.fontSize = "50px"
document.getElementById("amm").style.marginTop = "40px"
document.getElementById("amm2").innerHTML="  Price: "+5.99*localStorage.amountOfSaladsAdded
document.getElementById("amm2").style.fontSize = "50px"