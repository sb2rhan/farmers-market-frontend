import * as React from 'react';
import { List, Pagination } from 'react-admin';
import { Grid, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { EditButton, DeleteButton } from 'react-admin';

const CustomCard = ({ record }) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345, marginBottom: 2, boxShadow: 3 }}>
                {/* Display product image */}
                <CardMedia
                    component="img"
                    alt={record.productName}
                    height="200"
                    image={record.image || 'https://via.placeholder.com/200'}  // Default image if none exists
                    title={record.productName}
                    sx={{ objectFit: 'cover' }} // Custom style for the image to maintain aspect ratio
                />
                <CardContent>
                    {/* Product Title */}
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
                        {record.productName}
                    </Typography>
                    {/* Product Description */}
                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                        {record.productDescript}
                    </Typography>
                    {/* Price and Quantity */}
                    <Typography variant="body2" color="text.primary" sx={{ marginTop: 1 }}>
                        Price: ${record.price} | Quantity: {record.quantity}
                    </Typography>

                    {/* Edit and Delete Buttons */}
                    <div sx={{ marginTop: 2 }}>
                        <EditButton basePath="/products" record={record} />
                        <DeleteButton basePath="/products" record={record} />
                    </div>
                </CardContent>
            </Card>
        </Grid>
    );
};

export const ProductList = (props) => {
    return (
        <List {...props} pagination={<Pagination rowsPerPageOptions={[5, 10, 25]} />}>
            {/* Display products in a grid layout */}
            <Grid container spacing={2}>
                {props.data && props.data.map((record) => (
                    <CustomCard key={record.id} record={record} />
                ))}
            </Grid>
        </List>
    );
};
