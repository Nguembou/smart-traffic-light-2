input.onButtonPressed(Button.A, function () {
    Entry = "" + Entry + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (password == Entry) {
        radio.sendNumber(4)
        basic.showIcon(IconNames.Yes)
        pins.servoWritePin(AnalogPin.P0, 0)
    }
    basic.pause(200)
    Entry = ""
})
input.onButtonPressed(Button.B, function () {
    Entry = "" + Entry + "B"
})
let Entry = ""
let password = ""
basic.showIcon(IconNames.No)
password = "BABAA"
Entry = ""
pins.servoWritePin(AnalogPin.P0, 0)
radio.setGroup(79)
