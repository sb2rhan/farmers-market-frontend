// src/orders/OrderList.js
import * as React from 'react';
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, SelectField } from 'react-admin';

const OrderList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="buyerId" label="Customer Id" />
            <SelectField source="deliveryMethod" />
            <SelectField source="paymentMethod" />
            <DateField source="deliveryDate" label="Delivery Date" />
            <SelectField source="orderStatus" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default OrderList;
