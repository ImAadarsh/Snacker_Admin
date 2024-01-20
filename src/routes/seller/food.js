// ** React Imports
import { lazy } from 'react';

const SellerFoodRoutes = [
  {
    path: 'seller/product',
    component: lazy(() => import('views/seller-views/product')),
  },
];

export default SellerFoodRoutes;
