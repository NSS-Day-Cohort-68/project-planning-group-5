const readline = require("readline-sync");
const { displayItems } = require("./items.js");
// display some kind of greeting to the user
console.log("Hello, this is the inventory manager.");
// display options and do whatever option the user chooses

// function to display options and get input from the user
const displayOptions = () => {
  console.log("Please choose one of the options: ");
  console.log("1. view all items");
  console.log("2. add an item");
  console.log("3. remove an item");
  console.log("4. edit an item's details");
  console.log("5. view low inventory items");
  console.log("6. quit");
};

let currentOption;
while (currentOption !== "6") {
  displayOptions();
  // logic to run other functions based on the choice.
  currentOption = readline.question("Your choice: ");
  if (currentOption === "1") {
    displayItems();
  } else if (currentOption === "6") {
    console.log("Goodbye!");
  } else {
    console.log(`you chose ${currentOption}`);
  }
}
