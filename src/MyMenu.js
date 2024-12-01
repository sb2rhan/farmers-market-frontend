import * as React from 'react';
import { Menu } from 'react-admin';
import PeopleIcon from '@mui/icons-material/People';
import NatureIcon from '@mui/icons-material/Nature';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DiscountIcon from '@mui/icons-material/LocalOffer';

export const MyMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        
        {/* Users */}
        <Menu.Item to="/users" primaryText="Users" leftIcon={<PeopleIcon />} />

        {/* Farms */}
        <Menu.Item to="/farms" primaryText="Farms" leftIcon={<NatureIcon />} />

        {/* Categories */}
        <Menu.Item to="/categories" primaryText="Categories" leftIcon={<CategoryIcon />} />
        
        {/* Products */}
        <Menu.Item to="/products" primaryText="Products" leftIcon={<ShoppingBasketIcon />} />
        
        {/* Market Orders */}
        <Menu.Item to="/marketOrders" primaryText="Market Orders" leftIcon={<LocalShippingIcon />} />
        
        {/* Offers */}
        <Menu.Item to="/offers" primaryText="Offers" leftIcon={<DiscountIcon />} />
        
        {/* You can add more menu items here as needed */}
    </Menu>
);
