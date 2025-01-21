import Home from '../pages/Home'
import Public from "../pages/Public"
import Enterprise from "../pages/Enterprise"
import Academy from '../pages/Academy';
import Team from '../pages/Team';
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
        component: Public
    },
    {
        path: '/enterprise',
        name: 'Enterprise',
        component: Enterprise
    },
    {
        path: '/academy',
        name: 'Beriverse Academy',
        component: Academy
    },
    {
        path: '/teams',
        name: 'Our Team',
        component: Team
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