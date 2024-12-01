import * as React from 'react';
import { Edit, SelectInput, SimpleForm, TextInput } from 'react-admin';

const FarmEdit = (props) => (
    <Edit {...props}>
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
    </Edit>
);

export default FarmEdit;
