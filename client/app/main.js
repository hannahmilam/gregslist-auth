
import { AnimalsController } from './Controllers/AnimalsController.js'
import { AuthController } from './Controllers/AuthController.js'
import { CarsController } from './Controllers/CarsController.js'
import { HousesController } from './Controllers/HousesController.js'
import { JobsController } from './Controllers/JobsController.js'
import { ValuesController } from './Controllers/ValuesController.js'

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  carsController = new CarsController()
  housesController = new HousesController()

  animalsController = new AnimalsController()
  jobsController = new JobsController()
}

// @ts-ignore
window.app = new App()
