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
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
  let tamanho = s.length;
  let maiorQuantidade = 0;
  let unicas = [];
  let pares = [];
  let cont = [];
  let qntLetras = 0;
 

  for (let i = 0; i < tamanho; i++) {
    if (unicas.includes(s[i]) === false) unicas.push(s[i]);
  }

  for (let i = 0; i < unicas.length; i++) {
    for (let j = i + 1; j < unicas.length; j++)
      pares.push(unicas[i].concat(unicas[j]));
  }

  for (let i = 0; i < pares.length; i++) {
    cont = [];

    for (let j = 0; j < tamanho; j++) {
      if (pares[i].includes(s[j])) {
        if (cont.length > 0) {
          if (cont[cont.length - 1] === s[j]) {
            cont = [];
            break;
          }
        }

        cont.push(s[j]);
      }
    }

    qntLetras = cont.length;

    if (qntLetras > maiorQuantidade) {
      maiorQuantidade = qntLetras;
    }
  }

  return maiorQuantidade;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const l = parseInt(readLine().trim(), 10);

  const s = readLine();

  const result = alternate(s);

  ws.write(result + "\n");

  ws.end();
}
