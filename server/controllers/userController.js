const userService = require('../services/userService')


module.exports.createUser = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.createUser(req.body)
    response.status = 200
    response.message = 'New user successfully created'
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in userController.js', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}


module.exports.loginUser = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.loginUser(req.body)
    response.status = 200
    response.message = 'User successfully logged in'
    response.body = responseFromService
  } catch (error) {
    console.error('Error in loginUser (userController.js)')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}


module.exports.getUserProfile = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.getUserProfile(req)
    response.status = 200
    response.message = 'Successfully fetched user profile data'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in userController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}


module.exports.updateUserProfile = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.updateUserProfile(req)
    response.status = 200
    response.message = 'Successfully updated user profile data'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in updateUserProfile - userController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

//add transactions part
module.exports.getUserTransactions = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.getUserTransactions(req)
    console.log(responseFromService)
    response.status = 200
    response.message = 'Successfully fetched transactions'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in getUserTransactions - userController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}


module.exports.getUserTransactionID = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.getUserTransactionID(req)
    response.status = 200
    response.message = 'Successfully fetched transaction details'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in getUserTransactionID - userController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}


module.exports.deleteUserTransactionID = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.deleteUserTransactionID(req)
    response.status = 200
    response.message = 'Successfully deleted transaction details'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in getUserTransactionID - userController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}


module.exports.updateUserTransactionID = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.updateUserTransactionID(req)
    response.status = 200
    response.message = 'Successfully updated transaction details'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in updateUserTransactionID - userController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}