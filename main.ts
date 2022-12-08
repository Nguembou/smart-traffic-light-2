input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    radio.sendNumber(4)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    radio.sendNumber(6)
})
basic.showIcon(IconNames.No)
radio.setGroup(79)
basic.forever(function () {
	
})
