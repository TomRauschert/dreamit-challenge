import CorsProxy from 'cors-anywhere'

const host = 'localhost'
const port = 8010

CorsProxy.createServer({
  originWhitelist: [],
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function () {
  console.log('Running CORS Anywhere on ' + host + ':' + port)
})
