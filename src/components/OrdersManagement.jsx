import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrdersManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.log('Error fetching orders:', error);
      });
  }, []);

  return (
    <div>
      <h1>Orders Management</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.customerName}</td>
            <td>{order.date}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default OrdersManagement;