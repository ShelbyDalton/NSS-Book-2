// Buy some milk chocolate
// Add some mint flavoring
// Combine the chocolate and mint
// Bake the mixture
// Break the hardened sheet into 6 pieces
// 🍫 🍫 🍫 🍫 🍫 🍫 Enjoy!

const createCandy = {}



const buyChocolate = (typeOfChocolate) => {
    createCandy.type = typeOfChocolate
}
buyChocolate("Milk Chocolate")




const addFlavoring = (flavor) => {
    createCandy.flavor = flavor
}
addFlavoring("Mint")




const combineMixture = (flavor, typeOfChocolate) => {
    createCandy.mixed = flavor + typeOfChocolate
    if (flavor === "Mint") {
        createCandy.mixed = true
    } else {
        console.log(`the else.`)
    }
}
combineMixture("Mint", "Milk Chocolate")



const bakeCandy = (createCandy) => {
    createCandy.baked = []
    if (createCandy.mixed = true) {
        createCandy.baked = true
    }
}
bakeCandy(createCandy)




const mintChocolateBark = []

const breakBark =  () => {
 
    if (createCandy.baked === true) {
        let mintChocolateBark = ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", 
    "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece",
    "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
        return mintChocolateBark
    }
}


console.log(createCandy)

console.log(breakBark())