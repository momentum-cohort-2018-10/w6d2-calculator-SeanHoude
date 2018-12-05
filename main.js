let buttons = document.querySelectorAll('.click')
let display = document.querySelector('#display')
let calc = document.querySelector('#calculate')
let clear = document.querySelector('#clear-display')
let operators = document.querySelectorAll('.operator')
let decimal = document.querySelector('#decimal')
let history = document.querySelector('#history')
let zero = document.querySelector('#zero')

for (let element of buttons) {
    element.addEventListener("click", function(event) {
        display.innerHTML += event.target.innerHTML
    })
}

for (let element of operators) {
    element.addEventListener("click", function(event) {
        display.innerHTML += (' ' + event.target.innerHTML + ' ')
    })
}

function calculateFunc() {
    try {
        item = document.createElement('li')
        item.innerHTML = display.innerHTML + ' = '
        display.innerHTML = math.eval(display.innerHTML)
        item.innerHTML += display.innerHTML
        history.insertBefore(item, history.firstChild)
    }
    catch {
        display.innerHTML = 'Invalid Input!'
        setTimeout(function () { display.innerHTML = '' }, 2000)
    }
}

calc.addEventListener('click', calculateFunc)

clear.addEventListener('click', function() {
    display.innerHTML = ""
})

function zeroFunc() {
    if (display.innerText !== '') {display.innerHTML += 0}
}

zero.addEventListener('click', zeroFunc)

function decimalFunc() {
    if (display.innerText === '') { display.innerHTML = '0.' }
    else { 
        display.innerHTML += event.target.innerHTML
        display.innerHTML = display.innerHTML.replace(/([^.]*\.[^.]*)\./g, '$1')
    }
}

decimal.addEventListener('click', decimalFunc)

document.addEventListener('keyup', function(event) {
  if (event.keyCode === 13 ) { calculateFunc() }
  if (event.keyCode === 48 ) { zeroFunc() }
  if (event.keyCode === 49 ) { display.innerHTML += 1 }
  if (event.keyCode === 50 ) { display.innerHTML += 2 }
  if (event.keyCode === 51 ) { display.innerHTML += 3 }
  if (event.keyCode === 52 ) { display.innerHTML += 4 }
  if (event.keyCode === 53 ) { display.innerHTML += 5 }
  if (event.keyCode === 54 ) { display.innerHTML += 6 }
  if (event.keyCode === 55 ) { display.innerHTML += 7 }
  if (event.keyCode === 56 ) { display.innerHTML += 8 }
  if (event.keyCode === 57 ) { display.innerHTML += 9 }
  if (event.keyCode === 190 ) { decimalFunc() }
  if (event.keyCode === 191 ) { display.innerHTML += ' / ' }
  if (event.keyCode === 189 ) { display.innerHTML += ' - ' }
  if (event.keyCode === 187 ) { display.innerHTML += ' + ' }
})