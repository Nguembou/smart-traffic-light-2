input.onButtonPressed(Button.A, function () {
    Entry = ["A"]
})
input.onButtonPressed(Button.AB, function () {
    if (password == Entry) {
        radio.sendNumber(4)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showIcon(IconNames.Yes)
    }
    basic.pause(1000)
    basic.clearScreen()
    Entry = [""]
})
input.onButtonPressed(Button.B, function () {
    Entry = ["B"]
})
let Entry: string[] = []
let password: string[] = []
basic.showIcon(IconNames.No)
password = [
"A",
"B",
"A",
"A"
]
Entry = [""]
radio.setGroup(79)
pins.servoWritePin(AnalogPin.P0, 0)
