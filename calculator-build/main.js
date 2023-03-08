const add = (numberOne, numberTwo) => {
    const sum = numberOne + numberTwo
    return sum
}

let addition = add(22, 13)
console.log(addition)

const subtract = (numberOne, numberTwo) => {
    const difference = numberOne - numberTwo 
    return difference
}

let subtraction = subtract(-13, -7)
console.log(subtraction)

const divide = (numberOne, numberTwo) => {
    const quotient = numberOne / numberTwo
    return quotient
}

let division = divide(60, 2.5)
console.log(division)

const multiply = (numberOne, numberTwo) => {
    const product = numberOne * numberTwo 
    return product
}

let multiplication = multiply(2, 0.75)
console.log(multiplication)

const square = (numberOne) => {
    const squaredNum = numberOne * numberOne
    return squaredNum
}

let squared = square(50)
console.log(squared)

const squareRoot = (numberOne) => {
    const squareRooted = Math.sqrt(numberOne)
    return squareRooted
}

let squaredRoot = squareRoot(500)
console.log(squaredRoot)



// A quarter of the animals on the farm have four legs.
// The remaining three quarters of the animals have two
// legs. If there are 60 legs overall, how many animals
// are on the farm?


// (0.25x*4) + (0.75x*2) = 60 
// (x) + (1.5x) = 60 
// (2.5x) = 60 
// (2.5x)/2.5 = 60/2.5
// x = 24