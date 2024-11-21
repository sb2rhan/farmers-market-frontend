// src/users/UserList.js
import * as React from 'react';
import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="userName" />
            <TextField source="firstName" />
            <TextField source="middleName" />
            <TextField source="lastName" />
            <EmailField source="email" />
            <TextField source="phoneNumber" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);
