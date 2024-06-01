type Point = { x: number; y: number };

function printCoord(pt: Point) {
  console.log("The coordinate is: ", pt.x, pt.y);
}

printCoord({ x: 3, y: 7 }); // The coordinate is: 3 7

type cardNumber = {
  cardNumber: number;
};

type cardDate = {
  expiryDate: string;
};

type cardCVC = {
  cvc: number;
};
type CreditCard = cardNumber & cardDate & cardCVC; // Intersection type to combine multiple types into one

// Literal types
let cardType: "credit" | "debit" | "prepaid";
cardType = "credit"; // OK
cardType = "debit"; // OK
cardType = "prepaid"; // OK
// cardType = "cash"; // Error: Type '"cash"' is not assignable to type '"credit" | "debit" | "prepaid"'
