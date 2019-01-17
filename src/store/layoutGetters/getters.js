import { layout, relativeLayout } from './kiwi-layout.js'

const fields = state => state.fields
const selected = state => id =>
  state.selectedFields.findIndex(field => field.id === id) > -1
const images = state => state.images
const imageByName = state => name =>
  state.images.find(image => image.name === name)
const getFieldById = state => id => state.fields.find(field => field.id === id)

const getLayout = state => (user, id) => state.layout.length > 0 ? state.layout : getLayout(user, id)

const getNearbyPoints = state => field => {
  const threshold = 10
  const fields = state.fields
  let Xpositions = []
  let Ypositions = []
  const myPlacement = field.layoutItem.getPlacement()
  const myX = field.layoutItem.getHorizontalValues(myPlacement)
  const myY = field.layoutItem.getVerticalValues(myPlacement)
  const nearbyX = []
  const nearbyY = []

  fields.forEach(field => {
    const layoutItem = field.layoutItem
    const id = field.id
    const placement = layoutItem.getPlacement()

    Xpositions = Xpositions.concat(
      layoutItem.getHorizontalValues(placement).map(value => [...value, id])
    )

    Ypositions = Ypositions.concat(
      layoutItem.getVerticalValues(placement).map(value => [...value, id])
    )
  })

  myX.forEach(pos => {
    Xpositions.forEach(dpos => {
      if (Math.abs(dpos[1] - pos[1]) < threshold && field.id !== dpos[2]) {
        nearbyX.push([pos, dpos])
      }
    })
  })

  myY.forEach(pos => {
    Ypositions.forEach(dpos => {
      if (Math.abs(dpos[1] - pos[1]) < threshold && field.id !== dpos[2]) {
        nearbyY.push([pos, dpos])
      }
    })
  })

  const result = {}

  nearbyX.forEach(nearby => {
    const [pos, dpos] = nearby
    if (!result[dpos[2]]) {
      result[dpos[2]] = [
        [
          { fieldId: field.id, prop: pos[0] },
          { fieldId: dpos[2], prop: dpos[0] }
        ]
      ]
    }
  })

  nearbyY.forEach(nearby => {
    const [pos, dpos] = nearby
    if (result[dpos[2]]) {
      result[dpos[2]][1] = [
        { fieldId: field.id, prop: pos[0] },
        { fieldId: dpos[2], prop: dpos[0] }
      ]
    }
  })

  return [].concat(...Object.values(result))
}

export default {
  fields,
  selected,
  layout,
  relativeLayout,
  images,
  imageByName,
  getFieldById,
  getNearbyPoints,
  getLayout
}
