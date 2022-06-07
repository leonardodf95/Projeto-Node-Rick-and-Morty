const fs = require('fs')
const rickAndMortyApi = require("../config/rick-and-morty-api")

class Characters {
    static async listCharacters (page, status, species, gender){
        const options = {
            params: {
                page: page || 1,
                status: status || null,
                species: species || null,
                gender: gender || null
            }
        }
       
        const characters = await rickAndMortyApi.get('/character', options)
        return characters.data
    }

    static async getCharacterByOrigin (page, origin) {
        const options = {
            params: {
                page: page || 1
            }
        }

        const infos = await rickAndMortyApi.get('/character', options)
        const _infos = infos.data.results
        const characters = _infos.filter((character) => {if(character.origin.name.toLowerCase().includes(origin)){return character}})
        return characters
    }

    static async searchCharacterByName (name, page){
        const options = {
            params: {
                page: page || 1,
                name: name
            }
        }

        const characters = await rickAndMortyApi.get('/character/', options)
        return characters.data
    }

    static async searchCharacterById (id) {
        const character = await rickAndMortyApi.get(`/character/${id}`)
        return character.data
    }

    static async characterFile (id) {
       const character = await this.searchCharacterById(id)
        fs.writeFileSync(`./tmp/${character.name}.json`, JSON.stringify(character), 'utf-8')
        return character
    }
}

module.exports = Characters