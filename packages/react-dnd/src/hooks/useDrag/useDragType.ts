import { invariant } from '@slite/react-dnd-invariant'
import type { Identifier } from '@slite/react-dnd-core'
import { useMemo } from 'react'

import type { DragSourceHookSpec } from '../types.js'

export function useDragType(
	spec: DragSourceHookSpec<any, any, any>,
): Identifier {
	return useMemo(() => {
		const result: Identifier = spec.type
		invariant(result != null, 'spec.type must be defined')
		return result
	}, [spec])
}
