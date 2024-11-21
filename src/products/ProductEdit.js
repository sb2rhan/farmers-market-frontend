// src/products/ProductEdit.js
import * as React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const ProductEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="categoryId" />
            <TextInput source="farmId" />
            <TextInput source="productName" />
            <TextInput source="productDescript" />
            <TextInput source="category" />
            <NumberInput source="price" />
            <NumberInput source="quantity" />
        </SimpleForm>
    </Edit>
);
