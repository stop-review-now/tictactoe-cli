"use strict";

// Core tic-tac-toe logic. Pure functions, no I/O.

const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function newBoard() {
  return Array(9).fill(" ");
}

function winner(board) {
  for (const [a, b, c] of LINES) {
    if (board[a] !== " " && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function isDraw(board) {
  return board.every((cell) => cell !== " ") && !winner(board);
}

function move(board, index, player) {
  if (index < 0 || index > 8) throw new RangeError("cell out of range");
  if (board[index] !== " ") throw new Error("cell already taken");
  const next = board.slice();
  next[index] = player;
  return next;
}

function render(board) {
  const c = board.map((v, i) => (v === " " ? String(i + 1) : v));
  return [
    ` ${c[0]} | ${c[1]} | ${c[2]} `,
    "---+---+---",
    ` ${c[3]} | ${c[4]} | ${c[5]} `,
    "---+---+---",
    ` ${c[6]} | ${c[7]} | ${c[8]} `,
  ].join("\n");
}

module.exports = { newBoard, winner, isDraw, move, render, LINES };
