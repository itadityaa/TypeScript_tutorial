type User = {
  readonly _id: number; // readonly property can't be changed after initialization
  name: string;
  email: string;
  age: number;
  isActive: boolean;
  creditCardDetails?: number; // Optional property
};

const myUser: User = {
  _id: 1,
  name: "John",
  email: "John@gmail.com",
  age: 30,
  isActive: true,
};

myUser.email = "JohnDoe@gmail.com"; // This will work because email is not a readonly property
// myUser._id = 2; // This will not work because _id is a readonly property

// Intersection type to combine multiple types into one

type cardNumber = {
  cardNumber: number;
};

type cardDate = {
  expiryDate: string;
};

type cardDetails = cardNumber & cardDate; // Intersection type to combine multiple types into one (cardNumber and cardDate)

export {};
