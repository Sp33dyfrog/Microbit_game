input.onButtonPressed(Button.A, function () {
    turtle.turnLeft()
    turtle.forward(1)
    turtle.turnRight()
})
input.onButtonPressed(Button.AB, function () {
    turtle.back(1)
})
input.onButtonPressed(Button.B, function () {
    turtle.turnRight()
    turtle.forward(1)
    turtle.turnLeft()
})
basic.forever(function () {
    if (input.logoIsPressed()) {
        turtle.forward(1)
    }
})
