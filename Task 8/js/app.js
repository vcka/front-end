document.addEventListener('click', function (event) {
  math(event);
}, false);

function math(event){
  var first = document.querySelector('#firstNum').value;
  var second = document.querySelector('#secondNum').value;

  switch (event.target.name) {
    case 'sum':
      alert("Sum is " + (+first + +second))
      break;
    case 'sub':
      alert("Sub is " + (+first - +second))
      break;
    case 'div':
      alert("Div is " + (+first / +second))
      break;
    case 'mul':
      alert("Mul is " + (+first * +second))
      break;
    case 'mod':
      alert("Mod is " + (+first % +second))
      break;
    default:
  }
}
