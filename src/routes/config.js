import { lazy } from 'react-router-guard';

export default [
	{
		path: '/',
		exact: true,
		component: lazy(() => import('../components/Landing/Landing')),
	},
	{
		path: '/',
		exact: true,
		component: lazy(() => import('../components/Nav/Nav'))
	}
];
