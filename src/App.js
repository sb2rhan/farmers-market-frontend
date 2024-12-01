// src/App.js
import * as React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import authProvider from './providers/authProvider';
import './App.css';
import LoginForm from './components/LoginForm'
import { CustomLayout } from './CustomLayout'; // Named import
import { ProductList } from './products/ProductList';
import { ProductEdit } from './products/ProductEdit';
import  ProductCreate  from './products/ProductCreate';
import { UserList } from './users/UserList';
import { UserEdit } from './users/UserEdit';
import Dashboard from './dashboard/Dashboard';
import theme from './theme';
import OrderList from './orders/OrderList';
import OrderEdit from './orders/OrderEdit';
import OrderCreate from './orders/OrderCreate';
import OfferList from './offers/OfferList';
import OfferEdit from './offers/OfferEdit';
import OfferCreate from './offers/OfferCreate';
import CategoryList from './categories/CategoryList';
import CategoryEdit from './categories/CategoryEdit';
import CategoryCreate from './categories/CategoryCreate';
import FarmList from './farms/FarmList';
import FarmEdit from './farms/FarmEdit';
import FarmCreate from './farms/FarmCreate';
import { Box } from "@mui/material";

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (auth && auth.token) {
        options.headers.set('Authorization', `Bearer ${auth.token}`);
    } else {
        console.error('No authorization token found');
    }

    return fetchUtils.fetchJson(url, options);
};


const dataProvider = restProvider('https://farmersmarketapi-e0c4d5dpc7e7fwbd.northeurope-01.azurewebsites.net/api/v1', httpClient);
const CustomPage = ({ children, backgroundImage }) => (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      {children}
    </Box>
  );
  
const App = () => (
    <Admin loginPage={LoginForm} dashboard={Dashboard} theme={theme} dataProvider={dataProvider} authProvider={authProvider} layout={CustomLayout}>
        <Resource
            name="Users"
            list={UserList}
            edit={UserEdit}
        />
        <Resource
            name="Farms"
            list={FarmList}
            edit={FarmEdit}
            create={FarmCreate}
        />
        <Resource
            name="Categories"
            list={CategoryList}
            edit={CategoryEdit}
            create={CategoryCreate}
        />
        <Resource
            name="Products"
            list={ProductList}
            edit={ProductEdit}
            create={ProductCreate}
        />
        <Resource
            name="MarketOrders"
            list={OrderList}
            edit={OrderEdit}
            create={OrderCreate}
        />
        <Resource
            name="Offers"
            list={OfferList}
            edit={OfferEdit}
            create={OfferCreate}
        />
    </Admin>
);

export default App;
