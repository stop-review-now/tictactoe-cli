"use strict";
const assert = require("assert");
const { newBoard, winner, move, isDraw } = require("../src/game");

let b = newBoard();
b = move(b, 0, "X"); b = move(b, 3, "O");
b = move(b, 1, "X"); b = move(b, 4, "O");
b = move(b, 2, "X");
assert.strictEqual(winner(b), "X");
console.log("ok - X wins on top row");
