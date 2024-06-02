let amountOfSaladsAdded = 0
let amountOfLettuceSaladsAdded = 0
let amountOfSpinachSaladsAdded = 0
let amountOfRussianSaladsAdded = 0
let before = amountOfSaladsAdded
function myFunction() {
    //document.getElementById("demo").innerHTML = "To call us, dial: 0457892123";
    alert("To call us, dial: 0457892123")
    
}

async function addToSpinachCart() {
    amountOfSaladsAdded++;
    before = amountOfSaladsAdded
    alert("Spinach salad added to cart!")
   
    
    document.getElementById("demo").innerHTML = ""
    console.log("cool")
    console.log(localStorage.amountOfSaladsAdded)

    if (typeof(Storage) !== "undefined") {
        if (localStorage.amountOfSaladsAdded) {
          localStorage.amountOfSaladsAdded= Number(localStorage.amountOfSaladsAdded)+0;
        } else {
          localStorage.amountOfSaladsAdded = 1;
        }
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
      }
      
      
      
  }



    async function addToSpinachCart2() {
      
      //before = amountOfSaladsAdded
      //alert("Spinach salad added to cart!")
      amountOfSpinachSaladsAdded++;
      
      document.getElementById("demo").innerHTML = ""
      console.log("cool")
      console.log(localStorage.amountOfSpinachSaladsAdded)
      if (typeof(Storage) !== "undefined") {
          if (localStorage.amountOfSpinachSaladsAdded) {

            localStorage.amountOfSpinachSaladsAdded= Number(localStorage.amountOfSpinachSaladsAdded)+1;
            amountOfSpinachSaladsAdded = localStorage.amountOfSpinachSaladsAdded

          } else {
            localStorage.amountOfSpinachSaladsAdded = 1;
          }
        } else {
          document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }
        
        
        
      }
   

async function addToLettuceCart() {
  amountOfSaladsAdded++;
  before = amountOfSaladsAdded
  alert("Lettuce salad added to cart!")
  amountOfLettuceSaladsAdded++;
  document.getElementById("demo").innerHTML = ""
  console.log("cool")
  console.log(localStorage.amountOfSaladsAdded)
  console.log(localStorage.amountOfLettuceSaladsAdded)
  if (typeof(Storage) !== "undefined") {
      if (localStorage.amountOfSaladsAdded, localStorage.amountOfLettuceSaladsAdded) {
        localStorage.amountOfSaladsAdded = Number(localStorage.amountOfSaladsAdded)+0;
        localStorage.amountOfLettuceSaladsAdded = Number(localStorage.amountOfLettuceSaladsAdded)+1;
      } else {
        localStorage.amountOfSaladsAdded = 1;
        localStorage.amountOfLettuceSaladsAdded = 1;
      }
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  
  

}

async function addToRussianCart() {
  amountOfSaladsAdded++;
  before = amountOfSaladsAdded
  alert("Russian salad added to cart!")
  amountOfRussianSaladsAdded++;

  document.getElementById("demo").innerHTML = ""
  console.log("cool")
  console.log(localStorage.amountOfSaladsAdded)
  console.log(localStorage.amountOfRussianSaladsAdded)
  if (typeof(Storage) !== "undefined") {
      if (localStorage.amountOfSaladsAdded,localStorage.amountOfRussianSaladsAdded) {
        localStorage.amountOfSaladsAdded = Number(localStorage.amountOfSaladsAdded)+0;
        localStorage.amountOfRussianSaladsAdded = Number(localStorage.amountOfRussianSaladsAdded)+1;
      } else {
        localStorage.amountOfSaladsAdded = 1;
        localStorage.amountOfRussianSaladsAdded = 1;
      }
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  
  

}


function checkout(){
    if (localStorage.amountOfSaladsAdded==0 ){
        
        alert("please add an item in your cart!")
        //sleep()
        //console.log(char.textbox.value)
        
    } else if (localStorage.amountOfSaladsAdded>0 && before1>="15",before2>="2"){
      
        alert("Order placed!")
        //document.getElementById("chout").href = "index.html"
        window.location.href = "index.html"
        localStorage.amountOfSaladsAdded = 0
        localStorage.amountOfLettuceSaladsAdded = 0
        localStorage.amountOfRussianSaladsAdded = 0
        localStorage.amountOfSpinachSaladsAdded = 0
            
            
    }  else {alert("Please enter valid details!")}
       
   
}


async function sleep(sec){
    return new Promise((resolve) => setTimeout(resolve, sec*1000))
}

let textbox = document.getElementById("textbox");
let tb2 = document.getElementById("pin");
let char;
let char2;
let before1;
let before2;



textbox.addEventListener("keyup", function(){
    char = textbox.value.split('')
    before1 = char
    console.log(char.length)
})
tb2.addEventListener("keyup", function(){
    char2 = tb2.value.split("")
    before2 = char2
    console.log(before2.length)
})


function storage() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.amountOfSaladsAdded) {
        localStorage.amountOfSaladsAdded = Number(localStorage.amountOfSaladsAdded)+1;
      } else {
        localStorage.amountOfSaladsAdded = 1;
      }
      
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

console.log(localStorage.amountOfSaladsAdded)

document.getElementById("amm").innerHTML="Items in cart: " + localStorage.amountOfSaladsAdded
document.getElementById("amm").style.fontSize = "50px"
document.getElementById("amm").style.marginTop = "40px"
document.getElementById("amm2").innerHTML="  Price: $"+5.99*localStorage.amountOfSaladsAdded
document.getElementById("amm2").style.fontSize = "50px"

let input = document.getElementById("no1")


