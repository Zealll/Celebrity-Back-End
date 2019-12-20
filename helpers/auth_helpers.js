
const db = require('../data/dbConfig.js')

module.exports = {
    findBy,
    register
}

function findBy(username) {
    console.log(username)
    return db('users')
    .where({ username })
    .first()
}

function register(user) {
    return db('users')
    .insert(user)
}