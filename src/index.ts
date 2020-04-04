import { User } from "./models/User";

const user = new User({ name: "new record", age: 0 });

// user.save();

user.events.on("change", () => {
  console.log("aaaa");
});

user.events.trigger("change");
