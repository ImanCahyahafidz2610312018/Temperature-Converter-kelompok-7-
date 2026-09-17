const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

let choice = 0;

while (choice !== 5) {
  console.log("\n===== CALCULATOR MENU =====");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  console.log("5. Exit");

  choice = parseInt(await rl.question("Enter your choice: "));

  if (choice < 1 || choice > 5) {
    console.log("Invalid choice, please try again.");
    continue;
  }

  if (choice === 5) {
    console.log("Exiting program...");
    break;
  }

  let num1 = parseFloat(await rl.question("Enter first number: "));
  let num2 = parseFloat(await rl.question("Enter second number: "));
  let result;

  if (choice === 1) {
    result = num1 + num2;
    console.log("Result:", result);
  } else if (choice === 2) {
    result = num1 - num2;
    console.log("Result:", result);
  } else if (choice === 3) {
    result = num1 * num2;
    console.log("Result:", result);
  } else if (choice === 4) {
    if (num2 === 0) {
      console.log("Error: Division by zero is not allowed");
    } else {
      result = num1 / num2;
      console.log("Result:", result);
    }
  }
}

rl.close();
