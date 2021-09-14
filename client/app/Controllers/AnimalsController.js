import { ProxyState } from '../AppState.js'
import { getAnimalFormTemplate } from '../forms/animalform.js'
import { animalsService } from '../Services/AnimalsService.js'

function _drawAnimals() {
  let template = ''
  ProxyState.animals.forEach(animal => template += animal.CardTemplate)
  document.getElementById('listings').innerHTML = template
}

export class AnimalsController {
  constructor() {
    ProxyState.on('animals', _drawAnimals)
  }

  addAnimal() {
    event.preventDefault()
    /**
     * @type {HTMLFormElement}
     */
    // @ts-ignore
    const form = event.target

    const animalData = {
      animalType: form.animalType.value,
      breed: form.breed.value,
      gender: form.gender.value,
      age: form.age.value,
      price: form.price.value,
      img: form.img.value,
      description: form.description.value
    }

    try {
      animalsService.addAnimal(animalData)
    } catch (error) {
      form.make.classList.add('border-danger')
      console.error(error)
      return
    }
    form.reset()
  }

  showAnimals() {
    _drawAnimals()
    document.getElementById('controls').innerHTML = `
      <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
        List Animal For Sale
      </button>
      `
    document.getElementById('forms').innerHTML = getAnimalFormTemplate()
  }

  toggleAnimalForm() {
    document.getElementById('animal-form').classList.toggle('visually-hidden')
  }
}

// <button class="btn btn-info custom-font" onclick="app.animalsController.toggleAnimalForm()">Add Animal</button>
