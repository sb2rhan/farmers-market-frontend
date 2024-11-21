import * as React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, SelectField } from 'react-admin';

const FarmList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="farmName" label="Farm" />
            <TextField source="farmerId" label="Owner Id"/>
            <TextField source="location" label="Location"/>
            <SelectField source="farmSize" label="Size" choices={[
                { id: 0, name: 'Small' },
                { id: 1, name: 'Medium' },
                { id: 2, name: 'Large' },
            ]}/>
            <TextField source="farmDescription" label="Description"/>
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default FarmList;
