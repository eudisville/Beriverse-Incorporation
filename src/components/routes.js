import Home from '../pages/Home'
import Academy from '../pages/Academy';
import Enterprise from "../pages/Enterprise"
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
        component: Academy
    },
    {
        path: '/enterprise',
        name: 'Enterprise',
        component: Enterprise
    },
    {
        path: '/teams',
        name: 'Our Team',
        component: Academy
    },
    {
        path: '/academy',
        name: 'Beriverse Academy',
        component: Academy
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
]

export default routes;