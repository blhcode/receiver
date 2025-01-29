radio.onReceivedNumber(function (receivedNumber) {
    pins.digitalWritePin(DigitalPin.P0, receivedNumber)
})
basic.forever(function () {
	
})
