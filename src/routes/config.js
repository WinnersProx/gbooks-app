import { lazy } from 'react-router-guard';

export default [
	{
		path: '/',
		exact: true,
		component: lazy(() => import('../components/Landing/Landing')),
	},
	{
		path: '/book/:bookId',
		exact: true,
		component: lazy(() => import('../components/BookDetails/BookDetails'))
	},

];
