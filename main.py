HST = 0.13
MATERIALS = 0.5
RENT = 1
LABOUR = 0.75
diameter = game.ask_for_number("What is the diamater of the pizza?")
subtotal = RENT + LABOUR + MATERIALS * diameter
tax = HST * subtotal
total = subtotal + tax
game.splash("Your subtoal is : $" + str(subtotal))
game.splash("Your total is: $" + str(total))