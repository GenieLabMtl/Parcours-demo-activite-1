input.onButtonPressed(Button.A, function () {
    count += -1
})
input.onButtonPressed(Button.B, function () {
    count += 1
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (count))
    basic.pause(2000)
    basic.clearScreen()
})
let count = 0
count = 0
