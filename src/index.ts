import { User } from "./models/User";

const user = new User({ name: "Daniel", age: 25 });

user.on("change", () => {
  console.log("change1");
});
user.on("change", () => {
  console.log("change2");
});
user.on("test", () => {
  console.log("test");
});

user.trigger("change");
user.trigger("change2");

console.log(user);
