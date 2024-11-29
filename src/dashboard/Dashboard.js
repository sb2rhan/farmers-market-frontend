// src/dashboard/Dashboard.js
import * as React from 'react';
import SalesChart from './SalesChart'; // Import your SalesChart component
import QuickActions from './QuickActions';

const Dashboard = () => (
    <div style={{ padding: '20px' }}>
        <h2>Dashboard</h2>
        {/* You can add more components like stats, user data, etc. */}
        <SalesChart /> {/* Add the SalesChart here */}
        <QuickActions />
    </div>
);

export default Dashboard;
