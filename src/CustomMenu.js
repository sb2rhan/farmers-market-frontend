import * as React from 'react';
import { Menu, MenuItemLink } from 'react-admin'; // Ensure correct import
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductIcon from '@mui/icons-material/Store';
import UserIcon from '@mui/icons-material/People';
import OrderIcon from '@mui/icons-material/ShoppingCart';

const CustomMenu = (props) => {
    console.log('CustomMenu is rendering'); // Verify rendering
    return (
        <Menu {...props}>
            <MenuItemLink to="/dashboard" primaryText="Dashboard" leftIcon={<DashboardIcon />} />
            <MenuItemLink to="/products" primaryText="Products" leftIcon={<ProductIcon />} />
            <MenuItemLink to="/users" primaryText="Users" leftIcon={<UserIcon />} />
            <MenuItemLink to="/orders" primaryText="Orders" leftIcon={<OrderIcon />} />
        </Menu>
    );
};

export default CustomMenu;
