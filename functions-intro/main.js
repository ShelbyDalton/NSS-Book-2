const fillGasTank = (gallons) => {
    if (gallons <= 15) {
        console.log(`I filled the tank with ${gallons} gallons of gas`)
    }
    else if (gallons > 15) {
        console.log(`You cannot add this much gas to the tank.`)
    }
}


fillGasTank(20)