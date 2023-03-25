

class CustomAPIError extends Error {
  constructor(message, statuseCode){
    super(message)
    this.statuseCode = statuseCode
  }
}

const createCustomError = (msg, statuseCode) => {
  return new CustomAPIError(msg, statuseCode)
}

module.exports ={
  createCustomError,
  CustomAPIError
}