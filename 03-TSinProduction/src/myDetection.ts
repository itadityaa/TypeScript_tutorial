const detectType = (val: number | string): number => {
  if (typeof val === "number") {
    return val;
  } else if (typeof val === "string") {
    return -1;
  }
  return 0;
};

// The in operator in Type Narrowing

interface UserNotAdmin {
  name: string;
  readonly email: string;
}

interface Admin {
  name: string;
  email: string; // Mutable email
  isAdmin: boolean;
}

/* function isAdmin(user: User | Admin): string = {
  if(isAdmin) {
    return "Admin";
  }
  return "User";
}; */ // Error: Property 'isAdmin' does not exist on type 'User'

const isAdminAccount = (user: UserNotAdmin | Admin): string => {
  if ("isAdmin" in user) {
    // This makes sure that the user is of type Admin
    // let boolcheck = user.isAdmin;
    return "Admin";
  }
  return "User";
};

// typeof vs instanceof in Type Narrowing
// typeof checks for the default types in JavaScript
// instanceof checks for the custom types in JavaScript
// instanceof is potentially used when there is a chance of using the new keyword

class Car {
  drive() {
    console.log("Driving a car");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }
}

const driveVehicle = (vehicle: Car | Truck): void => {
  if (vehicle instanceof Car) {
    vehicle.drive(); // Driving a car
  } else if (vehicle instanceof Truck) {
    vehicle.drive(); // Driving a truck
  }
};

// Type Predicates in Type Narrowing
// To define a user-defined type guard, we need to define a function that returns a type predicate
// While a type predicate function does involve a function that returns a boolean value, the key feature of a type predicate is that it provides a type guard which narrows the type of a variable within a conditional block.

// A type predicate function not only returns a boolean but also includes a special type annotation that specifies the type of the variable when the function returns true. This type annotation takes the form paramName is Type, which indicates that the variable paramName is of type Type if the function returns true.

interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}

function isDog(animal: Dog | Cat): animal is Dog {
  return (animal as Dog).bark !== undefined;
}

function makeNoise(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark(); // TypeScript knows animal is Dog here
  } else {
    animal.meow(); // TypeScript knows animal is Cat here
  }
}
// is: Type Predicate
// as: Type Assertion

// Discriminated Unions in Type Narrowing
// Discriminated unions are a pattern that helps TypeScript narrow down the type of an object based on the value of a specific property. This property is called a discriminant.
interface Square {
  kind: "square"; // Literal type
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Circle;

function getArea(shape: Shape): number {
  if (shape.kind === "square") {
    return shape.side * shape.side;
  } else if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  return 0;
} // This works perfectly fine but does not make it future-proof

// Discriminated Unions with Exhaustiveness Checking
// Exhaustiveness checking is a feature that helps TypeScript ensure that all possible cases are handled in a switch statement.
type Shape2 = Square | Rectangle | Circle;

function getArea2(shape: Shape2): number {
  switch (shape.kind) {
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.width * shape.height;
    case "circle":
      return Math.PI * shape.radius ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck; // This will throw an error if there is a missing case in the switch statement
  }
}
