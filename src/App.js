import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Registration from './components/Registration/Registration';
import Shipping from './components/Shipping/Shipping';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/shipping">
          <Shipping></Shipping>
        </Route>
        <Route path="/placeorder">
          <PlaceOrder></PlaceOrder>
        </Route>
        <Route path="/registration">
          <Registration></Registration>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
