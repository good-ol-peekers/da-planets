import { planetsService } from "../services/PlanetServices.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController {
    constructor() {
        super('api/planets')
        this.router
        .get('', this.getPlanet)
        .post('', this.createPlanet)
    }
    async getPlanet(req, res, next) {
        try {
            let planets = await planetsService.getPlanet()
            return res.send(planets)
        } catch (error) {
            next(error)
        }
    }
    async createPlanet(req, res, next) {
        try {
            let planetData = req.body
            let planet = await planetsService.createPlanet(planetData)
            return res.send(planet)
        } catch (error) {
            next(error)
        }
    }
}