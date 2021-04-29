const fetch = require('node-fetch')
const cheerio = require('cheerio')

const regex = /\s{2,}|\n/g
const test_url ='https://music.apple.com/us/playlist/oldies-feels/pl.u-KVXBDYWC5r59Ya'
const other = 'https://music.apple.com/us/playlist/todays-hits/pl.f4d106fed2bd41149aaacabb233eb5eb'
function getSongs(url) {
    return fetch(url)
    .then(res => res.text())
    .then(data => {
        const $ = cheerio.load(data)
        let x = $('.songs-list-row')
        let output = {title:$('.typography-large-title-semibold').text(), tracks:[]}
        x.each((i, el) => {
            const name = $(el).find('.songs-list-row__song-name').text().replace(regex, " ").trim()
            const artist = $(el).find('.songs-list__col--artist .songs-list__song-link-wrapper').text().replace(regex, " ").trim()
            output.tracks.push({name, artist})
        })
        return output
    })
}

const fastify = require('fastify')({
    logger: true
})

fastify.register(require('fastify-cors'), { 
  // put your options here
    origin: (origin, cb) => {
    if(/localhost/.test(origin)){
        //  Request from localhost will pass
        cb(null, true)
        return
    }
    // Generate an error on other origins, disabling access
    cb(new Error("Not allowed"))
    }
})


fastify.get('/', async (request, reply) => {
    const x = await getSongs(request.query.url)
    reply.type('application/json').code(200)
    return x
})

fastify.listen(4000, (err, address) => {
  if (err) throw err
  fastify.log.info(`server listening on ${address}`)
})