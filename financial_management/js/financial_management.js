
//I'm writing a little program tha helps people choosing what to do with the  money, It depends of your entry and egress whitin a month.

var entry=0, egress=0, entryLessEgress=0, valid=0, option=0;
var subtotal=0, investMoney=0, spendMoney=0, saveBank=0;

alert("Hello, I'm here to help you with your management");
entry = Number(prompt("Enter this  month's entry"));
egress = Number(prompt("Enter the egress"));
entryLessEgress = entry - egress;

function run(){
    validation(entryLessEgress);
}

//Here the customer choose what does He want to do whit the money
function validation(ele){
    if(ele > 0){	
        valid = Number(prompt("You have " + ele + " free dollars, would you like to do something with this money? \n1. Yes \n2. No"));
	switch(valid){
	case 1:
	    option = Number(prompt("Great, you have three options \n1. Invest \n2. Speend\n3. Save in a bank"));
            choose(option, ele);
	    break;
	case 2:
	    alert("Great, see you the next time.");
	    break;
	default:
	    alert("Incorrect option.");
	    validation(ele);
	    break;
    }
    }
    else if(ele == 0){
        alert("Great, you have paid all, see you next time.");
    }
    else{
	alert("You don't have the necessary monery to pay the egresses.");
	// Here we can expand the code to add a option to get a credit
    }
}


//choosing function, the coustomer have 3 options, investing, spend or saving.
function choose(op, ele){
    switch(op){
    case 1:
	investMoney = Number(prompt("Ok, how much money would you like investing?, actually you have " + ele  + " dollars."));
        alert("Good, then we are going to invest "  + investMoney + " dollars.");
        subtotal = ele - investMoney;

	analysis(subtotal);
	
	break;
    case 2:
	spendMoney = Number(prompt("Ok, how much would you like spending?, actually you have " + ele + " dollars."));
        alert("Good, then we are going to spend " + spendMoney + " dollars.");
        subtotal = ele - spendMoney

	analysis(subtotal);
	
	break;
    case 3:
	saveBank = Number(prompt("Great, how much Would you like saving?, actually you have " + ele + " dollars."));
        alert("Good, then we are going to save " + saveBank + " dollars.");
        subtotal = ele - saveBank;
	
	analysis(subtotal);
	
	break;
    default:
	break;
    }
}


function analysis(sub){
    if(sub > 0){
	validation(subtotal);
    }
    else{
	alert("Great, have a nice.");
    }
}

run()
