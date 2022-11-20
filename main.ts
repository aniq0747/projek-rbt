input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    servos.P0.setAngle(90)
    music.playTone(262, music.beat(BeatFraction.Breve) * 2.5)
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    servos.P0.setAngle(0)
})
pins.digitalWritePin(DigitalPin.P1, 1)
