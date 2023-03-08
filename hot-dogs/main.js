// // Object representing Ringer
// const dog = {
//     name: "Ringer",
//     age: 4,
//     breed: "Cocker Spaniel"
// }

// // Define a function to convert the object to a string
// const dogHTMLMaker = (dogObject) => {
//     // Make some HTML to represent the dog
//     const dogHTMLSection = `<section>${dogObject.name} the ${dogObject.breed} is ${dogObject.age} years old/section>`

//     // Return the HTML
//     return dogHTMLSection
// }

// // Invoke the function and give the minion what it needs to do its job.
// const stringReturnedFromFunction = dogHTMLMaker(dog)

// console.log(stringReturnedFromFunction)

// // > "<section>Ringer the Cocker Spaniel is 4 years old/section>"



const computers = [
    {
        id: 1,
        manufacturer: "Apple",
        make: "Macbook",
        model: "Pro",
        specs: [{
            memory: 32,
            hardDrive: "500 GB",
            processor: 2.4
        }]
    }
]


let computerHTML = ""
for (const computer of computers) {
    computerHTML += `\n<section>id="computer--1"\n`
    computerHTML += `\t<h1>${computer.manufacturer} ${computer.make}</h1>\n`
    computerHTML += `\t<div>Model: ${computer.model}</div>\n`
    for (const spec of computer.specs) {
    computerHTML += `\t<div>Memory: ${spec.memory}</div>\n`
    computerHTML += `\t<div>Hard drive space: ${spec.hardDrive}</div>\n`
    computerHTML += `\t<div>Processor speed: ${spec.processor}</div>`
    }
    computerHTML += `\n</section>`
}

console.log(computerHTML)

{/* <section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> */}





