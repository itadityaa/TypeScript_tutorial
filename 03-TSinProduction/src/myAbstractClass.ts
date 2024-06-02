class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {
    // Constructor implementation goes here
  }
}

const photo = new TakePhoto("Portrait", "Normal");
console.log(photo.cameraMode); // Output: Portrait
console.log(photo.filter); // Output: Normal

// Access modifiers in TypeScript
// Access modifiers are keywords that set the accessibility of properties and methods in a class. TypeScript
// supports three access modifiers: public, private, and protected.

// Interface vs Class
// An interface is a contract that defines the properties and methods that a class must implement. An interface
// cannot have an implementation. A class is a blueprint for objects that defines properties and methods. A class
// can have an implementation.

// Interface can be implemented by a class using the implements keyword. A class can implement multiple interfaces.
// A class can inherit from another class using the extends keyword. A class can inherit from only one class.

// Abstract classes
// An abstract class is a class that cannot be instantiated. It is used to define a blueprint for other classes.
// Abstract classes can have abstract methods that must be implemented in the derived classes. Abstract classes are
// defined using the abstract keyword. Abstract methods are defined using the abstract keyword and do not have an implementation.

// The following are the key points to remember about abstract classes:
// - Abstract classes cannot be instantiated.
// - Abstract classes can have abstract methods.
// - Abstract methods do not have an implementation.
// - Abstract methods must be implemented in the derived classes.
// - Abstract classes can have properties and methods with implementations.
// - Abstract classes can have constructors.
// - Abstract classes can have access modifiers.
// - Abstract classes can implement interfaces.
// - Abstract classes can inherit from other classes.
// - Abstract classes can be inherited by other classes.
// - Abstract classes can be used to define a blueprint for other classes.

// The following example demonstrates the use of an abstract class:

abstract class UserDetails {
  constructor(public name: string, private userId: string) {}

  abstract changeEmail(): void;

  changeName(): void {
    this.name = "John";
  }

  get userIdGetter(): string {
    return this.userId;
  }
}

class SuperUser extends UserDetails {
  constructor(name: string, userId: string, public email: string) {
    super(name, userId);
  }
  // Implementing the abstract method from the base class
  changeEmail() {
    this.email = "John@gmail.com";
  }
}

const user = new SuperUser("John", "123", "Doe@gmail.com");
console.log(user.name); // Output: John
console.log(user.userIdGetter); // Output 123
user.changeEmail();
console.log(user.email); // Output: "John@gmail.com"
