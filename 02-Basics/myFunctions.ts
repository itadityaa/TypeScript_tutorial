// Error and why we need TS
function addTwo(n1, n2) {
  return n1 + n2;
}

const number1 = 5;
const number2 = "2.8";

const result = addTwo(number1, number2);

console.log(result);

// This is a runtime error, but TS can catch this error at compile time
// Right now, we are passing a string to a function that expects a number as an argument and returns a number as a result (addTwo function)
// n1, n2 are both of the type any, so TS doesn't know that we are passing a string to a function that expects a number
// Fix: add type annotations to the function arguments and return value

function addTwoFixed(n1: number, n2: number): number {
  return n1 + n2;
}

let loginUser = (name: string, email: string, isPaid: boolean) => {
  console.log(`${name} with email ${email} is a paid user: ${isPaid}`);
};

// loginUser("John", "john@gmail.com"); // This should be an error because we are not passing a value to the isPaid argument and there is not default value for it
// Fix: add a default value to the isPaid argument
let loginUserFixed = (name: string, email: string, isPaid: boolean = false) => {
  console.log(`${name} with email ${email} is a paid user: ${isPaid}`);
};

loginUserFixed("John", "john@gmail.com"); // This should work now because we have a default value for the isPaid argument

const getHello = (s: string): string => {
  return "";
}; // This should not throw an error because we are returning a string

// getHello(5); // This should throw an error because we are passing a number to a function that expects a string

const heros = ["Superman", "Batman", "Ironman"];

heros.map((hero) => {
  return hero.toLowerCase();
}); // This should work because we are returning a string
// TypScript is smart enough to infer the type of 'hero' as a string because heros is an array of strings

// If your function is not returning anything, you can use the void type
const sayHello = (name: string): void => {
  console.log(`Hello ${name}`);
  // return "Hello"; This should throw an error because we are returning a string in a function that expects a void return type
};

// If you are sure your function will never return anything, you can use the never type
const throwError = (message: string): never => {
  throw new Error(message); // This function will never return anything because it will always throw an error
};

// throwError("This is an error"); // This should work
// When do you use never?
