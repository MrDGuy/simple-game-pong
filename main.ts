let ball = sprites.create(assets.image`Ball`, SpriteKind.Enemy)
let paddle1 = sprites.create(assets.image`Paddle`, SpriteKind.Player)
paddle1.setPosition(1, scene.screenHeight() / 2)
paddle1.setStayInScreen(true)
let paddle2 = sprites.create(img`
        5 5 5 5 5
        5 5 5 5 5
        5 5 5 5 5
        5 5 5 5 5
        5 5 5 5 5
        5 5 5 5 5
        5 5 5 5 5
        5 5 5 5 5
        5 5 5 5 5
        5 5 5 5 5
        5 5 5 5 5
        5 5 5 5 5
        5 5 5 5 5
        5 5 5 5 5
        5 5 5 5 5
        5 5 5 5 5
`, SpriteKind.Player)
paddle2.setPosition(scene.screenWidth(), scene.screenHeight() / 2)
paddle2.setStayInScreen(true)
controller.player1.moveSprite(paddle1, 0, 100)
controller.player2.moveSprite(paddle2, 0, 100)
function game_start() {
    ball.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2)
    let rand_x = randint(0, 1)
    let rand_y = randint(-100, 100)
    ball.setVelocity(-100 + rand_x * 200, rand_y)
    ball.setBounceOnWall(true)
}

game_start()
forever(function on_forever() {
    if (ball.x + ball.width / 2 > scene.screenWidth()) {
        info.player1.changeScoreBy(1)
        game_start()
    } else if (ball.x - ball.width / 2 <= 0) {
        info.player2.changeScoreBy(1)
        game_start()
    } else if (ball.overlapsWith(paddle1)) {
        ball.vx = -1 * ball.vx
    } else if (ball.overlapsWith(paddle2)) {
        ball.vx = -1 * ball.vx
    }
    
})
