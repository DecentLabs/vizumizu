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

function setRecord (userId, modelId, record) {
  const newRecord = database.ref(`users/${userId}/records/${modelId}`).push()
  newRecord.set(record)
}

function getRecord (userId, modelId) {
  return database.ref(`users/${userId}/records/${modelId}`).once('value')
}

function setLayoutData (userId, modelId, layout) {
  const newRecord = database.ref(`users/${userId}/layout/${modelId}`).push()
  newRecord.set(layout)
}

function getLayoutData (userId, modelId) {
  return database.ref(`users/${userId}/layout/${modelId}`).once('value')
}

export {
  setUserData,
  getUserData,
  setModelData,
  updateModelData,
  getModelData,
  removeModelData,
  setRecord,
  getRecord,
  setLayoutData,
  getLayoutData
}
