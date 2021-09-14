import { carsService } from '../services/CarsService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { logger } from '../utils/Logger'

export class CarsController extends BaseController {
  constructor() {
    super('api/cars')
    this.router
      .get('', this.getCars)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createCars)
  }

  async getCars(req, res, next) {
    try {
      const cars = await carsService.getCars()
      res.send(cars)
    } catch (error) {
      next(error)
    }
  }

  async createCars(req, res, next) {
    try {
      logger.log('who is this user?', req.userInfo)
      // NEVER TRUST CLIENT
      // FORCE CREATOR ID TO BE LOGIN USER
      req.body.creatorId = req.userInfo.id
      // ^^^^memorize this line above
      const car = await carsService.createCars(req.body)
      res.send(car)
    } catch (error) {
      next(error)
    }
  }
}
