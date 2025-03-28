import { json } from '@sveltejs/kit';
import type { Interview } from '$lib/types';

export const prerender = true;

async function getInterviews() {
	let interviews: Interview[] = [];

	const paths = import.meta.glob('/src/content/interviews/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Interview, 'slug'>;
			const interview = { ...metadata, slug } satisfies Interview;
			if (interview.published) {
				interviews.push(interview);
			}
		}
	}

	interviews = interviews.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return interviews;
}

export async function GET() {
	const interviews = await getInterviews();
	return json(interviews);
}
