ball = sprites.create(assets.image("""Ball"""), SpriteKind.enemy)
paddle1 = sprites.create(assets.image("""Paddle"""), SpriteKind.player)
paddle1.set_position(1, scene.screen_height()/2)
paddle1.set_stay_in_screen(True)
paddle2 = sprites.create(img("""
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
"""), SpriteKind.player)
paddle2.set_position(scene.screen_width(), scene.screen_height()/2)
paddle2.set_stay_in_screen(True)
controller.player1.move_sprite(paddle1,0,100)
controller.player2.move_sprite(paddle2,0,100)
def game_start():
    ball.set_position(scene.screen_width()/2, scene.screen_height()/2)
    rand_x = randint(0, 1)
    rand_y = randint(-100,100)
    ball.set_velocity(-100+rand_x*200, rand_y)
    ball.set_bounce_on_wall(True)

game_start()

def on_forever():
    if (ball.x+ball.width/2) > scene.screen_width():
        info.player1.change_score_by(1)
        game_start()
    elif (ball.x-ball.width/2) <= 0:
        info.player2.change_score_by(1)
        game_start()
    elif ball.overlaps_with(paddle1):
        ball.vx = -1*ball.vx
    elif ball.overlaps_with(paddle2):
        ball.vx = -1*ball.vx
forever(on_forever)