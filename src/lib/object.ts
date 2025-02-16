export enum RawtorObjectType {
	Signal
}

export type RawtorObject<T extends RawtorObjectType> = {
	type: T
}

export const isRawtorObject = (
	value: any,
	type: RawtorObjectType
): boolean => {
	const isObject = typeof value === "object"

	if (!isObject) {
		return false
	}

	const object = value as object
	const isRawtorObject = "type" in object

	if (!isRawtorObject) {
		return false
	}

	const isCorrectRawtorObjectType = object.type === type

	if (!isCorrectRawtorObjectType) {
		return false
	}

	return true
}
