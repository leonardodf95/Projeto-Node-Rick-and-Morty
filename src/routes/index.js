const CharactersController = require('../Controllers/characters-Controller')
const LocationsController = require('../Controllers/locations-Controller')
const EpisodesController = require('../Controllers/episodes-Controller')

module.exports = {
    '/characters': CharactersController.listCharacters,
    '/searchcharacterbyname': CharactersController.searchCharacterByName,
    '/searchcharacterbyid': CharactersController.searchCharacterById,
    '/getcharacterbyorigin': CharactersController.getCharacterByOrigin,
    '/characterfile': CharactersController.characterFile,
    '/locations': LocationsController.listLocations,
    '/episodes': EpisodesController.listEpisodes
}