const genericCrud = require ('./generic.controller')
const {Users} = require('../model')

module.exports = {
    ...genericCrud(Users)
}