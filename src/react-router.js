import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
import OrderDetails from './components/OrderDetails';
import OrdersCalendarView from './components/OrdersCalendarView';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/products" component={ProductsManagement} />
        <Route path="/orders" component={OrdersManagement} />
        <Route path="/orders/:id" component={OrderDetails} />
        <Route path="/calendar" component={OrdersCalendarView} />
      </Switch>
    </Router>
  );
}

export default App;