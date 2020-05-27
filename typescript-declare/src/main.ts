import { add, multiply } from "./libraryA.js"

import User = require("./libraryB.js")

// libraryA.js
console.log(add(3, 4))
console.log(multiply(5, 3))

// libraryB.js
const user = new User("sttaf34", 38)
console.log(user.name)
console.log(user.age)

// cd ~/Projects/note-typescript-declare/src && tsc main.ts && node main.js
