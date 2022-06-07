const Episodes = require('../models/episodes')

class EpisodesController {
    static async listEpisodes ( req, res) {
        try {
            const { page, name, episode } = req.queryParams
            if(page && Number.isNaN(page)) {
                throw {
                    statusCode: 404,
                    message: 'Page must be a number.'
                }
            }


    
            const info = await Episodes.listEpisodes(page, name, episode).catch(() => {throw {statusCode: 404, message: 'Not Found!'} })
            
            res.writeHead(200)
            res.end(JSON.stringify(info))            
        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'Server Error')
        }
        
    }
}

module.exports = EpisodesController