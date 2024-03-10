import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the ERP System</h1>
      <p>Total number of products: 10</p>
      <p>Total number of orders: 5</p>
      <Link to="/products">Manage Products</Link>
      <br />
      <Link to="/orders">Manage Orders</Link>
      <br />
    </div>
  );
};

export default Dashboard;