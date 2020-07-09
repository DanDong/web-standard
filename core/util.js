const jwt = require('jsonwebtoken')
const {key, expiresIn} = require('../config')

function getToken(uid, type){
  let token = jwt.sign({
    uid,
    type
  }, key, {
    expiresIn
  })
  return token
}

module.exports = {
  getToken
}