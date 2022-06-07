const rickAndMortyApi = require('../config/rick-and-morty-api')

class Locations {
    static async listLocations (page, type, dimension, name) {
        const options = {
            params: {
                page: page || 1,
                type: type || null,
                dimension: dimension || null,
                name: name || null
            }
        }

        const locations = await rickAndMortyApi.get('/location', options)
        return locations.data
    }
}

module.exports = Locations