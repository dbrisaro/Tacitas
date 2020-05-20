const button = document.getElementById('button')
const body = document.querySelector('body')
const colors = ['peru', 'white', '#FFD700', 'gray',  '#EAC1DC', '#FF8C69']

body.style.backgroundColor = 'peru'
button.addEventListener('click', changeBackground)

var count = 0;
function changeBackground(){
  var i = count % colors.length;
  const colorIndex= parseInt(Math.random()*colors.length)
  body.style.backgroundColor = colors[i]
  count++
}

