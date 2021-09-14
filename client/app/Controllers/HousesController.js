import { ProxyState } from '../AppState.js'
import { housesService } from '../Services/HousesService.js'
import { getHouseFormTemplate } from '../forms/houseform.js'
import { carsService } from '../Services/CarsService.js'
function _drawHouses() {
  let template = ''
  ProxyState.houses.forEach(house => template += house.CardTemplate)
  document.getElementById('listings').innerHTML = template
}

export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
    housesService.getHouse()
    //  ^^ this houseService.getHouse() function is so that when the page is loaded we immediately get all of the houses loaded to the page from the api.
  }

  async deleteHouse(houseId) {
    try {
      await housesService.deleteHouse(houseId)
    } catch (error) {
      alert(error.message)
    }
  }

  async editHouse(houseId) {
    try {
      await housesService.editHouse(houseId)
    } catch (error) {
      console.log('⚠ EDIT_HOUSE', error)
    }
  }

  async addHouse() {
    event.preventDefault()
    /**
    * @type{HTMLFormElement}
    */
    // @ts-ignore
    const form = event.target

    const houseData = {
      price: form.price.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      levels: form.levels.value,
      year: form.year.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }

    try {
      await housesService.addHouse(houseData)
    } catch (e) {
    // TODO draw errors
      form.make.classList.add('border-danger')
      console.error('[TODO] you were supposed to do this', e)
      return
    }

    form.reset()
  }

  showHouses() {
    _drawHouses()
    document.getElementById('controls').innerHTML = `
    <button type="button" class="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
    List House For Sale
  </button>
    `
    document.getElementById('forms').innerHTML = getHouseFormTemplate()
  }

  toggleHouseForm() {
    console.log('[TODO fill me in]')
    document.getElementById('house-form').classList.toggle('visually-hidden')
  }
}
