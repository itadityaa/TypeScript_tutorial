const User = {
  name: "John",
  age: 30,
};

function createUser({
  name,
  age,
}: {
  name?: string; // Add ? to make it optional
  age?: number;
}) {
  return {
    name: name ?? "John", // Use default values if properties are undefined
    age: age ?? 30, // Use default values if properties are undefined
  };
}

const user = createUser({ name: "Jane", age: 25 });
console.log(user); // { name: 'Jane', age: 25 }
// const user = createUser({});
// console.log(user); // { name: 'John', age: 30 } // This should work because we have default values for the properties

// Bad syntax

function createUserBad({ name, isPaid }: { name: string; isPaid: boolean) {
  return {
    name: name,
    isPaid: isPaid,
  };
} // Up to this point, everything is fine

const userBad = createUserBad({ name: "Jane", isPaid: true }); // This will work
const userBad1 = createUserBad({name: "Jane", isPaid: true, age: 25}); // This will not work because we have an extra property, and the TS is giving an error, which is a good thing.

// The bad behaviour of Objects here is that there is a workaround to this problem. 

let userBad2 = {name: "Jane", isPaid: true, age = 25};
const userBad2_func_return = createUserBad(userBad2); // This will work, but it is completely wrong because we are passing an object with an extra property, and the TS is not giving an error. This is a bad behaviour of Objects in TS.


export {};
