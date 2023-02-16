import { dbContext } from "../db/DbContext.js"

class GalaxyServices{
    async getGalaxy() {
        const galaxy = await dbContext.Galaxy.find()
        return galaxy
    }
     async createGalaxy(galaxyData) {
        const galaxy = await dbContext.Galaxy.create(galaxyData)
        return galaxy

     }
}
export const galaxyServices = new GalaxyServices()