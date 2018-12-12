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
}

class Field {
  constructor (name) {
    this.id = uuid()
    this.name = name || 'untitled'
    this.fieldValues = []
    this.shape = ''
    this.transform = { type: '', values: {} }
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
