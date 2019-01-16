import { database } from '../main.js'

function setUserData (userId) {
  getUserData(userId).then(resp => {
    if (!resp.val()) {
      database.ref(`users/${userId}`).set({userId})
    }
  })
}

function getUserData (userId) {
  return database.ref(`users/${userId}`).once('value')
}

function setModelData (userId, model) {
  database.ref(`users/${userId}/models/${model.id}`).set(model)
}

function getModelData (userId, modelId) {
  return database.ref(`users/${userId}/models/${modelId}`).once('value')
}

function updateModelData (userId, model) {
  const updates = {
    [`users/${userId}/models/${model.id}`]: model
  }
  database.ref().update(updates)
}

function removeModelData (userId, modelId) {
  database.ref(`users/${userId}/models/${modelId}`).remove()
}

export {
  setUserData,
  getUserData,
  setModelData,
  updateModelData,
  getModelData,
  removeModelData
}
