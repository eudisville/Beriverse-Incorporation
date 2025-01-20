import Home from '../pages/Home'
import Big from '../pages/Big';
import Blog from '../pages/Blog'
import Career from '../pages/Career';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/public',
        name: 'Public',
        component: Big
    },
    {
        path: '/enterprise',
        name: 'Enterprise',
        component: Big
    },
    {
        path: '/teams',
        name: 'Our Team',
        component: Big
    },
    {
        path: '/academy',
        name: 'Beriverse Academy',
        component: Big
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/career',
        name: 'Careers',
        component: Career
    },
    {
        path: '/contacts',
        name: 'Contact Us',
        component: Career
    },
]

export default routes;