import { readFiles } from './files';

export interface Project {
	title: string;
	year: number;
	description: string;
	url: string;
	status: 'active' | 'dead' | 'In Progress';
	published: boolean;
	slug: string;
	content: string;
}

export async function readProjects(): Promise<Project[]> {
	const projects = await readFiles<Project>('src/lib/data/projects');
	return projects
		.filter((project) => project.published)
		.sort((a, b) => b.year - a.year);
}