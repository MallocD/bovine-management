import { HomePage, ProfilePage, AreaVenda, AreaCompra, AreaInvestidor } from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/area-venda',
        element: AreaVenda
    },
    {
        path: '/profile',
        element: ProfilePage
    },
    {
        path: '/area-compra',
        element: AreaCompra
    },
    {
        path: '/area-investidor',
        element: AreaInvestidor
    },
    {
        path: '/home',
        element: HomePage
    },
   
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
