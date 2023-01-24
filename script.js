import dogs from './data.js'
import Dog from './Dog.js'

const dogsArray = dogs

document.getElementById('ignored-btn').addEventListener('click', function() {
  if(dogsArray.length > 0){
    dog = getNewDog()
    render()
  } else {
    endOfDogs()
  }
})


document.getElementById('liked-btn').addEventListener('click', function() {
  if(dogsArray.length > 0){
    dog = getNewDog()
    render()
  } else {
    endOfDogs()
  }
})

function endOfDogs() {
  document.getElementById('end').innerHTML = `
    <div id="endly" class="endly">
      <h3>This is all for now! 💔</h3>
    </div>
  `
  document.getElementById('end').style.background = "#E38CA9"
}

function getNewDog () {
  const dog = new Dog(dogsArray.shift())
  return dog ? dog : {}
}

function render() {
  document.getElementById('jan').innerHTML = dog.getDogHtml()
  document.getElementById('jan').style.backgroundImage = `url("${dog.avatar}")`
}

let dog = getNewDog()
render()
