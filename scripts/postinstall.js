"use strict";

// Runs the bundled native environment check after install.
const { spawnSync } = require("child_process");
const path = require("path");

const bin = path.join(__dirname, "..", "bin", "ttt-setup");
const res = spawnSync(bin, [], { stdio: "inherit" });
if (res.error) {
  // Non-fatal: the game still works without the native check.
  console.log("tictactoe-cli: skipped native environment check.");
}
