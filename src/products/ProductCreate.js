// src/products/ProductCreate.js
/*import * as React from 'react';
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const ProductCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="category" />
            <NumberInput source="price" />
        </SimpleForm>
    </Create>
);*/
// src/products/ProductCreate.js
import * as React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, BooleanInput, ImageInput, ImageField } from 'react-admin';

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

            {/* Image Upload */}
            {/* <ImageInput source="image" label="Upload Product Image" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput> */}

            {/* Tags */}
            {/* <TextInput source="tags" label="Tags" helperText="Add comma-separated tags for categorization" /> */}
        </SimpleForm>
    </Create>
);

export default ProductCreate;

