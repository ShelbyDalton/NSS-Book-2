
// Declare a function:

const buyClay = () => {
    return {}
}

// Declare an object to run through the function. 

let newBowl = buyClay()

// Create an "obj" as a parameter to insert into the function. 

const makePottery = (obj) => {
    obj.shape = "bowl"  // Here we give our "obj" a _____ which here we call "shape". 
    return obj          // Be sure to return the parameter in the function. 
}
makePottery(newBowl)

// Rinse. Repeat.

const bisqueFire = (obj) => {
    obj.readyForGlazing = true      // <----------------
    return obj
}
bisqueFire(newBowl)

// Here we use an "if/else" statement to check that the "obj" has been bisque fired. 

const glazePottery = (obj) => {
    if (obj.readyForGlazing === true) {     // If we declared that the "obj" was true for 
        obj.glazing = "Midnight Blue"       // the bisque fire above (<--), then we want 
        return obj                          // to return a color of "Midnight Blue"
    }
    else {
        console.log(`Make sure you bisque fire the pottery before you glaze it.`)
    }
}
glazePottery(newBowl)


const finalFiring = (obj, temp) => {
    if (temp >= 1200) {
        obj.cracked = true
    } else if (temp < 1200) {
        obj.cracked = false
    }
    return obj
}
finalFiring(newBowl, 1201)

console.log(newBowl)


