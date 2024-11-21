// src/products/ProductList.js
import * as React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, NumberField } from 'react-admin';

export const ProductList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="categoryId" />
            <TextField source="productName" />
            <TextField source="productDescript" />
            <TextField source="farmId" />
            <NumberField source="price" />
            <NumberField source="quantity" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);
