
export class Car {
  constructor(carData) {
    this.id = carData.id
    this.make = carData.make
    this.model = carData.model
    this.year = carData.year
    this.color = carData.color
    this.mileage = carData.mileage
    this.description = carData.description
    this.price = carData.price
    this.img = carData.img
  }

  get CardTemplate() {
    return /* html */`
    <div class="col-lg-3 my-3  listing bg-color rounded">
      <div class="card custom-font">
        <img src="${this.img}" alt="listing image" class="rounded img-size">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span style="color: ${this.color}" >${this.make} - ${this.model}</span>
            <span>$ ${this.price}</span>
          </h5>
          <p>${this.description}</p>
          <button class="btn btn-color" onclick="app.carsController.deleteCar('${this.id}')">Delete</button>
          <button class="btn btn-info" onclick="app.carsController.editCar('${this.id}')">Edit</button>
        </div>
      </div>
    </div>
    `
  }
}
