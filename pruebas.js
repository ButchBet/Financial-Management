//I'm writing a sistem tha help you choosing what doing with your monety, It depends of your entry and egress whitin a month.


alert("Hello, I'm here to help you with your management")
entry = Number(prompt("what is the entry this month?"))
egress = Number(prompt("Which are the expenditures at this month?"))
entryLessEgress = entry - egress;

function run() {
  validation()
}

//Here the customer choose what does want to do whit the money
function validation(){

if(entry > egress || entry > 0) {
valid = Number(prompt("You have " + entryLessEgress + " dollars, Would you like to do something whit this money?, Y:1/N:2"))
y = 1
n = 2

  if(valid === y){
  option = Number(prompt("Great, you have three options: Invest: 1, Speend: 2, Save in a bank: 3"))
  choose()

  }
  else if(valid === n){
    alert("Great, see you the next time")
  }
  else{
   alert("All right, see you next")
  }
}
else if(entry === egress){
  alert("Great, you have paid all")
}
else{
  alert("You don't have the necessary monery to pay the egresses")
}
}


//choosing function, the coustomer have 3 options, investing, spend or saving.
function choose(a){
  i = 1
  s = 2
  b = 3
    if(option === i){
      investingMoney = Number(prompt("Ok, how much money would you like investing?, actually you have " + entryLessEgress  + " dollars"))
      alert("Good, then we are going to invest "  + investingMoney)
      subtotal = entryLessEgress - investingMoney


      if(subtotal > 0){
        validation(subtotal)
      }
      else{
        alert("Great, have a nice")
      }
      }
     else if(option === s){
      spendMoney = Number(prompt("Ok, how much would you like spending?, actually you have " + entryLessEgress + " dollars"))
      alert("Good, then we are going to spend " + spendMoney)
      subtotal = entryLessEgress - spendMoney
      if(subtotal > 0){
        validation(subtotal)
      }
      else{
        alert("Great, have a nice")
      }
    }
     else if(option === b){
     saveBank = Number(prompt("Great, how much Would you like saving?, actually you have " + entryLessEgress + " dollars"))
     alert("Good, then we are going to save " + saveBank)
     subtotal = entryLessEgress - saveBank
     if(subtotal > 0){
      validation(subtotal)
    }
    else{
      alert("Great, have a nice")
    }
    }
  }

//The secondValidation works to repit a the petition of use the money with something, the firts validations did't work because
//when the total was > to 0 it returned  entryLessEgress again instead the new total. 
function secondValidation(total){
   if(total > 0) {
   valid = Number(prompt("You have " + total + " dollars, Would you like to do something whit this money?, Y:1/N:2"))
   y = 1
   n = 2

     if(valid === y){
     option = Number(prompt("Great, you have three options: Invest: 1, Speend: 2, Save in a bank: 3"))
     secondChoose(total)

     }
     else if(valid === n){
       alert("Great, see you the next time")
     }
     else{
      alert("All right, see you next")
     }
   }
   else if(entry === egress){
     alert("Great, you have paid all")
   }
   else{
     alert("You don't have the necessary monery to pay the egresses")
   }
 }

//This secondChoose is necessary to return the value subtotal when the first choose is completed. 
 function secondChoose(subtotal){
   i = 1
   s = 2
   b = 3
     if(option === i){
       investingMoney = Number(prompt("Ok, how much money would you like investing?, actually you have " + subtotal  + " dollars"))
       alert("Good, then we are going to invest "  + investingMoney)
       subtotal = subtotal - investingMoney


      if(subtotal > 0){
        return secondValidation(subtotal)
       }
       else{
         alert("Great, have a nice")
       }
       }
      else if(option === s){
       spendMoney = Number(prompt("Ok, how much would you like spending?, actually you have " + subtotal + " dollars"))
       alert("Good, then we are gong to spend " + spendMoney)
       subtotal = subtotal - spendMoney
       if(subtotal > 0){
        return secondValidation(subtotal)
       }
       else{
         alert("Great, have a nice")
       }
     }
      else if(option === b){
      saveBank = Number(prompt("Great, how much Would you like saving?, actually you have " + subtotal + " dollars"))
      alert("Good, then we are goning to save " + saveBank)
      subtotal = subtotal - saveBank
      if(subtotal > 0){
        return secondValidation(subtotal)
     }
     else{
       alert("Great, have a nice")
     }
     }
   }

run()
