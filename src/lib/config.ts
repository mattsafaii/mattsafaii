import { dev } from '$app/environment';

export const title = 'Matt Safaii';
export const description = 'Building things with code';
export const url = dev ? 'http://localhost:5173/' : 'https://mattsafaii.com/';

export const navLinks = [
	{
		label: 'Home',
		href: '/'
	},
	{
		label: 'Letters',
		href: '/letters'
	},
	{
		label: 'Projects',
		href: '/projects'
	},
	{
		label: 'Drops',
		href: '/drops'
	},
	{
		label: 'Stack',
		href: '/stack'
	},
    {
        label: 'Interviews',
        href: '/interviews'
    }
]

