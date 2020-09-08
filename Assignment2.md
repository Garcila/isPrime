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
Get comfortable modifying existing code

## Step 1 Find if the number you entered is Prime
### Starter Project
You are provided with working code that determines if a random generated number is Prime 🙂 or not 😞. 

#### You don't need to change the code in the ``||basic.isPrime||`` function

## Step 2
### Current code on ``||input.shake||``
The current code uses the ``||input.shake||`` function to:
- clear the screen
- generate a random number
- display the number on the screen
- run a function to determine if the number is Prime or not

## Step 3
### Your task
Modify the code to allow the user enter a number between 100 and 2000 to test instead of the random number used by the ``||input.shake||`` function
 
## Step 4
### You are done, try it on a Micro:Bit!




<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
