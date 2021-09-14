export class House {
  constructor(houseData) {
    this.id = houseData.id
    this.price = houseData.price
    this.bedrooms = houseData.bedrooms
    this.bathrooms = houseData.bathrooms
    this.levels = houseData.levels
    this.year = houseData.year
    this.description = houseData.description
    this.img = houseData.img
  }

  get CardTemplate() {
    return /* html */`
    <div class="col-lg-3 my-3 listing bg-color rounded">
      <div class="card custom-font">
        <img src="${this.img}" alt="listing image" class="rounded img-size">
        <div class="card-body">
          <p class="d-flex justify-content-between">
          Bedrooms: ${this.bedrooms} | Bathrooms: ${this.bathrooms} </p>
          <p class="d-flex justify-content-between">Price: $${this.price} | Year: ${this.year}</p>
          <p>${this.description}</p>
          <button class="btn btn-color" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
          <button class="btn btn-info" onclick="app.housesController.editHouse('${this.id}')">Edit</button>
        </div>
      </div>
    </div>
    `
  }
}
