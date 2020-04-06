let add = document.getElementById('plus')
let subtract = document.getElementById('minus')
let input = document.getElementById('input')
let display = document.getElementById('display')
let currVal = 0

add.addEventListener('click', () => {
    let adder = parseInt(input.value)
    currVal += adder
    display.innerHTML = currVal

});

subtract.addEventListener('click', () => {
  let sub = parseInt(input.value)
  currVal -= sub
  display.innerHTML = currVal
  if(currVal < 0){
    display.style.color = 'red'
  }
});
