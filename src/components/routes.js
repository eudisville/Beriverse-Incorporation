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
        path: '/tech',
        name: 'Beriverse Technologies',
        component: Public
    },
    {
        path: '/academy',
        name: 'Beriverse Academy',
        component: Academy
    },
    {
        path: '/studio',
        name: 'Beriverse Studio',
        component: Business
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