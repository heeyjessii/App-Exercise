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