//Deseo hacer un sistemas que te indique 1. un function con dos variables que pida, costs y entry, 2 que valide si los costs no superan los entry y mande una respuest
// 3 si costs supera a entry mandas mensaje que peligra y biceversa, 4 si el entry es mayor que los costs entonces mandar mensaje diciendo cuanto sobre pregutar
//  en value y porcentaje ¿desea hacer algo con el escedente?, si elige si entonces lanzar otro mensaje será la parte 5 en caso contrario termina el frograma,
// 5 dar 3 opciones, invertir, comprar algo  o inverir y compar algo, en caso de la primera mostar una listado de opciones para invertir y en caso de la segunda,
// #mostar el listado y pedir cuanto desea invertir y valoe a gastar, 5 si hay exedente en cualquiera de las elecciones, volver al la funcion en la que se pide
// #elegir que desea hacer con el dinero



alert("Hello, I'm here to help you with your managementt")
entry = Number(prompt("what is the entry this month?"))
egress = Number(prompt("Which are the expenditures at this month?"))
entryLessEgress = entry - egress;

function run() {
  validation(entryLessEgress)
}

//Here the customer choose what if want to do something whit the money
function validation(entryLessEgress){

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


//choosing function, the coustomer have 3 options
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
      alert("Good, then we are gong to spend " + spendMoney)
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
     alert("Good, then we are goning to save " + saveBank)
     subtotal = entryLessEgress - saveBank
     if(subtotal > 0){
      validation(subtotal)
    }
    else{
      alert("Great, have a nice")
    }
    }
  }

run()
