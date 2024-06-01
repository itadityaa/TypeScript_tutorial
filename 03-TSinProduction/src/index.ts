console.log("Hello, world!");

// If we do normal tsc, it will compile the file and create a new file in the same directory
// To avoid this, we can use the -w (watch) flag to keep the compiler running and watch for changes
// tsc -w index.ts
// This will keep the compiler running and watch for changes in the file
// If we make any changes to the file, it will automatically compile the file and create a new file in the same directory
// We can also use -outDir flag to specify the output directory without using the watch flag
// tsc index.ts -outDir dist
// This will compile the file and create a new file in the dist directory

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return `Hello, ${this.greeting}`;
  }
}

let greeter = new Greeter("world");

class User {
  private _courseCount = 5; // private property can be accessed only within the class
  readonly city: string = "Bangalore";
  protected email: string = ""; // protected property can be accessed within the class and its subclasses
  constructor(public name: string, private userId: string) {}

  get getAppleEmail(): string {
    return `apple${this.city}@gmail.com`;
  }

  get getCourseCount(): number {
    return this._courseCount;
  }

  set setCourseCount(count: number) {
    // Cannot have a return type for setter
    this._courseCount = count;
  }

  private deleteToken() {
    console.log("Deleting the token");
  }
}

// Inheritance
class SubUser extends User {
  // SubUser class extends User class and inherits all the properties and methods of the User class except the private properties
  constructor(name: string, userId: string) {
    super(name, userId);
  }

  changeCourseCount() {
    this.setCourseCount = 10;
  }

  changeEmail() {
    this.email = "John@gmail.com";
  }
}

// Importance of access modifiers

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: boolean;
}

class Instagram implements TakePhoto {
  cameraMode: string = "Portrait";
  filter: string = "Normal";
  burst: boolean = false;

  constructor(cameraMode: string, filter: string, burst: boolean) {
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst;
  }

  takePhoto() {
    console.log(
      `Taking photo in ${this.cameraMode} mode with ${this.filter} filter`
    );
  }
}

class YouTube implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: boolean,
    public shortId: string // It is okay to have additional properties in the class that are not part of the interface as long as the interface properties are implemented in the class
  ) {}
}

// Abstract classes

const instagram = new Instagram("Landscape", "B&W", true);
instagram.takePhoto();
