var currentNumberwrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberwrapper.innerHTML = currentNumber;
    currentNumberwrapper.style.color ='#090B36';
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberwrapper.innerHTML = currentNumber;
    currentNumberwrapper.style.color ='#A02C09';
}