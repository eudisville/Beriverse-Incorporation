import Home from '../pages/Home'
import Software from '../pages/Software'
import Big from '../pages/Big';
import Game from '../pages/Game';
import Blog from '../pages/Blog'
import Career from '../pages/Career';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/software',
        name: 'Software',
        component: Software
    },
    {
        path: '/games',
        name: 'Games',
        component: Game
    },
    {
        path: '/data',
        name: 'Big Data & AI',
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
]

export default routes;