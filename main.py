def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    turtle.back(1)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    if input.logo_is_pressed():
        turtle.forward(1)
basic.forever(on_forever)
