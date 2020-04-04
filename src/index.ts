import { User } from "./models/User";

const user = new User({ name: "Daniel", age: 25 });

user.set({ name: "new name", age: 99 });

console.log(user.get("name"));
console.log(user.get("age"));
