//solving problem 1

var num1= 34;
var num2= 56;
var result= (num1 + num2);
console.log(result);


//now with two strings

var string1= "Hello ";
var string2= "friends!";
console.log(string1 + string2);

//solving problem 2
var northAmericanCities= ["Chicago", "New York", "Austin", "San Diego", "Boston", "St. Paul"];
var chineseCities= ["Beijing", "Shanghai", "Guangzhou", "TianJin","Guilin"];
var destinations= [northAmericanCities, chineseCities];

console.log(destinations[0][2]);
console.log(destinations[1][3]);

// solving problem 3
var number1= 478;
if(number1< 100){
  alert("Your number is less than 100.")
}else if (number1> 100){
  alert("Your number is " + number1 + " which is greater than 100.")
}else if (number1===100){
  alert("Your number is equal to 100.")
}
else{
  alert("Invalid input")
}

//solving problem 4
function name(firstName){
  return console.log("Is your first name " +firstName + " ?")
}
name("Alexandra");

//solving problem 5
function doorGame(doorNum){
  if(doorNum === 1){
    return alert("You won an all inclusive vacation to the Virgin Islands!!");
  }else if (doorNum === 2){
    return alert("You won a free hug!!");
  }else if (doorNum === 3){
    return alert("You won a full body massage!!");
  }else{
    return alert("Invalid Input");
  }
}

doorGame(1);
doorGame(3);
doorGame(2);
