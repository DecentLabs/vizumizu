import uuid from 'uuidv4'

class Model {
  constructor (id, name) {
    this.id = id || uuid()
    this.name = name || 'untitled'
    this.fields = []
    this.shape = ''
    this.stroke = 'rgba()'
    this.fill = 'rgba()'
    this.hasRecordName = false
  }

  static load (o) {
    if (o.id && o.name) {
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
    this.shape = ''
    this.transform = new Transform()
  }

  static load (o) {
    if (o.id) {
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
    if (o.value) {
      const newFieldValue = new FieldValue()
      return Object.assign(newFieldValue, o)
    }
    return null
  }
}

class Transform {
  constructor (values = {}) {
    this.values = values
  }

  addVisual (fieldValueId, visual) {
    this.values[fieldValueId] = visual
  }

  get type () {
    return Object.values(this.values)[0].type
  }

  static load (o) {
    const newTransform = new Transform()
    Object.keys(o.values).forEach(key => {
      newTransform.addVisual(key, Visual.load(o.values[key]))
    })
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
    mappedValue: ['circle', 'triangle', 'rect']
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
  Model,
  Field,
  FieldValue,
  Visual,
  visualTypes
}
