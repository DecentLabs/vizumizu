import uuid from 'uuidv4'

class Model {
  constructor (id, name, fields, shape, stroke, fill, hasRecordName) {
    this.id = id || uuid()
    this.name = name || 'untitled'
    this.fields = fields || []
    this.shape = shape || null
    this.stroke = stroke || ''
    this.fill = fill || ''
    this.hasRecordName = hasRecordName || true
  }
}

class Field {
  constructor (name, fieldValues, shape, transform) {
    this.id = uuid()
    this.name = name || ''
    this.fieldValues = fieldValues || []
    this.shape = shape || null
    this.transform = transform || null
  }
}

class FieldValue {
  constructor (value) {
    this.id = uuid()
    this.value = value || ''
  }
}

export {
  Model,
  Field,
  FieldValue
}
