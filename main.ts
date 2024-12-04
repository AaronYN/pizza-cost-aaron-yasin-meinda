let HST = 0.13
let MATERIALS = 0.5
let RENT = 1
let LABOUR = 0.75
let diameter = game.askForNumber("What is the diamater of the pizza?")
let subtotal = RENT + LABOUR + MATERIALS * diameter
let tax = HST * subtotal
let total = subtotal + tax
game.splash("Your subtoal is : $" + ("" + subtotal))
game.splash("Your total is: $" + ("" + total))
