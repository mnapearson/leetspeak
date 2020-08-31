let command = process.argv[2];

console.log(
  command
    .replace(/a/gi, "4")
    .replace(/b/gi, "8")
    .replace(/e/gi, "3")
    .replace(/g/gi, "6")
    .replace(/i/gi, "1")
    .replace(/o/gi, "0")
    .replace(/s/gi, "5")
    .replace(/t/gi, "7")
);
