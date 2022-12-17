"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  let a = " ";
  let b = "#";
  let vazio = "";
  let degrau = "";

  for (let i = 0; i < n; i++) {
    for (let i = n - 1; i < n; i++) degrau = degrau + b;

    for (let j = i; j < n - 1; j++) vazio = vazio + a;

    console.log(vazio + degrau);
    vazio = "";
  }

  return;
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  staircase(n);
}
