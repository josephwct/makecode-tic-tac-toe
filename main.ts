let bg: Image = null
let numCurrentPlayer=1
let numCursorPosition = [0,0]
let imageStar = img`
. . . . . . . b b . . . . . . . 
. . . . . . b d d b . . . . . . 
. . . . . b d 5 5 d b . . . . . 
. . . . b b 5 5 5 5 b b . . . . 
. . . . b 5 5 5 5 5 5 b . . . . 
b b b b b 5 5 5 5 1 1 d b b b b 
b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
b d d 5 5 5 5 5 5 1 1 1 5 d d b 
. b d d 5 5 5 5 5 5 5 5 d d b . 
. . b b 5 5 5 5 5 5 5 5 b b . . 
. . c b 5 5 5 5 5 5 5 5 b c . . 
. . c 5 5 5 5 d d 5 5 5 5 c . . 
. . c 5 5 d b b b b d 5 5 c . . 
. . c 5 d b c c c c b d 5 c . . 
. . c c c c . . . . c c c c . . 
. . . . . . . . . . . . . . . . 
`
let imageHeart = img`
. . . . . . . . . . . . . . . . 
. . f f f f f f . f f f f f f . 
. f f 3 3 3 3 f f f 3 3 3 3 f f 
. f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
. f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
. f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
. f 3 3 3 3 3 b b b 1 1 1 3 3 f 
. f 3 3 3 3 b b b b b 3 3 3 3 f 
. f f 3 3 b b b b b b b 3 3 f f 
. . f f 3 b b b b b b b 3 f f . 
. . . f f b b b b b b b f f . . 
. . . . f f b b b b b f f . . . 
. . . . . f f b b b f f . . . . 
. . . . . . f f b f f . . . . . 
. . . . . . . f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`
let imageBlank = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
let imageBlack = img`
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f
f f f f f f f f f f f f f f f f 
`
let animationHeart = [imageBlack, imageHeart, imageHeart]
let animationStar = [imageBlack, imageStar, imageStar]

let boardArray = [[0,0,0],[0,0,0],[0,0,0]]
let spriteArray = [
    [sprites.create(imageBlank, SpriteKind.Player),sprites.create(imageBlank, SpriteKind.Player),sprites.create(imageBlank, SpriteKind.Player)],
    [sprites.create(imageBlank, SpriteKind.Player),sprites.create(imageBlank, SpriteKind.Player),sprites.create(imageBlank, SpriteKind.Player)],
    [sprites.create(imageBlank, SpriteKind.Player),sprites.create(imageBlank, SpriteKind.Player),sprites.create(imageBlank, SpriteKind.Player)]
]
let spriteCursor = sprites.create(imageBlank, SpriteKind.Player)
spriteCursor.scale = 2

drawBoard()
drawSprite()
drawCursor() 
checkEndGame()
function drawCursor() {
    spriteCursor.setPosition(40 + 40 * numCursorPosition[0] , 20 + 40 * numCursorPosition[1] )
    animation.runImageAnimation(
        spriteCursor,
        (numCurrentPlayer == 1)? animationHeart:animationStar,
        750,
        true
        )
}
function drawSprite() {
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++){
            spriteArray[x][y].setPosition(40 + 40 * x , 20 + 40 * y)
            spriteArray[x][y].scale = 2
        }
    }
}
function drawBoard() {
    bg = image.create(screen.width, screen.height)
    bg.drawLine(22, 39, 138, 39, 9)
    bg.drawLine(20, 40, 140, 40, 9)
    bg.drawLine(22, 40, 138, 40, 1)
    bg.drawLine(22, 41, 138, 41, 9)

    bg.drawLine(22, 79, 138, 79, 9)
    bg.drawLine(20, 80, 140, 80, 9)
    bg.drawLine(22, 80, 138, 80, 1)
    bg.drawLine(22, 81, 138, 81, 9)

    bg.drawLine(59, 2, 59, 118, 9)
    bg.drawLine(60, 0, 60, 120, 9)
    bg.drawLine(60, 2, 60, 118, 1)
    bg.drawLine(61, 2, 61, 128, 9)

    bg.drawLine(99, 2, 99, 118, 9)
    bg.drawLine(100, 0, 100, 120, 9)
    bg.drawLine(100, 2, 100, 118, 1)
    bg.drawLine(101, 2, 101, 118, 9)
    scene.setBackgroundImage(bg)
}
function checkEndGame() {
    if (
        (boardArray[0][0] != 0 && boardArray[0][0] == boardArray[0][0] && boardArray[0][0] == boardArray[0][1] && boardArray[0][0] == boardArray[0][2] ) ||
        (boardArray[1][0] != 0 && boardArray[1][0] == boardArray[1][0] && boardArray[1][0] == boardArray[1][1] && boardArray[1][0] == boardArray[1][2] ) ||
        (boardArray[2][0] != 0 && boardArray[2][0] == boardArray[2][0] && boardArray[2][0] == boardArray[2][1] && boardArray[2][0] == boardArray[2][2] ) ||
        
        (boardArray[0][0] != 0 && boardArray[0][0] == boardArray[0][0] && boardArray[0][0] == boardArray[1][0] && boardArray[0][0] == boardArray[2][0]) ||
        (boardArray[0][1] != 0 && boardArray[0][1] == boardArray[0][1] && boardArray[0][1] == boardArray[1][1] && boardArray[0][1] == boardArray[2][1]) ||
        (boardArray[0][2] != 0 && boardArray[0][2] == boardArray[0][2] && boardArray[0][2] == boardArray[1][2] && boardArray[0][2] == boardArray[2][2]) ||
        
        (boardArray[0][0] != 0 && boardArray[0][0] == boardArray[0][0] && boardArray[0][0] == boardArray[1][1] && boardArray[0][0] == boardArray[2][2]) ||
        (boardArray[2][0] != 0 && boardArray[2][0] == boardArray[2][0] && boardArray[2][0] == boardArray[1][1] && boardArray[2][0] == boardArray[0][2] ) 
    ) {
        game.setGameOverMessage(true, (numCurrentPlayer == 1)?"Heart won":"Star won")
        game.gameOver(true)
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (numCursorPosition[1] > 0) numCursorPosition[1] -= 1
    drawCursor() 
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (numCursorPosition[1] < 2) numCursorPosition[1] += 1
    drawCursor() 
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (numCursorPosition[0] > 0) numCursorPosition[0] -= 1
    drawCursor() 
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (numCursorPosition[0] < 2) numCursorPosition[0] += 1
    drawCursor() 
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (boardArray[numCursorPosition[0]][numCursorPosition[1]] == 0) {
        boardArray[numCursorPosition[0]][numCursorPosition[1]] = numCurrentPlayer
        spriteArray[numCursorPosition[0]][numCursorPosition[1]].setImage(
            (numCurrentPlayer == 1)? imageHeart:imageStar
        )
        checkEndGame()
        numCurrentPlayer = (numCurrentPlayer == 1) ? 2 : 1
        drawCursor() 
    }
})
