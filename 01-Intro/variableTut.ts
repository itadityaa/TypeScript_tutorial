let greetings: string = "Hello World!";
let number: number = 10;

//number.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'.

greetings.toUpperCase(); // OK

// number
let userId: number = 33.5;
userId = 33; // OK

// boolean
let isLogged: boolean = true;
isLogged = false; // OK

// any
// Not a good practice to use any
// Let's say we have a function that returns a value of type boolean, but hero is supposed to be a string.
// There is no error in the code, but we have made a mistake in the code logic.
let hero;
function getHero() {
  hero = "Batman";
  return true;
}

hero = getHero();

console.log(greetings);
