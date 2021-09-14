import { ProxyState } from '../AppState.js'
import { House } from '../Models/House.js'
import { api } from './AxiosService.js'

class HousesService {
  async editHouse(houseId) {
    await api.put(`api/houses/${houseId}`)
    ProxyState.houses = ProxyState.houses.filter(h => h.id !== houseId)
  }

  // NOTE this function addHouse, creates the house by using post()
  async addHouse(houseData) {
  // NOTE the async and await makes it so that nothing else can happen until this is complete.
    const res = await api.post('api/houses', houseData)
    console.log('houseServices response', res)
    // NOTE this next line then adds the information from the api into our houses proxystate.
    ProxyState.houses = [...ProxyState.houses, new House(res.data)]
  }

  // NOTE getHouse function is accessing the houses from the api using get()
  async getHouse() {
    const res = await api.get('api/houses')
    console.log('getHouse response', res)
    // line below this takes the raw data that we accessed from api using get... and turning it into our Model data.
    ProxyState.houses = res.data.map(h => new House(h))
    console.log('getHouse response', res)
  }

  // NOTE this function deletes the house from the page & also the api using the house ID.
  async deleteHouse(houseId) {
    await api.delete(`api/houses/${houseId}`)
    // this next line iterates through the houses in the proxystate to filter through the id's so that the page ONLY shows the id's that DO NOT match the one that was deleted.
    ProxyState.houses = ProxyState.houses.filter(h => h.id !== houseId)
  }
}
export const housesService = new HousesService()
