// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
var User = {
  name: "John",
  age: 30,
};
function createUser(_a) {
  var name = _a.name,
    age = _a.age;
  return {
    name: name !== null && name !== void 0 ? name : "John", // Use default values if properties are undefined
    age: age !== null && age !== void 0 ? age : 30, // Use default values if properties are undefined
  };
}
var user = createUser({});
console.log(user); // { name: 'John', age: 30 }
