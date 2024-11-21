import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const CategoryEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="categoryName" label="Category" />
            <TextInput source="categoryDescription" label="Description"/>
            <TextInput source="categoryImgPath" label="Image path"/>
        </SimpleForm>
    </Edit>
);

export default CategoryEdit;
