// src/dashboard/SalesChart.js
import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'January', sales: 400 },
    { name: 'February', sales: 300 },
    { name: 'March', sales: 500 },
    { name: 'April', sales: 700 },
    { name: 'May', sales: 600 },
    { name: 'June', sales: 800 },
    { name: 'July', sales: 1000 },
    { name: 'August', sales: 900 },
    { name: 'September', sales: 750 },
    { name: 'October', sales: 600 },
    { name: 'November', sales: 850 },
    { name: 'December', sales: 950 },
];

const SalesChart = () => (
    <div style={{ width: '100%', height: 400 }}>
        <h3>Sales Overview</h3>
        <ResponsiveContainer>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" barSize={30} />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

export default SalesChart;
