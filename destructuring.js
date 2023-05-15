
// Object Destructuring 1
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // -8
console.log(yearNeptuneDiscovered); // 1846

//## **Object Destructuring 2**

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // ? yearNeptuneDiscovered: 1846,
  // yearMarsDiscovered: 1659

//   Object Destructuring 3
function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // your name is Alejandro and you like purple
  getUserData({firstName: "Melissa"}) //your name is Melissa and you like green
  getUserData({}) // your name is undefined and you like green

  //Array Destructuring 1
  let [first, second, third] = ["Maya", "Marisa", "Chi"];

  console.log(first); // Maya 
  console.log(second); // ?- Marissa 
  console.log(third); // ? Chi

  //Array Destructuring 2
  let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); //  Raindrops on roses 
  console.log(whiskers); // whiskers on kittens
  console.log(aFewOfMyFavoriteThings); // ? "Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"


  //Array Destructuring 3

  // 10, 20, 30 


  const obj = {
    numbers: {
        a: 1,
        b: 2
    }
  };
const {a,b} = obj.numbers

//Array swap ES2015

[arr[0], arr[1]] = [arr[1], arr[0]]

raceResults(['Tom', 'Margaret', 'Allison','David', 'Pierre'])
const raceResults = ([first, second, third, ...rest]) => ([first, second, third, rest])
