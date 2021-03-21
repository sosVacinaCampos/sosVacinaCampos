const { createServer } = require('http')
// const whatsapp = require('./configs/whatsapp')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = new URL(req.url, 'http://w.w')
    const { pathname, query } = parsedUrl

    switch (pathname) {
      case '/a':
        app.render(req, res, '/index', query)
        break;
      case '/b':
        app.render(req, res, '/b', query)
        break;
      case '/api/whatsapp':
        // req.whatsapp = whatsapp
        handle(req, res, parsedUrl)
        break;
      default:
        handle(req, res, parsedUrl)
        break;
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})