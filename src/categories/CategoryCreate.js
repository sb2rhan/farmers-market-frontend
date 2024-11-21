import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const CategoryCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="categoryName" label="Category" />
            <TextInput source="categoryDescription" label="Description"/>
            <TextInput source="categoryImgPath" label="Image path"/>
        </SimpleForm>
    </Create>
);

export default CategoryCreate;
