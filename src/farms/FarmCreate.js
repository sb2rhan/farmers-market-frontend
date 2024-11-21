import * as React from 'react';
import { Create, SelectInput, SimpleForm, TextInput } from 'react-admin';

const FarmCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="farmName" label="Farm" />
            <TextInput source="farmerId" label="Owner Id"/>
            <TextInput source="location" label="Location"/>
            <SelectInput source="farmSize" label="Size" choices={[
                { id: 0, name: 'Small' },
                { id: 1, name: 'Medium' },
                { id: 2, name: 'Large' },
            ]}/>
            <TextInput source="farmDescription" label="Description"/>
        </SimpleForm>
    </Create>
);

export default FarmCreate;
