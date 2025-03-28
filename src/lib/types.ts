export type Categories = 'sveltekit' | 'svelte';

export type Interview = {
	title: string;
	slug: string;
	description: string;
	date: string;
	podcast: string;
	episode: string;
	url: string;
	topics: string[];
	published: boolean;
};

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

export type Project = {
	title: string;
	slug: string;
	year: string;
	description: string;
	url: string;
	status: string;
	published: boolean;
};

