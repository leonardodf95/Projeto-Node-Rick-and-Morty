const { DateTime } = require('luxon')

exports.request = (path) => {
    const dt = DateTime.now().toISO()
    return console.info(`${dt}: [REQUEST => ${path}]`)
}