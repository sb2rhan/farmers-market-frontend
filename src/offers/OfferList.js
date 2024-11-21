import * as React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, NumberField, SelectField } from 'react-admin';

const OfferList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="createdById" label="Created by" />
            <TextField source="offeredToId" label="Offered to" />
            <TextField source="orderId" label="Belonging order" />
            <NumberField source="offerPrice" label="Offer Price"/>
            <NumberField source="offerQuantity" label="Quantity"/>
            <SelectField source="offerStatus" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default OfferList;
