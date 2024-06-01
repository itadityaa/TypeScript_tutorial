const numbers: number[] = [1, 2, 3, 4, 5];

numbers.push(6); // This will work

const superHeroes = []; // This is not a good practice because TypeScript can't infer the type of the array and it will be of type never

// superHeroes.push("Superman"); This will not throw an error because TypeScript can't infer the type of the array

// Another way
const heroPower: Array<number> = [];

heroPower.push(100); // This will work

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = []; // Array of objects of type User

allUsers.push({ name: "John", isActive: true });

const imagePixel: number[][] = [[255, 255, 255]]; // 2D array

// Read-only arrays
const readOnlyArray: ReadonlyArray<number> = [1, 2, 3];

// readOnlyArray.push(4); // This will throw an error
