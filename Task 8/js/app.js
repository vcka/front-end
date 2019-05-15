document.addEventListener('click', function (event) {
  var first = document.querySelector('#firstNum').value;
  var second = document.querySelector('#secondNum').value;

if (event.target.matches('#sum')) {
  alert("Sum is " + (+first + +second))
}else if (event.target.matches('#sub')) {
  alert("Sub is " + (+first - +second))
}else if (event.target.matches('#div')) {
  alert("Div is " + (+first / +second))
}else if (event.target.matches('#mul')) {
  alert("Mul is " + (+first * +second))
}else if (event.target.matches('#mod')) {
  alert("Mod is " + (+first % +second))
};

}, false);
