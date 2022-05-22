input.onButtonPressed(Button.A, function () {
    Letter += 1
    Word = text_list[Letter]
    basic.showString("" + (Word))
})
radio.onReceivedString(function (receivedString) {
    soundExpression.hello.playUntilDone()
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("" + (Word))
    music.playMelody("C D E F G A B C5 ", 540)
    basic.pause(100)
    Letter = 0
})
let Word = ""
let Letter = 0
let text_list: string[] = []
text_list = [
"",
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]
