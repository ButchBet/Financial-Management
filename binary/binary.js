/* Coded by  Kevin Alejandro Salzar and Santiago Acevedo Orozco*/

var c=0, num="1010111", i=0, n=5, result = ""; // almost global variables


function main(){
  validar(0);
  ones_quantity(num)
  numero_ceros(num);
  binary_pair(num);
  espaciado_binario(num, " ");
  binary_codification(num, "1", "0");
  crear_binario_ceros(n);
  binary_one_creation(n);
  binary_structure(num);
  first_one_position(num);
  last_one_position(num);
  value_changed(num);
}

// global printing funtion
function printf(cont1, cont2, val){
    if(val){
        document.write(cont1 + cont2 + "</br>");
    }else{
        document.write(cont1 + cont2); 
    }
}

//ejemplo#1

function validar(m){
  if (m == 0){
    printf(m, " es un digito binario.", true);
  } else if (m == 1){
    printf(m, " es un digito binario.", true);
  } else{
    printf(m, " no es un digito binario.", true);
  }

}

//calculate the 1's quantity
function ones_quantity(bin){
    n = 0;
    i = 0;
    
    while(i < bin.length){
        if(bin[i] == 1){
            n += 1;
        }i++;
    }
    return n;
}

//ejemplo#3

function numero_ceros(bin){
  var n = 0;

  var i = 0;
  while(i < bin.length){
    if (bin [i] == 0){
      n = n + 1;
    }
    i = i + 1;
  }
  return n;
}


// calculate a pair binary number
function binary_pair(bin){
    var last_position = bin.length -1;
    i = 0;
    
    if(bin[last_position] == 0){
        return true;
    }else{
        return false;
    }
}

//ejemplo#5

function espaciado_binario(bin, separador){
  result= "";

  i = 0;
  while (i < bin.length){
    result = result + bin[i];
    if (i < bin.length - 1){
      result = result + separador;
    }
    i = i + 1;
  }
  printf(result, " is the result.", true);
  //print();
}


// binary codification
function binary_codification(bin, one, zero){
    result = "";
    i = 0;
    
    while(i < bin.length){
        if(bin[i] == 1){
            result += one;
        }else{
            result += zero;
        }
        i++;
    }
    return result;
}
//ejemplo#7

function crear_binario_ceros(m){
  result = "";
  i = 0;
  while (i<m){
    result = result + "0";
    i = i + 1;
  }
  return result;
}

// creation of binary numbers with 1s
function binary_one_creation(m){
    result = "";
    i = 0;
    
    while(i < m){
        result += "1";
        i++;
    }
    
    return result;
}


// 2 powered to the quantity of digits of a string
function binary_structure(bin){
    var base;
    var power;
    var weight;
    var digits;
    var value;
    
    base = 2;
    power = bin.length -1;
    weight = "";
    digits = "";
    i = 0;
    
    while(i < bin.length){
        value = parseInt(bin[i]);
        weight += Math.pow(base, power) + " ";
        digits += bin[i] + " ";
        power--;
        i++;
    }
    
    printf("Weight: ", weight, true);
    printf("Digits: ", digits, true);
    // printf();
}
// find the first 1 position and show it
function first_one_position(bin){
    c=0, i=0;
    while(i <= bin.length-1){
      if(bin[i] == "1"){
        c = i+1;
        i = bin.length-1;
        break;
      }else{
        i++;
      }
    }
    if (c > 0){
      printf("The first 1 position is: ", c, true);
    }
    else{
      console.log("this string only has 0´s");
    }
}


// find the last 1 position
function last_one_position(bin){
    c=0, i=0;
    while(i <= bin.length-1){
      if(bin[i] == "1"){
        c = i+1; 
      }i++;
    }
    if (c > 0){
      printf("The last 1 position is: ", c + true);
    }
    else{
      console.log("this string only has 0´s")
    }
    
}

// changing values function
function value_changed(bin){
    var num2 = "";
    // change 0 by 1 and vice versa 
    /*bin = bin.replace(/0/g, "-");
    bin = bin.replace(/1/g, "_");

    bin = bin.replace(/-/g, "1");
    bin = bin.replace(/_/g, "0");
    */
    i = 0;
    while(i < bin.length){ 
      if(bin[i] == "1"){
        num2 += "0";
      }else{
        num2 += "1";
      }i++;
    }

    printf("The change is: ", num2, true);
}


main();