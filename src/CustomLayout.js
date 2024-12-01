// src/CustomLayout.js
import React from 'react';
import { Layout as AdminLayout } from 'react-admin';  // Renamed to avoid conflict
import { MyMenu } from './MyMenu';
import { MyAppBar } from './MyAppBar'; // Import your custom AppBar

export const CustomLayout = ({ children }) => (
    <AdminLayout  appBar={MyAppBar} menu={MyMenu}>
        {children}
    </AdminLayout>
);
