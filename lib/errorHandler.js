'use strict'

function errorHandler (error) {
  console.error(error)
  throw new Error('Server operation fail')
}

module.exports = errorHandler