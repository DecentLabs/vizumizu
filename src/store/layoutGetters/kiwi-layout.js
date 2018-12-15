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

export { layout }
