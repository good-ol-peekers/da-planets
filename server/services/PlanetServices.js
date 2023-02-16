import { dbContext } from "../db/DbContext"

class PlanetsService {

    async getPlanet(){
        const planet = await dbContext.Planet.find()
        return planet
    }
    async createPlanet(planetData) {
        const planet = await dbContext.Planet.create(planetData)
        return planet
    }
}
export const planetsService = new PlanetsService