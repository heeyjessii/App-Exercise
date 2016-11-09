var hero = "Boo";
var gender = "female";
var age = 24;
var weapon = "french fries";
var pronoun;
var xp;

//conditional to set pronouns
if (gender === "male") {
  pronoun = "his";
} else if (gender === "female") {
  pronoun = "her";
} else {
  pronoun = "their";
}
 
//conditional for ages
//if age is less than or equal 18 -> set xp = "just beginning "
//if age greater than or equal 19 && less than or equal to 40 
  //-> set xp = "has seen a few battles"
// else set xp = "has live through epic battles"

if (age <= 18) {
  xp ="is just beginning";
} else if (age >= 19 && age <=40) {
  xp = "has seen a few battles";
} else if (age > 40){
  xp = "has lived through many epic battles";
}

console.log(hero +  " is our lovable hero, who " + xp + " with " + pronoun +  " trusty " + weapon);

//variable of count with no value
var count = null;
var animal = "Panda";

//create function with name of animalHouse with 2 parameters
function animalHouse(dogs,cats){
  count = dogs + cats;
  console.log(count);
}
animalHouse(2,7);

if (count > 2) {
  console.log('We have too many ' + animal  + "s");
}
//variable with an avenger
var hero = "Hulk";

//function with one parameter with a conditional inside
//create 4 conditions for different avengers 
function avengerAssemble(avenger){
  if (avenger == 'IronMan'){
    console.log('up, up and away');
  }

  else if (avenger == 'CaptainAmerica'){
    console.log ('shield me ');

    }
  else if (avenger == 'BlackWidow'){
    console.log ('ugh' );
  }
  else 
    console.log ('Sorry, you are not needed for this mission');
}
//invoke avengerAssembly and pass variable
avengerAssemble(hero);

var lights = true;

if (lights == true){
  console.log('And then there was light');
}
else (lights == false){
  console.log('Lights Out');
}

var carType = 'Toyota';
var color = 'blue';
var num = 11;

if (carType == 'Toyota' && color == 'blue'|| carType == 'Lamborghini' && color == 'red' || carType == 'Tesla' && color == 'black' ){
  console.log ('We have '+ num + ' '+ color + ' ' + carType);
}
else {
  console.log ("We don't have any "+ color + ' ' + carType+"s in stock");
}