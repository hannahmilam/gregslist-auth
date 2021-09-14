import { ProxyState } from '../AppState.js'
import { Car } from '../Models/Car.js'

// @ts-ignore
const api = axios.create({
  baseURL: 'http://localhost3000/api/cars'
})
class CarsService {
  async deleteCar(carId) {
    await api.delete(carId)
    ProxyState.cars = ProxyState.cars.filter(c => c.id !== carId)
  }

  async addCar(carData) {
    const res = await api.post('', carData)
    console.log('what was the response??', res)
    ProxyState.cars = [...ProxyState.cars, new Car(res.data)]
  }

  async getCar() {
    const response = await api.get()
    console.log('what was the response', response)
    ProxyState.cars = response.data.map(c => new Car(c))
    console.log('what is a car', ProxyState.cars)
  }
}

// singleton pattern
export const carsService = new CarsService()
