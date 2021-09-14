import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'

class HousesService {
  async createHouse(houseData) {
    const house = await dbContext.Houses.create(houseData)
    return house
  }

  async editHouse(houseId, userId, houseData) {
    const house = await this.getHouse(houseId)
    if (userId !== house.creatorId.toString()) {
      throw new Forbidden('You shall not pass!!!')
    }
    house.bedrooms = houseData.bedrooms || house.bedrooms
    house.bathrooms = houseData.bathrooms || house.bathrooms
    house.level = houseData.level || house.level
    house.year = houseData.year || house.year
    house.price = houseData.price || house.price
    house.description = houseData.description || house.description
    house.img = houseData.img || house.img

    await house.save()
    return house
  }

  async removeHouse(houseId, userId) {
    const house = await this.getHouse(houseId)
    if (userId !== house.creatorId.toString()) {
      throw new Forbidden('You shall not pass!!!')
    }
    await house.remove()
    return house
  }

  async getHouse(houseId) {
    const house = await dbContext.Houses.findById(houseId).populate('creator', 'name picture')
    if (!house) {
      throw new BadRequest('You did not create this house')
    }
    return house
  }

  async getHouses(query) {
    const houses = await dbContext.Houses.find(query).populate('creator', 'name picture')
    return houses
  }
}

export const housesService = new HousesService()
