const layout = (state, getters) => {
  const fields = getters.fields

  state.solver.updateVariables()

  return fields.map(field => {
    const placement = field.layoutItem.placement

    return {
      id: field.id,
      image: field.image,
      src: (field.image && field.image.src) || '',
      top: placement.top,
      left: placement.left,
      width: placement.width,
      height: placement.height
    }
  })
}

const relativeLayout = (state, getters) => {
  const layout = getters.layout

  const reducer = find => (acc, curr) => (curr[find] < acc ? curr[find] : acc)

  const minLeft = layout.reduce(reducer('left'), Infinity)
  const minTop = layout.reduce(reducer('top'), Infinity)

  return layout.map(item => {
    item.top = item.top - minTop
    item.left = item.left - minLeft
    return item
  })
}

export { layout, relativeLayout }
