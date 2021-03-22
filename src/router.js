import Trangchu from './components/Trangchu/Trangchu';
import Carts from './components/Cart/Carts';
import SPham from './components/SanPham/SPham';
import Laptop from './components/Trangchu/Laptop';
export const routers = [
    {
        path: '/',
        exact: true,
        main: () => <Trangchu/>
    },
    {
        path: '/cart',
        exact: true,
        main: () => <Carts/>
    },
    {
        path:'/Sanpham',
        exact:true,
        main:()=><SPham/>
    },
    {
        path:'/laptops',
        exact:true,
        main:()=><Laptop/>
    }
];

