let add = document.getElementById('plus')
let subtract = document.getElementById('minus')
let input = document.getElementById('input')
let display = document.getElementById('display')
let currVal = 0

add.addEventListener('click', () => {
    let adder = parseInt(input.value)
    if(input.value == 0){
      adder = 1
    }
    currVal += adder
    display.innerHTML = currVal
    changeColor()
});

subtract.addEventListener('click', () => {
  let sub = parseInt(input.value)
  if(input.value == 0){
    sub = 1
  }
  currVal -= sub
  display.innerHTML = currVal
  changeColor()
});

function changeColor() {
  if(currVal < 0){
    display.style.color = 'red'
  } else{
    display.style.color = 'black'
  }
}
