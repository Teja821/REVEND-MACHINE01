import machine
import utime

# Define pins for DC motors, hydraulic rod, and heater
motor1_pin = machine.Pin(0, machine.Pin.OUT)
motor2_pin = machine.Pin(1, machine.Pin.OUT)
motor3_pin = machine.Pin(2, machine.Pin.OUT)
hydraulic_rod_pin = machine.Pin(3, machine.Pin.OUT)
heater_pin = machine.Pin(4, machine.Pin.OUT)

# Define PWM for motors and hydraulic rod
motor1_pwm = machine.PWM(motor1_pin)
motor2_pwm = machine.PWM(motor2_pin)
motor3_pwm = machine.PWM(motor3_pin)
hydraulic_pwm = machine.PWM(hydraulic_rod_pin)

# Set frequency for PWM
motor1_pwm.freq(1000)
motor2_pwm.freq(1000)
motor3_pwm.freq(1000)
hydraulic_pwm.freq(1000)

# Function to activate motor

def run_motor(motor_pwm, duty_cycle):
    motor_pwm.duty_u16(int(duty_cycle * 65535 / 100))

# Function to stop motor

def stop_motor(motor_pwm):
    motor_pwm.duty_u16(0)

# Function to control hydraulic rod

def operate_hydraulic(duration):
    hydraulic_pwm.duty_u16(32768)  # Half speed
    utime.sleep(duration)
    hydraulic_pwm.duty_u16(0)

# Function to control heater

def activate_heater(state):
    if state:
        heater_pin.on()
    else:
        heater_pin.off()

# Main operation
try:
    while True:
        # Step 1: Activate hydraulic rod to take input
        print("Activating hydraulic rod...")
        operate_hydraulic(2)  # Adjust duration as needed
        
        # Step 2: Run motor1 to crush plastic
        print("Running motor1 to crush plastic...")
        run_motor(motor1_pwm, 75)  # Adjust duty cycle as needed
        utime.sleep(5)  # Adjust duration as needed
        stop_motor(motor1_pwm)
        
        # Step 3: Run motor2 to send plastic to bin
        print("Running motor2 to move plastic to bin...")
        run_motor(motor2_pwm, 75)
        utime.sleep(3)  # Adjust duration as needed
        stop_motor(motor2_pwm)
        
        # Step 4: Activate heater to melt plastic
        print("Activating heater to melt plastic...")
        activate_heater(True)
        utime.sleep(10)  # Adjust duration as needed
        activate_heater(False)
        
        # Step 5: Run motor3 to move melted plastic to final bin
        print("Running motor3 to move melted plastic...")
        run_motor(motor3_pwm, 75)
        utime.sleep(3)  # Adjust duration as needed
        stop_motor(motor3_pwm)

        print("Cycle complete. Waiting for next input...")
        utime.sleep(5)  # Delay between cycles

except KeyboardInterrupt:
    print("Process interrupted. Stopping all operations.")
    stop_motor(motor1_pwm)
    stop_motor(motor2_pwm)
    stop_motor(motor3_pwm)
    hydraulic_pwm.duty_u16(0)
    activate_heater(False)