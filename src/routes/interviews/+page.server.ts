import type { Interview } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('api/interviews')
	const interviews: Interview[] = await response.json()
	return { interviews }
}
