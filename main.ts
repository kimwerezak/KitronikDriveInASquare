// Your Kitronik robot will move in a square by moving forward at speed 20 for a 
// half second, and repeating this process 3 more times.  
// Movement of the robot on different surfaces my provide different results.
function drive_square(speed_forward: number, speed_turn: number) {
    for (let i = 0; i < 4; i++) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed_forward)
        basic.pause(500)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, speed_turn)
        basic.pause(500)
    }
    Kitronik_Move_Motor.stop()
}

