let count = 0
let numberToCheck = 0
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
