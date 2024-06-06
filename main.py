#Your Kitronik robot will move in a square by moving forward at speed 20 for a 
#half second, and repeating this process 3 more times.  
#Movement of the robot on different surfaces my provide different results.

def drive_square(speed_forward, speed_turn):
    for i in range(4):
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.FORWARD, speed_forward)
        basic.pause(500)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.LEFT, speed_turn)
        basic.pause(500)
    Kitronik_Move_Motor.stop()
