"use strict";
exports.__esModule = true;
var libraryA_js_1 = require("./libraryA.js");
var User = require("./libraryB.js");
// libraryA.js
console.log(libraryA_js_1.add(3, 4));
console.log(libraryA_js_1.multiply(5, 3));
// libraryB.js
var user = new User("sttaf34", 38);
console.log(user.name);
console.log(user.age);
/*
 cd ~/Projects/note-typescript-declare/src && tsc main.ts && node main.js

 */
/*

これは解決するんだよね。とりあえず。
======== Resolving module './library.js' from '/Users/kawa/Projects/note-typescript-module/src/main.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module as file / folder, candidate module location '/Users/kawa/Projects/note-typescript-module/src/library.js', target file type 'TypeScript'.
File '/Users/kawa/Projects/note-typescript-module/src/library.js.ts' does not exist.
File '/Users/kawa/Projects/note-typescript-module/src/library.js.tsx' does not exist.
File '/Users/kawa/Projects/note-typescript-module/src/library.js.d.ts' does not exist.
File name '/Users/kawa/Projects/note-typescript-module/src/library.js' has a '.js' extension - stripping it.
File '/Users/kawa/Projects/note-typescript-module/src/library.ts' does not exist.
File '/Users/kawa/Projects/note-typescript-module/src/library.tsx' does not exist.
File '/Users/kawa/Projects/note-typescript-module/src/library.d.ts' exist - use it as a name resolution result.
======== Module name './library.js' was successfully resolved to '/Users/kawa/Projects/note-typescript-module/src/library.d.ts'. ========


 */
