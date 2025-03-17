import Home from '../pages/Home'
import Public from "../pages/Public"
import Academy from '../pages/Academy';
import Team from '../pages/Team';
import Blog from '../pages/Blog'
import Career from '../pages/Career';
import Business from '../pages/Business';

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
        name: 'Beriverse Consulting',
        component: Business
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