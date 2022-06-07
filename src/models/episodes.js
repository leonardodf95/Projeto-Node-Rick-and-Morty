const rickAndMortyApi = require('../config/rick-and-morty-api')

class Episodes {
    static async listEpisodes (page, name, episode){
        const options = {
            params: {
                page: page || 1,
                name: name || null,
                episode: episode || null
            }
        }

        const episodes = await rickAndMortyApi.get('/episode', options)
        return episodes.data
    }
}

module.exports = Episodes