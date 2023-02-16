import { galaxyServices } from "../services/GalaxyServices.js";
import BaseController from "../utils/BaseController.js";

export class GalaxysController extends BaseController {
    constructor(){
        super('api/galaxy')
        this.router
        .get('', this.getGalaxy)
        .post('', this.createGalaxy)
    }
    async getGalaxy(req, res, next) {
        try {
            const galaxy = await galaxyServices.getGalaxy()
            res.send(galaxy)
            
        } catch (error) {
            next(error)
        }
    }
    async createGalaxy(req, res, next) {
        try {
            let galaxyData = req.body
            const galaxy = await galaxyServices.createGalaxy(galaxyData)
            res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }
}