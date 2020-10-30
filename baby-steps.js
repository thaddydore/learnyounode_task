const commadlineInput = process.argv.slice(2);
let commandlineSum = 0;

for (i = 0; i < commadlineInput.length; i++) {
  commandlineSum += Number(commadlineInput[i])
}

console.log(commandlineSum) 