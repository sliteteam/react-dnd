//
// HACK: copied from @slite/react-dnd-core. duplicating here to fix a CI issue
//
import type { Identifier, SourceType, TargetType } from '@slite/react-dnd-core'

export function matchesType(
	targetType: TargetType | null,
	draggedItemType: SourceType | null,
): boolean {
	if (draggedItemType === null) {
		return targetType === null
	}
	return Array.isArray(targetType)
		? (targetType as Identifier[]).some((t) => t === draggedItemType)
		: targetType === draggedItemType
}
