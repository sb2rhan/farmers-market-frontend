import * as React from 'react';
import { Edit, SimpleForm, TextInput, SelectInput, NumberInput } from 'react-admin';

const OfferEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="productId" />
            <TextInput source="createdById" />
            <TextInput source="offeredToId" />
            <TextInput source="orderId" />
            <NumberInput source="offerPrice"/>
            <NumberInput source="offerQuantity"/>
            <SelectInput source="offerStatus" choices={[
                { id: 0, name: 'Waiting' },
                { id: 1, name: 'Accepted' },
                { id: 2, name: 'Rejected' },
            ]} />
        </SimpleForm>
    </Edit>
);

export default OfferEdit;
