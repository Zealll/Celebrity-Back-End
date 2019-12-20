
const db = require('../data/dbConfig.js')

module.exports = {
    findBy
}

function findBy(username) {
    console.log(username)
    return db('users')
    .where({ username })
    .first()
}