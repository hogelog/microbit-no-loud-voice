let 声が大きい = false
music.setVolume(255)
basic.forever(function () {
    if (声が大きい) {
        music.ringTone(587)
        basic.showLeds(`
            . . . . .
            # . . . #
            . # . # .
            . . . . .
            . # # # .
            `)
    } else {
        music.stopAllSounds()
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (input.soundLevel() >= 140) {
        声が大きい = true
        basic.pause(1500)
    } else {
        声が大きい = false
    }
})
