input.onButtonPressed(Button.A, function () {
    entry = "" + entry + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (password == entry) {
        basic.showIcon(IconNames.Yes)
        pins.servoWritePin(AnalogPin.P0, 90)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(500)
    basic.clearScreen()
    entry = ""
})
input.onButtonPressed(Button.B, function () {
    entry = "" + entry + "B"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
})
let entry = ""
let password = ""
password = "ABABA"
entry = ""
pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
	
})
