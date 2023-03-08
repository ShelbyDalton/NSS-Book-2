const { restaurantPrice } = require("./fishMonger.js")

const fishies = restaurantPrice()

const chefPrice = 5.00
const chefsInventory = restaurantPrice(chefPrice)
// console.log(chefsInventory)

const restaurantMenuHTML = () => {
    let menuHTML = ""
    menuHTML += `\n<h1>Menu</h1>`
    menuHTML += `\n<article class="menu">`
    for (const fishDish of chefsInventory) {
        menuHTML += `\n\t<h2>${fishDish.species}</h2>`
       // Does not need a "for" loop!
            menuHTML += `\n\t<section class="menu_item">${fishDish.species} Soup</section>`
       // Does not need a "for" loop!
            menuHTML += `\n\t<section class="menu_item">${fishDish.species} Sandwich</section>`
       // Does not need a "for" loop!
            menuHTML += `\n\t<section class="menu_item">Grilled ${fishDish.species}</section>`
        }
    
    menuHTML += `\n</article>`


    return menuHTML
}


const fishMenu = restaurantMenuHTML()
console.log(fishMenu)


