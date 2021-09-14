export class Animal {
  constructor(animalData) {
    this.animalType = animalData.animalType
    this.breed = animalData.breed
    this.gender = animalData.gender
    this.age = animalData.age
    this.price = animalData.price
    this.img = animalData.img
    this.description = animalData.description
  }

  get CardTemplate() {
    return /* html */`
    <div class="col-lg-4 mb-4 listing">
      <div class="card custom-font">
        <img src="${this.img}" alt="listing image" class="rounded">
        <div class="card-body">
          <p class="d-flex justify-content-between">
          ${this.animalType} | ${this.breed} </p>
          <p class="d-flex justify-content-between">Age: ${this.age} | Gender: ${this.gender}</p>
          <p>Price: $${this.price}</p>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `
  }
}
