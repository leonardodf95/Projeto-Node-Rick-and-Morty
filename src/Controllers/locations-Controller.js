const Locations = require('../models/locations')

class LocationsController {
    static async listLocations(req, res){
        try {
            const { page, type, dimension, name } = req.queryParams

            if(page && Number.isNaN(page)) {
                throw {
                    statusCode: 404,
                    message: 'Page must be a number.'
                }
            }
            
            const locations = await Locations.listLocations(page, type, dimension, name)

            res.writeHead(200)
            res.end(JSON.stringify(locations))
            
        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'Server Error')
        }
        
    }
}

module.exports = LocationsController