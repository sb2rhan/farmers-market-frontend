// src/orders/OrderCreate.js
import * as React from 'react';
import { Create, SimpleForm, TextInput, SelectInput, DateInput } from 'react-admin';

const OrderCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="buyerId" label="Customer Id" />
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
    </Create>
);

export default OrderCreate;
