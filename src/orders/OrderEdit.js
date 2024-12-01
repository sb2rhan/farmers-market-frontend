// src/orders/OrderEdit.js
import * as React from 'react';
import { Edit, SimpleForm, TextInput, SelectInput, DateInput } from 'react-admin';

const OrderEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="buyerId" label="Customer Id" />
            <SelectInput source="deliveryMethod" choices={[
                { id: 0, name: 'Home' },
                { id: 1, name: 'Pickup' },
                { id: 2, name: 'Third-party' },
            ]}  />
            <SelectInput source="paymentMethod" choices={[
                { id: 0, name: 'Cash' },
                { id: 1, name: 'Credit' },
                { id: 2, name: 'Debit' },
            ]}  />
            <DateInput source="deliveryDate" label="Delivery Date" />
            <SelectInput source="orderStatus" choices={[
                { id: 0, name: 'Processing' },
                { id: 1, name: 'Dispatched' },
                { id: 2, name: 'Delivered' },
            ]} />
        </SimpleForm>
    </Edit>
);

export default OrderEdit;
