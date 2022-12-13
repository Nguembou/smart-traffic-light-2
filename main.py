input.onButtonPressed(Button.A, function () {
    password = Entry[0]
})
input.onButtonPressed(Button.AB, function () {
    if (password == Entry) {
        radio.sendNumber(4)
        basic.showIcon(IconNames.Yes)
        pins.servoWritePin(AnalogPin.P0, 0)
    }
    basic.pause(200)
    Entry = [""]
})
input.onButtonPressed(Button.B, function () {
    password = Entry[1]
})
let password: string[] = []
let Entry: string[] = []
basic.showIcon(IconNames.No)
Entry = [""]
password = [
"A",
"B",
"A",
"A"
]
pins.servoWritePin(AnalogPin.P0, 0)
radio.setGroup(79)
