basic.showLeds(`
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # # # #
    . . . . #
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . # # # #
    . . . . #
    . . . # .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # # #
    . . . . #
    . . . # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . # #
    . . . . #
    . . . # .
    . . # . .
    . # . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . #
    . # . # .
    # . # . .
    . # . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . . . .
    . # . # .
    # . . . #
    `)
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    # . # . #
    . # . # .
    # . . . #
    . # . # .
    # . # . #
    `)
basic.forever(function () {
    music.playMelody("C5 G B A F A C5 B ", 120)
    music.playMelody("C5 A B G A F G E ", 120)
    basic.showLeds(`
        # # . # #
        . . . . .
        # . # . #
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . # . #
        . # . # .
        `)
    basic.showLeds(`
        # # . # #
        . . . . .
        # . # . #
        . # . # .
        . . . . .
        `)
    basic.showString("soy timido uwu")
    music.playMelody("C5 G B A F A C5 B ", 120)
})
