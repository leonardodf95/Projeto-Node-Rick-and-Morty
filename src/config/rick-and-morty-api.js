const axios = require('axios')

module.exports = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})