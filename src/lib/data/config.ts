import { dev } from '$app/environment';

export const title = 'Matt Safaii';
export const description = 'Software Engineer';
export const url = dev ? 'http://localhost:5173/' : 'https://mattsafaii.com/';

export type IconName = 'home' | 'projects' | 'uses' | 'drops' | 'articles' | 'contact';

type NavLink = {
	id: number;
	href: string;
	icon: IconName;
	label: string;
};

export const navLinks: NavLink[] = [
	{ id: 0, href: '/', icon: 'home', label: 'Home' },
	{ id: 1, href: '/articles', icon: 'articles', label: 'Articles' },
	{ id: 2, href: '/projects', icon: 'projects', label: 'Projects' },
	{ id: 3, href: '/drops', icon: 'drops', label: 'Drops' },
	{ id: 4, href: '/uses', icon: 'uses', label: 'Uses' },
	{ id: 6, href: '/contact', icon: 'contact', label: 'Contact' }
];
