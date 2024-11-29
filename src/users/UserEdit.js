// src/users/UserEdit.js
import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="userName" />
            <TextInput source="firstName" />
            <TextInput source="middleName" />
            <TextInput source="lastName" />
            <TextInput source="email" type="email" />
            <TextInput source="phoneNumber" />
        </SimpleForm>
    </Edit>
);
