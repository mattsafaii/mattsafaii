import { json } from '@sveltejs/kit';
import type { Project } from '$lib/types';

export const prerender = true;

async function getProjects() {
	let projects: Project[] = [];

	const paths = import.meta.glob('/src/content/projects/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Project, 'slug'>;
			const project = { ...metadata, slug } satisfies Project;
			if (project.published) {
				projects.push(project);
			}
		}
	}

	projects = projects.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return projects;
}

export async function GET() {
	const projects = await getProjects();
	return json(projects);
}
