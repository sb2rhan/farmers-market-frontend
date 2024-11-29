import * as React from 'react';
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

const ProductCreate = props => (
    <Create {...props}>
        <SimpleForm>
            {/* Basic Fields */}
            <TextInput source="productName" label="Product Name" />
            <TextInput source="categoryId" label="Category" />
            <TextInput source="farmId" label="Farm" />
            <NumberInput source="price" label="Price" min={0} />

            {/* Additional Fields */}
            <TextInput source="productDescript" label="Description" multiline />
            <NumberInput source="quantity" label="Stock/Quantity" min={0} />
        </SimpleForm>
    </Create>
);

export default ProductCreate;

