import { Variable, Strength, Operator, Constraint, Expression } from 'kiwi.js'

export default class LayoutItem {
  constructor (solver) {
    this.solver = solver
    this.position = [0, 0]
    this.size = [0, 0]
    this.left = new Variable()
    this.top = new Variable()
    this.width = new Variable()
    this.height = new Variable()
    this.hcenter = new Variable()
    this.vcenter = new Variable()
    this.bottom = new Variable()
    this.right = new Variable()

    this.solver.addEditVariable(this.left, Strength.weak)
    this.solver.addEditVariable(this.top, Strength.weak)
    this.solver.addEditVariable(this.width, Strength.strong)
    this.solver.addEditVariable(this.height, Strength.strong)

    this.innerConstraint = [
      new Constraint(
        new Expression([-1, this.hcenter], this.left, [0.5, this.width]),
        Operator.Eq,
        0,
        Strength.required
      ),
      new Constraint(
        new Expression([-1, this.vcenter], this.top, [0.5, this.height]),
        Operator.Eq,
        0,
        Strength.required
      ),
      new Constraint(
        new Expression([-1, this.bottom], this.top, this.height),
        Operator.Eq,
        0,
        Strength.required
      ),
      new Constraint(
        new Expression([-1, this.right], this.left, this.width),
        Operator.Eq,
        0,
        Strength.required
      ),
      new Constraint(this.top, Operator.Ge, 0, Strength.required),
      new Constraint(this.left, Operator.Ge, 0, Strength.required)
    ]

    this.innerConstraint.forEach(constraint =>
      this.solver.addConstraint(constraint)
    )

    this.outerConstraints = []
  }

  static get connectionPoints () {
    return [
      ['top', 'left'],
      ['top', 'hcenter'],
      ['top', 'right'],
      ['vcenter', 'left'],
      ['vcenter', 'hcenter'],
      ['vcenter', 'right'],
      ['bottom', 'left'],
      ['bottom', 'hcenter'],
      ['bottom', 'right']
    ]
  }

  static get horizontalAxises () {
    return ['left', 'hcenter', 'right']
  }

  static get verticalAxises () {
    return ['top', 'vcenter', 'bottom']
  }

  setPosition (pos) {
    const [x, y] = pos
    this.solver.suggestValue(this.left, x)
    this.solver.suggestValue(this.top, y)
  }

  setScale (scale) {
    let [scaleX, scaleY] = scale.split(',')
    if (!scaleY) {
      scaleY = scaleX
    }

    this.setSize([this.width * scaleX, this.height * scaleY])
  }

  setSize (size) {
    const [width, height] = size
    this.solver.suggestValue(this.width, width)
    this.solver.suggestValue(this.height, height)
  }

  setOuterConstraints (constraints) {
    this.outerConstraints = constraints.map(constraintTuple => {
      // [ prop, { layoutItem, prop}]
      const myProp = constraintTuple[0]
      const {layoutItem, prop} = constraintTuple[1]
      return new Constraint(
        new Expression([-1, this[myProp]], layoutItem[prop]),
        Operator.Eq,
        0,
        Strength.strong
      )
    })

    this.outerConstraints.forEach(constraint => {
      this.solver.addConstraint(constraint)
    })
  }

  removeOuterConstraints () {
    this.outerConstraints.forEach(constraint =>
      this.solver.removeConstraint(constraint)
    )
    this.outerConstraints = []
  }

  getPlacement () {
    return {
      top: this.top.value(),
      left: this.left.value(),
      width: this.width.value(),
      height: this.height.value(),
      right: this.right.value(),
      bottom: this.bottom.value(),
      hcenter: this.hcenter.value(),
      vcenter: this.vcenter.value()
    }
  }

  getHorizontalValues (placements) {
    const values = placements || this.getPlacement()
    return LayoutItem.horizontalAxises.map(axis => [axis, values[axis]])
  }

  getVerticalValues (placements) {
    const values = placements || this.getPlacement()
    return LayoutItem.verticalAxises.map(axis => [axis, values[axis]])
  }

  get placement () {
    return this.getPlacement()
  }

  destroy () {
    this.innerConstraint.forEach(constraint =>
      this.solver.removeConstraint(constraint)
    )
  }

  getCpPosition (cp) {
    return [this[cp[0]].value(), this[cp[1]].value()]
  }

  getCpPositions () {
    return LayoutItem.connectionPoints.map(cp => ({
      cp,
      position: this.getCpPosition(cp)
    }))
  }
}
