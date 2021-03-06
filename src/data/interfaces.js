import uuid from 'uuidv4'
import images from './images.js'

class ModelHead {
  constructor (id = uuid(), name = 'untitled') {
    this.id = id
    this.name = name
  }

  static load (o) {
    return Object.assign(new ModelHead(), o)
  }
}

class Model extends ModelHead {
  constructor (id, name) {
    super(id, name)
    this.fields = []
    this.shape = 'null'
    this.stroke = 'rgba(18,118,193,1)'
    this.fill = 'rgba(186,75,62,1)'
    this.hasRecordName = false
  }

  static load (o) {
    if (o && o.id && o.name) {
      const newModel = Object.assign(new Model(), o)
      newModel.fields = newModel.fields.map(field => Field.load(field))
      return newModel
    }
    return null
  }
}

class Field {
  constructor (name) {
    this.id = uuid()
    this.name = name || 'untitled'
    this.fieldValues = []
    this.shape = 'null'
    this.transform = new Transform()
  }

  static load (o) {
    if (o && o.id) {
      const newField = Object.assign(new Field(), o)
      newField.fieldValues = newField.fieldValues.map(fieldValue => FieldValue.load(fieldValue))
      newField.transform = Transform.load(newField.transform)
      return newField
    }
    return null
  }
}

class FieldValue {
  constructor (value) {
    this.id = uuid()
    this.value = value || ''
  }

  static load (o) {
    if (o && (o.value || o.id)) {
      const newFieldValue = new FieldValue()
      return Object.assign(newFieldValue, o)
    }
    return null
  }
}

class Transform {
  constructor (type, values = {}) {
    this.values = values
    this.type = type
  }

  addVisual (fieldValueId, visual) {
    this.values[fieldValueId] = visual
  }

  static load (o) {
    const newTransform = new Transform()
    if (o && o.values) {
      newTransform.type = o.type
      Object.keys(o.values).forEach(key => {
        newTransform.addVisual(key, Visual.load(o.values[key]))
      })
    }
    return newTransform
  }
}

class Visual {
  constructor (type, mappedValue) {
    this.type = type || ''
    this.mappedValue = mappedValue || ''
  }

  static load (o) {
    return Object.assign(new Visual(), o)
  }
}

const visualTypes = [
  {
    type: 'StrokeColor',
    mappedValue: 'rgba()'
  },
  {
    type: 'FillColor',
    mappedValue: 'rgba()'
  },
  {
    type: 'Opacity',
    mappedValue: 0.0
  },
  {
    type: 'Shape',
    mappedValue: images.map(image => image.name)
  },
  {
    type: 'Rotation',
    mappedValue: 0
  },
  {
    type: 'Size',
    mappedValue: 0.0
  },
  {
    type: 'StrokeType',
    mappedValue: ['solid', 'dotted', 'dashed']
  },
  {
    type: 'StrokeSize',
    mappedValue: 0
  }
]

export {
  ModelHead,
  Model,
  Field,
  FieldValue,
  Visual,
  Transform,
  visualTypes
}
