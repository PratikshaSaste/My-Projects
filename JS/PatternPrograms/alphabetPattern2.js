let n = 5; // you can take input from prompt or change the value
let string = "";
let count=0;
// External loop
for (let i = 1; i <= n; i++) {
  // printing characters
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode(count + 65);
    count++;
  }
  string += "\n";
}
console.log(string);