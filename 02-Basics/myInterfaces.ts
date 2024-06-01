interface User {
  readonly dbId: number;
  name: string;
  age: number;
  userId: number;
  googleId?: string;
  startTrial(): string;
  // startTrial: () => string;
  getCoupon?(coupon: string): number;
}

// re-opening the interface- adding new properties
interface User {
  email?: string;
}

const user: User = {
  dbId: 1,
  name: "John Doe",
  age: 30,
  userId: 1001,
  startTrial() {
    return "Trial Started";
  },
  getCoupon(couponName: string) {
    if (couponName === "DISCOUNT") {
      return 20;
    }
    return 10;
  },
};

// Extending Interfaces
interface Admin extends User /*, Another interfaces */ {
  role: string;
}

// Interface vs Type
// Interface can be extended, Type can be used to create union types
// Interface can be implemented by classes, Type can't be implemented by classes directly (Type can be used to define the shape of the class)
// Interface can be changed by re-opening, Type can't be changed once created
