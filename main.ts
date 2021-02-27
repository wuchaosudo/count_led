input.onButtonPressed(Button.A, function () {
    count += 1
    basic.showNumber(count)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    count = 0
})
input.onButtonPressed(Button.B, function () {
    count += -1
    basic.showNumber(count)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Heart)
})
let count = 0
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
