import { ProxyState } from '../AppState.js'
import { Animal } from '../Models/Animal.js'

// @ts-ignore
const api = axios.create({
  baseURL: 'http://localhost3000/api/animals'
})

class AnimalsService {
  addAnimal(animalData) {
    console.log('animalData')
    const testAnimal = new Animal(animalData)
    ProxyState.animals = [...ProxyState.animals, testAnimal]
  }
}

export const animalsService = new AnimalsService()
