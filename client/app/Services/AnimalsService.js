import { ProxyState } from '../AppState.js'
import { Animal } from '../Models/Animal.js'
import { api } from './AxiosService.js'

class AnimalsService {
  addAnimal(animalData) {
    console.log('animalData')
    const testAnimal = new Animal(animalData)
    ProxyState.animals = [...ProxyState.animals, testAnimal]
  }
}

export const animalsService = new AnimalsService()
