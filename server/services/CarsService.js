import { dbContext } from '../db/DbContext'

class CarsService {
  createCars(carData) {
    // NEED TO DO THIS
  }

  async getCars() {
    const cars = await dbContext.Cars.find()
    return cars
  }
}
export const carsService = new CarsService()
