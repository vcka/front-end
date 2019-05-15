document.querySelector('[name="button"]').addEventListener('click', setRandomColor);
document.querySelector('[name="button"]').addEventListener('dblclick', h1rewrite);
document.querySelector('[name="add"]').addEventListener('click', function(){
  var msg = prompt("Please enter town name", content);
  if (msg != null) {
    draw(msg);
  }
});

let list = ['Vilnius', 'Kaunas', 'Klaipeda']
let draw = function draw(item){
  var li = document.getElementById('list').innerHTML +=
  `<li class="element">
    <button type="button" class="delete">Delete</button>
    <span> ${item} </span>
    <button type="button" class="edit">Edit</button>
  </li>`;
}
let content = list.forEach(function(item){
  draw(item);
})


const deleteButtons = document.querySelectorAll(".delete")
for (const element of deleteButtons) {
  element.addEventListener('click', function(event) {
    this.parentNode.remove();
  })
}

const editButtons = document.querySelectorAll(".edit")
for (const editButton of editButtons) {
  const content = editButton.previousSibling.innerHTML;
  editButton.addEventListener('click', function(event) {
    var msg = prompt("Please enter town name", content);
    if (msg != null) {
      this.previousSibling.innerHTML = " " + msg + " ";
    }
  })
}

function h1rewrite(){
document.getElementById("test").innerHTML = "New text!";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  document.body.style.backgroundColor =  getRandomColor();
}
