enum seatChoice {
  Window = 1,
  Aisle,
  Middle,
}

let mySeat: seatChoice = seatChoice.Window;
console.log(mySeat); // 1

mySeat = seatChoice.Middle;
console.log(mySeat); // 3

enum seatChoiceString {
  Window = "W",
  Aisle = "A",
  Middle = "M",
}

let mySeatString: seatChoiceString = seatChoiceString.Window;
console.log(mySeatString); // W

enum seatChoiceStringNumber {
  Window = "W",
  Aisle = 10,
  Middle,
}

let mySeatStringNumber: seatChoiceStringNumber = seatChoiceStringNumber.Middle;
console.log(mySeatStringNumber); // 11

// To avoid IIFE (Immediately Invoked Function Expression) in JavaScript
// Use const enum in TypeScript to avoid generating extra code
