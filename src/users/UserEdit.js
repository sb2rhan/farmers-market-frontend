// src/users/UserEdit.js
import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);
