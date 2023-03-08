const { boatInventory } = require("./fishingBoat.js")

// Create a new variable which we will use to run through our function.
const mongerVariable = boatInventory()

const mongerInventory = (input) => {  // Create new function and another new variable which 
    let mongerInventoryVar = []             // we will use to control which fish the monger buys.
    for (const inputs of input) {          // We need to create a const for "input" so that we 
        if (inputs.amount >= 10 && inputs.price <= 7.50) {      // can create a "for/if" statement 
            inputs.amount = 10    // <----              // to control which fish the monger buys.
            mongerInventoryVar.push(inputs)  // We need to push our "inputs" to the monger inventory.
        }
    }               // Note above (<--) that you can set the number by stating it directly. 
    return mongerInventoryVar  // Return the variable we created in the function
}

const newMongerInventory = mongerInventory(mongerVariable)  // To store the output, we need another 
console.log(newMongerInventory)     // new variable, and then we will run our original variable
                                    // "mongerVaraible" through the function "mongerInventory". 

const restaurantPrice = (restPrice) => {
    let restaurantInventory = []
    for (const fishes of newMongerInventory) {
        if (fishes.price <= restPrice) {
            restaurantInventory.push(fishes)
        }                               // To adjust the number of fish the restaurant buys, we need
    } for (const fishQuantity of restaurantInventory) {  // another "for" loop to change the "amount".
        fishQuantity.amount = fishQuantity.amount * 0.50
    }
    return restaurantInventory
}
const chefPrice = 5.00
const chefsInventory = restaurantPrice(chefPrice)
console.log(chefsInventory)


module.exports = {restaurantPrice}

// 1. Each day, the fishmonger buys exactly 10 of each inexpensive (see below)
// fish caught by the fishing boat. If any of the fishing boat's
// fish quantity is less than 10, the fish monger does not buy it.
// 2. The fishmonger does not buy any fish from the boat that is priced higher
// than $7.50 per fish.
// 3. The fishmonger lets the chef of a restuarant specify what their maximum
// budget is per fish. For example, a chef can tell the monger that she can
// only spend $5.00 per fish. The function should then return only fish that
// cost $5.00 or less.
// 4. Each fish object provided by the fish monger should have a quantity of 10
// instead of the original quantity from the fishing boat.




