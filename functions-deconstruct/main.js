// Hobby: Walk the Dog 
// 1. Put shoes on 
// 2. Put coat on (weather dependant) 
// 3. Grab leash
// 4. Put leash on dog 
// 5. Go outside
// 6. Begin Walk 
// 7. Complete Walk
// 8. Return home 
// 9. Remove leash from dog
// 10. Remove jacket (weather dependant)
// 11. Remove shoes

const currentWeather = ["good weather", /*"bad weather"*/]
// let leaving = ""
// let returning = ""

// const leaving = "good weather"
// const returning = "good weather"

const weatherBearable = "good weather"

const shoesOn = () => {
    console.log(`Put on good walking shoes.`)
}
const coatOn = (weather) => { 
   let weatherCoatOutput = ""
    for (let leaving of currentWeather) {
        if (leaving === "good weather") {
            weatherCoatOutput += `Do not put on a coat.\n`
        }
        else if (leaving === "bad weather") {
            weatherCoatOutput += `Put on a coat.`
        }
    }
    return weatherCoatOutput
}

const grabLeash = () => {
    console.log(`Grab leash or harness for doggo.`)
}
const leashDog = () => {
    console.log(`Put leash on doggo.`)
}
const goOutside = () => {
    console.log(`Head outside or to desired walking destination.`)
}
const beginWalk = () => {
    console.log(`Begin walk.`)
}
const completeWalk = () => {
    console.log(`Walk for desired amount of time or distance until done.`)
}
const returnHome = () => {
    console.log(`Return to home or wherever beginning from (place where shoes and leash were equipt).`)
}
const unclipLeash = () => {
    console.log(`Unclip leash or harness from doggy.`)
}
const removeJacket = () => {
    for (returning of currentWeather) {
        if (returning === "good weather") {
            weather = `You did not put on a coat, so you do not need to remove one.`
        }
        else if (returning === "bad weather") {
            weather = `Take off coat.`
        }
    }
    // console.log(weather)
}
const takeShoesOff = () => {
    console.log(`Take off shoes.`)
}

shoesOn(1)
coatOn(weatherBearable)
grabLeash(3)
leashDog(4)
goOutside(5)
beginWalk(6)
completeWalk(7)
returnHome(8)
unclipLeash(9)
/*removeJacket(10)*/
takeShoesOff(11)


console.log(coatOn(weatherBearable))
console.log(removeJacket())
