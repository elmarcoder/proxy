const Fastify = require('fastify')
const server = Fastify()
const vhost = require('fastify-vhost')

server.register(vhost, {
  upstream: 'http://localhost:3000',
  host: 'test.example.com'
})

// server.register(vhost, {
//   upstream: 'http://localhost:3001',
//   host: 'other.example.com'
// })

server.listen(80)
