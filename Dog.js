class Dog {
  constructor(data) {
    Object.assign(this, data)
  }
  getDogHtml() {
    const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
    return `
    <div class="dog-info">
      <h2>${name}, ${age}</h2>
      <p>${bio}</p>
    </div>
    `
  }
  madeDogLiked() {
    this.hasBeenLiked = true
  }
  madeDogSwiped() {
    this.hasBeenSwiped = true
  }
}
export default Dog
