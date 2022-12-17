"use strict";

const fs = require("fs");

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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
  let contFront = 0;
  let contBack = 0;
  let nResto = n % 2;
  let pResto = p % 2;

  if (pResto == 0) {
    contFront = p / 2;
  }

  if (pResto == 1) {
    contFront = (p - 1) / 2;
  }

  if (nResto == 0) {
    if (pResto == 0) {
      contBack = (n - p) / 2;
    }
    if (pResto == 1) {
      contBack = (n - (p - 1)) / 2;
    }
  }

  if (nResto == 1) {
    if (pResto == 1) {
      contBack = (n - p) / 2;
    }

    if (pResto == 0) {
      if (n - p == 1) {
        contBack = 0;
      } else {
        contBack = (n - (p + 1)) / 2;
      }
    }
  }

  if (contFront <= contBack) {
    return contFront;
  } else {
    return contBack;
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const p = parseInt(readLine().trim(), 10);

  const result = pageCount(n, p);

  ws.write(result + "\n");

  ws.end();
}
