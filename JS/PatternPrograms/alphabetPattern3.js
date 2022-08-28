let n = 5; // you can take input from prompt or change the value
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing characters
  for (let j = 0; j < n - i + 1; j++) {
    string += String.fromCharCode(j + 65);
  }
  string += "\n";
}
console.log(string);