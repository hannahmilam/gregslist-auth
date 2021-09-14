import { ProxyState } from '../AppState.js'
import { Car } from '../Models/Car.js'
import { api } from './AxiosService.js'

class CarsService {
  async editCar(carId) {
    await api.put(`api/cars/${carId}`)
    ProxyState.cars = ProxyState.cars.filter(c => c.id !== carId)
  }

  async deleteCar(carId) {
    await api.delete(`api/cars/${carId}`)
    ProxyState.cars = ProxyState.cars.filter(c => c.id !== carId)
  }

  async addCar(carData) {
    const res = await api.post('api/cars', carData)
    console.log('what was the response??', res)
    ProxyState.cars = [...ProxyState.cars, new Car(res.data)]
  }

  async getCar() {
    const response = await api.get('api/cars')
    console.log('what was the response', response)
    ProxyState.cars = response.data.map(c => new Car(c))
    console.log('what is a car', ProxyState.cars)
  }
}

// singleton pattern
export const carsService = new CarsService()
