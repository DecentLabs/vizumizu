# vizuka

## model structure

type Modell {
	id: UUID!
	name: String!
	fields: [Field]!
	shape: SVG
	stroke: rgbColor
	fill: rgbColor
	hasRecordName: Boolean
}

type Field {
	id: UUID!
	name: String!
	values: [FieldValue]!
	shape: SVG
	transform: Visual
}

type FieldValue {
	id: UUID!
	value: String!
}

interface Visual {
	type: VisualType!
	mappedValue:[String]
}

enum VisualTypes {
	Stroke,
	Fill,
	Opacity,
	Shape,
	Rotation,
	Size,
	StrokeType
}

enum StrokeTypes {
	DASHED,
	SOLID,
	DOTTED,
	NONE
}

type Stroke implements Visual {
	type: VisualTypes.Stroke
	mappedValue: [rgbColor]
}

type Fill implements Visual {
	type: VisualTypes.Fill
	mappedValue: [rgbColor]
}

type Opacity implements Visual {
	type: VisualTypes.Opacity
	mappedValue: [Float]
}

type Shape implements Visual {
	type: VisualTypes.Shape
	mappedValue: [SVG]	
}

type Rotation implements Visual {
	type: VisualTypes.Rotation
	mappedValue: [Int]
}

type Size implements Visual {
	type: VisualTypes.Size
	mappedValue: [Float]
}

type StrokeType implements Visual {
	type: VisualTypes.StrokeType
	mappedValue: [StrokeTypes]
}

## save model

{
	id,
	name,
	fields:[{
		id,
		name,
		values:[{
			id, value
		}, {
			id, value
		}],
		shape,
		transform:[{
			transformType,
			mappedValue
		}]
	}]
}

## save record

{
	name,
	value: {
		fieldId,
		fieldValueId
	}
}






