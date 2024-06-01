type user = {
  name: string;
  isActive: boolean;
};

type admin = {
  username: string;
  role: string;
};

type User = user | admin; // Union type to combine multiple types into one

let user1: User = { name: "John", isActive: true };
user1 = { username: "admin", role: "admin" }; // OK because admin is a User type as well

function getDbId(id: number | string) {
  // Problem comes when I try to access the properties of either number or string like id.length or id.toFixed() becasue id can be either number or string
  // So, we need to check the type of id before accessing the properties
  if (typeof id === "string") {
    return id.length;
  }
  return id;
}

getDbId(123); // OK
getDbId("123"); // OK

// Arrays can also be of union types
let arr: (string | number)[] = ["John", 123, "Doe", 456];

// A classic mistake: let arr: string | number[] = ["John", 123, "Doe", 456];
// Another: let arr: string[] | number[] = ["John", 123, "Doe", 456];
// The above two will give you an error
