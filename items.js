const readline = require("readline-sync")

const items = [
  {
    id: 1,
    name: "screwdriver",
    quantity: 10,
  },
  {
    id: 2,
    name: "hammer",
    quantity: 5,
  },
  {
    id: 3,
    name: "saw",
    quantity: 2,
  },
  {
    id: 4,
    name: "lightbulb",
    quantity: 250,
  },
  {
    id: 5,
    name: "tape measure",
    quantity: 1,
  },
];

// get all items and display them
const displayItems = () => {
  console.log("All items:");
  for (const item of items) {
    console.log(`${item.id}: ${item.name}, Quantity: ${item.quantity}`);
  }
};

// add an item
const addItem = () => {
  //collect input from the user 
  console.log("We are gonna add an item WOOHOO")
  let userItemName = readline.question("What is the name of the item?: ")
  let userQuantity = readline.question("How many are there?: ")
  //create a new item based off the users input
  const userItem = { 
    id: createItemId(),
    name: userItemName,
    quantity: userQuantity,
  }
  //add the item to our inventory  
  items.push(userItem)
}

//create a new id for a new item
const createItemId = () => {
  //we have an array with ids, we need to make a new id that is higher than the highest current id
   //collect the ids
   const ids = []
  for (const item of items) {
      ids.push(item.id)
   }
   //find the biggest id
  const biggestId = Math.max(...ids)
   //return ++
   const newId = biggestId + 1
   return newId
}

// edit an item's details
const editItem = () => {
  //display all the items
  displayItems();
  //Ask user the id  of the item they want to edit
  let itemId = readline.question("What is the id of the item you want to edit: ")
  //Collect user input for the property
  let itemName = readline.question("What is the new name?: ")
  let itemQuantity = readline.question("What is the new quantity?: ")
  //Find the item we are trying to edit
  let itemToEdit;
  for (const item of items) {
    //compare items id to user input
    if (item.id == itemId) {
      //if match than equal itemToEdit
      itemToEdit = item;
    }
  }
  //Update the properties only if the user inputs something
    if (itemName !== "") {
      itemToEdit.name = itemName
    }
    if (itemQuantity !== "") {
      itemToEdit.quantity = parseInt(itemQuantity)
    }
  //Add item updated message
  console.log("Item updated")
}

// display low inventory items

module.exports = {
  displayItems, addItem, editItem
};
