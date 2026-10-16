#!/usr/bin/env node
"use strict";

const readline = require("readline");
const { newBoard, winner, isDraw, move, render } = require("../src/game");

function main() {
  let board = newBoard();
  let player = "X";
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  function turn() {
    console.log("\n" + render(board) + "\n");
    rl.question(`Player ${player}, choose a cell (1-9): `, (answer) => {
      const idx = parseInt(answer, 10) - 1;
      try {
        board = move(board, idx, player);
      } catch (err) {
        console.log("Invalid move: " + err.message);
        return turn();
      }
      const w = winner(board);
      if (w) {
        console.log("\n" + render(board) + `\n\nPlayer ${w} wins!`);
        return rl.close();
      }
      if (isDraw(board)) {
        console.log("\n" + render(board) + "\n\nIt's a draw!");
        return rl.close();
      }
      player = player === "X" ? "O" : "X";
      turn();
    });
  }

  console.log("Welcome to tic-tac-toe! Cells are numbered 1-9.");
  turn();
}

main();
