const Characters = require('../models/characters')

class CharactersController {
    static async listCharacters (req, res) {
        try {
            const { page, status, species, gender } = req.queryParams
            
            if(page && Number.isNaN(page)) {
                throw {
                    statusCode: 404,
                    message: 'Page must be a number.'
                }
            }
                        
            if(status && status.toLowerCase() !== 'alive' && status.toLowerCase() !== 'dead' && status.toLowerCase() !== 'unknown') {
                throw {
                    statusCode: 404,
                    message: 'Status must be alive, dead or unknown.'
                }
            }

            if(gender && gender.toLowerCase() !== 'female' && gender.toLowerCase() !== 'male' && gender.toLowerCase() !== 'genderless' && gender.toLowerCase() !== 'unknown') {
                throw {
                    statusCode: 404,
                    message: 'Gender must be female, male, genderless or unknown.'
                }
            }

            const infos = await Characters.listCharacters(page, status, species, gender)

            

            res.writeHead(200)
            res.end(JSON.stringify(infos))

        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'Server Error.')
        }
    }

    static async searchCharacterByName(req, res) {
        try {
            const { name, page } = req.queryParams

            if(page && Number.isNaN(page)) {
                throw {
                    statusCode: 404,
                    message: 'Page must be a number.'
                }
            }
            
            const infos = await Characters.searchCharacterByName(name, page)
            res.writeHead(200)
            res.end(JSON.stringify(infos))
        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'Server Error.')
        }
    }

    static async searchCharacterById(req, res) {
        try {
            const { id } = req.queryParams
            const _id = parseInt(id, 10)
            if(!_id || Number.isNaN(_id)){
                throw {
                    statusCode: 404,
                    message: 'ID is required or invalid!'
                }
            }
            
            if(_id < 1 || _id > 826) {
                throw {
                    statusCode: 404,
                    message: 'ID must be between 1 and 826!'
                }
            }

            const info = await Characters.searchCharacterById(_id)
            res.writeHead(200)
            res.end(JSON.stringify(info))
        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'Server Error.')
        }
    }

    static async getCharacterByOrigin(req, res){
        try {
            const { page , origin } = req.queryParams
            if(page && Number.isNaN(page)) {
                throw {
                    statusCode: 404,
                    message: 'Page must be a number.'
                }
            }
            if(page > 42 || page < 1) {
                throw {
                    statusCode: 404,
                    message: 'Page must be number between 1 and 42.'
                }
            }

            const result = await Characters.getCharacterByOrigin(page, origin)
            res.writeHead(200)
            res.end(JSON.stringify(result))

        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'Server error.')
        }
    }

    static async characterFile(req, res) {
        try {
            const { id } = req.queryParams
            const _id = parseInt(id, 10)
            if(!_id || Number.isNaN(_id)){
                throw {
                    statusCode: 404,
                    message: 'ID is required or invalid!'
                }
            }
            
            if(_id < 1 || _id > 826) {
                throw {
                    statusCode: 404,
                    message: 'ID must be between 1 and 826!'
                }
            }

            const result = await Characters.characterFile(id)
            res.writeHead(200)
            res.end(JSON.stringify(result))

        } catch (error) {
            res.writeHead(error.statusCode || 500)
            res.end(error.message || 'Server Error.')
        }
    }

}

module.exports = CharactersController