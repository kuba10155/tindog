import dogs from './data.js'
import Dog from './Dog.js'

const dogsArray = dogs
const likeBtn = document.getElementById('liked-btn')
const swipeBtn = document.getElementById('ignored-btn')
const main = document.getElementById('main')

swipeBtn.addEventListener('click', function() {
  likeBtn.disabled = true
  swipeBtn.disabled = true
  dog.madeDogSwiped()
  renderMessage("nope")
  if(dogsArray.length > 0){
    dog = getNewDog()
    setTimeout(() => render(), 1000)
  } else {
    setTimeout(() => endOfDogs(), 1000)
  }
})

likeBtn.addEventListener('click', function() {
  likeBtn.disabled = true
  swipeBtn.disabled = true
  dog.madeDogLiked()
  renderMessage("like")
  if(dogsArray.length > 0){
    dog = getNewDog()
    setTimeout(() => render(), 1000)
  } else {
    setTimeout(() => endOfDogs(), 1000)
  }
})

function endOfDogs() {
  document.getElementById('end').innerHTML = `
    <div id="endly" class="endly">
      <h3>This is all for now! 💔</h3>
    </div>`
  document.getElementById('end').style.background = "#E38CA9"
}

function getNewDog () {
  const dog = new Dog(dogsArray.shift())
  return dog ? dog : {}
}

function renderMessage(message) {
  main.innerHTML += `
    <img class="message" src="/${message}-image.png"></img>`
}

function render() {
  main.innerHTML = dog.getDogHtml()
  main.style.backgroundImage = `url("${dog.avatar}")`
  likeBtn.disabled = false
  swipeBtn.disabled = false
}

let dog = getNewDog()
render()
