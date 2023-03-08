

// const addBody = (chassisObject) => {
//         // Use dot notation to add a new property
//     chassisObject.body = "Fever"
    
//         // Return the chassis that now has a body property on it
//     return chassisObject
// }


// No parameters defined because function needs nothing to do its job
const createChassis = () => {
    // Create a new object. No properties yet.
    const newChassisObject = {

    }

    return newChassisObject
}


let chassis = createChassis()
// console.log(chassis)
// > {}

const addBody = (chassisObject) => {
    chassisObject.Body = "Fever"
    return chassisObject
}

let chassisWithBody = addBody(chassis)
// console.log(chassisWithBody)

const addWheels = (chassisObject) => {
    chassisObject.Wheels = 4
    return chassisObject
}

let chassisWithWheels = addWheels(chassis)
// console.log(chassisWithWheels)

const addSteeringWheel = (chassisObject) => {
    chassisObject.SteeringWheel = "Tilting"
    return chassisObject
}

let chassisWithSteeringWheel = addSteeringWheel(chassis)
// console.log(chassisWithSteeringWheel)

const addDriveTrain = (chassisObject) => {
    chassisObject.DriveTrain = "Two Wheel Drive"
    return chassisObject
}

let chassisDriveTrain = addDriveTrain(chassis)
// console.log(chassisDriveTrain)

const addColor = (chassisObject) => {
    chassisObject.olor = "Purple"
    return chassisObject
}

let chassisColor = addColor(chassis)

console.log(chassis)














































// function assembleCar(initialCarParts) {
 
//     let modifiedCar = {};
//     let engine;
 
//     if (initialCarParts.power <= "4.8L") {
//         engine = {
//             power: "4.8L",
//         };
//     }
 
//     let wheels = [];
//     if (initialCarParts.wheelsNum = 4) {
//     }
//     for (let i = 0; i < 4; i++) {
//         wheels.push(initialCarParts.wheelsNum);
//     }
 
 
//     modifiedCar.model = initialCarParts.model;
//     modifiedCar.engine = engine;
//     modifiedCar.driveTrain = {
//         type: initialCarParts.driveTrain,
//     };
//     modifiedCar.wheels = wheels;
 
//     return modifiedCar;
// }
 
// console.log(assembleCar(
//     {
//         model: 'Fever',
//         power: "4.8L",
//         driveTrain: 'Two Wheel Drive',
//         wheelsNum: 4
//     }));