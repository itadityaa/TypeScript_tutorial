// Not well implemented
// Specialized array

let myTuple: [number, string, boolean] = [1, "Hello", true]; // Tuple
myTuple[0] = 2; // OK
myTuple[1] = "World"; // OK
myTuple[2] = false; // OK
// myTuple[3] = 100; // Error
// myTuple[0] = "Hello"; // Error
myTuple.push(100); // OK, but it defeats the purpose of using a tuple
