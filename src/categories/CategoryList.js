import * as React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

const CategoryList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="categoryName" label="Category" />
            <TextField source="categoryDescription" label="Description"/>
            <TextField source="categoryImgPath" label="Image path"/>
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export default CategoryList;
