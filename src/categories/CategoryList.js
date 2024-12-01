import * as React from 'react';
import { List, Datagrid, TextField, ImageField } from 'react-admin';
import { Box, Button } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const CategoryList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="categoryName" label="Category" />
            <TextField source="categoryDescription" label="Description"/>
            <ImageField source="categoryImgPath"/>
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

export default CategoryList;