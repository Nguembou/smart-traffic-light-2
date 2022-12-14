input.onButtonPressed(Button.A, function () {
    Entry = "" + Entry + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (password == Entry) {
        radio.sendNumber(4)
        basic.showIcon(IconNames.Yes)
        pins.servoWritePin(AnalogPin.P0, 0)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(175, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.No)
        Entry = ""
    }
    basic.pause(200)
    Entry = ""
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    radio.sendNumber(6)
})
let Entry = ""
let password = ""
basic.showIcon(IconNames.No)
password = "AAAAAAAA"
Entry = ""
pins.servoWritePin(AnalogPin.P0, 0)
radio.setGroup(79)
