// typeof returns the type of the variable
// keyof returns the type of the keys of the object

// 1. Generic function
const score: Array<number> = []; // Array of numbers
const score2: Array<string> = []; // Array of strings

// Confusing/Not clear examples
function identityOne(val: boolean | number): boolean | number {
  return val;
}
// This is not a very good way to write a function because it is not clear what the function is supposed to do. It can return a boolean or a number while accepting a boolean or a number.

function identityTwo(val: any): any {
  return val;
}
// This is also not a very good way to write a function because it is not clear what the function is supposed to do. It can return anything while accepting anything.

// Generic function
function identityThree<T>(val: T): T {
  return val;
}
// This is a better way to write a function because it is clear what the function is supposed to do. It can return the same type as the input type.

// 2. Generic interface
interface GenericIdentityFn {
  <T>(arg: T): T;
}
function identityFour<T>(arg: T): T {
  return arg;
}
const myIdentity: GenericIdentityFn = identityFour;
// This is a generic interface that describes a function. It has a call signature that has one type parameter.

// Another way to write generic function
function identityFive<Type>(arg: Type): Type {
  return arg;
}
const name = identityFive("John");

// Take input as an array
function identitySix<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

// Another generic function
function identitySeven<T, U>(arg1: T, arg2: U): object {
  return { arg1, arg2 };
}

const myIdentityTwo = identitySeven("John", 25); // { arg1: 'John', arg2: 25 }
// This is just an example of a generic function that takes two arguments of different types and returns an object with the two arguments as properties.

// The magic happens when we use the extends keyword for the generic type
function identityEight<T extends number, U>(arg1: T, arg2: U): object {
  return { arg1, arg2 };
}
// As soon as we try to use the same example as above, TS will throw an error because the first argument is not a number.
// const myIdentityThree = identityEight("John", 25); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Use Case of generics with extends keyword
interface DB {
  connection: string;
  username: string;
  password: string;
}

function identityNine<T extends DB>(arg: T): T {
  return arg;
}

const myIdentityThree = identityNine({
  connection: "localhost",
  username: "root",
  password: "password",
});

// 3. Generic classes

interface Quiz {
  question: string;
  answer: string;
}

interface Course {
  title: string;
  description: string;
  proffesor: string;
}

class Syllable<T> {
  private syllable: T;
  public cart: T[] = [];

  constructor(syllable: T, cart: T[]) {
    this.syllable = syllable;
    this.cart = cart;
  }

  addToCart(item: T): void {
    this.cart.push(item);
  }

  get(): T {
    return this.syllable;
  }
}

export {};
