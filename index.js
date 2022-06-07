const http = require('http')
const urlEncode = require('url')
const qs = require('querystring')
const routes = require('./src/routes')
const log = require('./src/utils/log')

const server = http.createServer((request, response) => {
    try {
        const {url} = request;
        const { pathname, query } = urlEncode.parse(url);
        
        if (!routes[pathname]) {
            throw {
              statusCode: 404,
              message: "Not found",
            };
          }
        
        const queryParsed = qs.parse(query);
        request.queryParams = queryParsed;
        log.request(pathname)
        routes[pathname](request, response);
        
    } catch (error) {
        response.writeHead(error.statusCode)
        response.end(error.message)
    }
    
})

const PORT = 3000
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));