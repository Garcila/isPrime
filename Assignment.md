```template
let numberToCheck = 0
let count = 0
function isPrime (num: number) {
    if (num < 3) {
        basic.showIcon(IconNames.Sad)
        return false
    }
    count = 2
    while (count * count <= num) {
        if (num % count == 0 || num % (count + 2) == 0) {
            basic.showIcon(IconNames.Sad)
            return false
        }
        count += 1
    }
    basic.showIcon(IconNames.Happy)
    return true
}
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    numberToCheck = randint(0, 1000)
    basic.showNumber(numberToCheck)
    isPrime(numberToCheck)
})
```

# Is it Prime
Add code to allow the user to enter a specific number

## Step 1 Find if the number you entered is Prime
### Objective
In this excersice you will add functionality to the provided code, by allowing the user give a number to the Micro:Bit, and have it determine if the number is Prime 🙂, or not 😞

## Step 2
### Current Code
The current code uses the ``||input.shake||`` function to:
- clear the screen
- generate a random number
- display the number on the screen
- run a function to determine if the number is Prime or not
 
```blocks
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    numberToCheck = randint(0, 5)
    basic.showNumber(numberToCheck)
    isPrime(numberToCheck)
})
```

## Step 3
### 🙂 You don't need to change the code in the ``||basic.isPrime||`` function

## Step 4
### Tens
- 1  Create a variable ``||let.tens||`` that starts at 0 and increases by 10, each time the button ``||input.Button.A||`` is pressed.

- 2 Display the current value of the ``||let.tens||`` on the screen.

 
## Step 5
### Ones
- 1 Create a variable ``||let.ones||`` that starts at 0 and increases by 1, each time the button ``||input.Button.B||`` is pressed.

- 2 Display the current value of the ``||let.tens||`` + ``||let.ones||`` on the screen. 
 
 
## Step 6
### Get The Result
When the buttons ``||input.Button.A+B||`` are pressed run the ``||basic.IsPrime||`` function. 
 
## Step 7
### You are done, try it on a Micro:Bit!