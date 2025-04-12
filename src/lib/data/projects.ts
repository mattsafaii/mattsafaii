export type ProjectStatus =
	| 'Idea'
	| 'Exploring'
	| 'In Progress'
	| 'Launched'
	| 'Paused'
	| 'Archived';

export interface ProjectType {
	name: string;
	date: string;
	summary: string;
	link: string;
	status: ProjectStatus;
	description: string;
	outcome: string;
	recruitingStatus?: 'Looking for Co-founder' | 'Hiring';
}

export const projects: ProjectType[] = [
	{
		name: 'Hookah Maps',
		date: '2025',
		summary: 'Yelp for hookah lounges',
		link: '#',
		status: 'Idea',
		description: 'Yelp sucks for discovering new spots. I wanted to create a better experience.', 
		outcome: '',
	},
	{
		name: 'JUKE',
		date: '2023',
		summary: 'Sports facility booking app',
		link: '#',
		status: 'Exploring',
		description: 'I got tired of never being able to play basketball indoors. I wanted to create a way to book indoor gyms with a good experience and create a win-win situation for basketball players and local gyms.', 
		outcome: '',
		recruitingStatus: 'Looking for Co-founder',
	},
	{
		name: 'Serafin Security',
		date: '2023',
		summary: 'A surveillance hardware and software company.',
		link: 'https://serafinsecurity.com',
		status: 'Paused',
		description: '', 
		outcome: '',
	},
	{
		name: 'MGENCY',
		date: '2020',
		summary: 'My independent product studio.',
		link: 'https://mgency.com',
		status: 'Launched',
		description: 'Matt + High Agency = MGENCY. This business has gone through many iterations, but the latest one is a product studio that builds custom software for clients.', 
		outcome: '',
	},
	{
		name: 'Zonebrite Solutions',
		date: '2012',
		summary: 'A local security camera installation service.',
		link: 'https://zonebrite.com',
		status: 'Launched',
		description: 'Zonebrite is a local security camera installation service that I started with my brother. We install security cameras for local businesses and residential customers.', 
		outcome: '',
		recruitingStatus: 'Hiring',
	},
];
