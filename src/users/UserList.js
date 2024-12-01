// src/users/UserList.js
import * as React from 'react';
import { List, Datagrid, TextField, ImageField, EmailField, Pagination } from 'react-admin';
import { Box, Button, Avatar, Typography } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

export const UserList = (props) => (
    <List {...props}  pagination={<Pagination rowsPerPageOptions={[10, 25, 50]} />} >
        <Datagrid rowClick="edit">
            {/* Displaying User Info */}
            <TextField label="Username" source="userName" />
            <TextField label="First Name" source="firstName" />
            <TextField label="Middle Name" source="middleName" />
            <TextField label="Last Name" source="lastName" />

            {/* Additional Info */}
            <EmailField label="Email" source="email" />
            <TextField label="Phone Number" source="phoneNumber" />

            {/* Action Buttons */}
            <Box display="flex" justifyContent="flex-end" gap="10px">
                <Button variant="contained" color="primary" startIcon={<Edit />}>
                    Edit
                </Button>
                <Button variant="outlined" color="secondary" startIcon={<Delete />}>
                    Delete
                </Button>
            </Box>
        </Datagrid>
    </List>
);
