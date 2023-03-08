// const yellowChairMaker = (chairMaterial) => {
// 	const chairObject = {
// 		type: "Chair",
// 		color: "Yellow",
// 		material: chairMaterial,
// 		price: 49.29
// 	}

// 	return chairObject
// }

// const chairStringMaker = (chairObject) => {
// 	const stringRepresentation = `The ${chairObject.color}, ${chairObject.material} 
//     ${chairObject.type} costs ${chairObject.price}`

// 	return stringRepresentation
// }

// const returnedChairObject = yellowChairMaker("Oak")
// // At this moment, the returnedChairObject variable has an object as its value

// const returnedChairString = chairStringMaker(returnedChairObject)
// // At this moment, the returnedChairString variable has a string as its value

// console.log(returnedChairString)
// > "The Yellow, Oak Chair costs $49.29"







const createWoodBlock = () => {
    const woodBlock = {
        type: "wooden block",
        length: 10,
        material: "pine",
        purpose: "flute"
    }

    return woodBlock

}

const createBeautifulCarving = (woodBlock) => {
    const carvingString = `The ${woodBlock.length}-inch, ${woodBlock.material} ${woodBlock.type} was carved into a wooden ${woodBlock.purpose}`

    return carvingString
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)