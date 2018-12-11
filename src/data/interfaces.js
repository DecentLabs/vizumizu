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
    this.transform = transform || { type: '', values: {} }
  }
}

class FieldValue {
  constructor (value) {
    this.id = uuid()
    this.value = value || ''
  }
}

class Visual {
  constructor (type, mappedValue) {
    this.type = type || ''
    this.mappedValue = mappedValue || ''
  }
}

const visualTypes = [
  {
    type: 'StrokeColor',
    mappedValue: 'rgba'
  },
  {
    type: 'FillColor',
    mappedValue: 'rgba'
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
