input.onPinPressed(TouchPin.P0, function () {
    P1_aangeraakt = 0
    P2_aangeraakt = 0
    Verschenen = 0
    basic.showString("3 2 1 ")
    basic.pause(randint(1000 * WachtMin, 1000 * WachtMax))
    if (P1_aangeraakt == 0 && P2_aangeraakt == 0) {
        basic.showIcon(IconNames.SmallDiamond)
        Verschenen = 1
    }
})
input.onPinPressed(TouchPin.P2, function () {
    P2_aangeraakt = 1
    if (P1_aangeraakt == 0) {
        if (Verschenen == 1) {
            basic.showArrow(ArrowNames.NorthEast)
        } else {
            basic.showArrow(ArrowNames.SouthEast)
        }
    }
})
input.onPinPressed(TouchPin.P1, function () {
    P1_aangeraakt = 1
    if (P2_aangeraakt == 0) {
        if (Verschenen == 1) {
            basic.showArrow(ArrowNames.NorthWest)
        } else {
            basic.showArrow(ArrowNames.SouthWest)
        }
    }
})
let Verschenen = 0
let P2_aangeraakt = 0
let P1_aangeraakt = 0
let WachtMax = 0
let WachtMin = 0
basic.showIcon(IconNames.SmallDiamond)
WachtMin = 3
WachtMax = 12
