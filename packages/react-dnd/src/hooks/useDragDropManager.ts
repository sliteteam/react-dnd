import { invariant } from '@slite/react-dnd-invariant'
import type { DragDropManager } from '@slite/react-dnd-core'
import { useContext } from 'react'

import { DndContext } from '../core/index.js'

/**
 * A hook to retrieve the DragDropManager from Context
 */
export function useDragDropManager(): DragDropManager {
	const { dragDropManager } = useContext(DndContext)
	invariant(dragDropManager != null, 'Expected drag drop context')
	return dragDropManager as DragDropManager
}
