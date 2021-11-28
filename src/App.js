import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/Components/Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Booking from '../src/Components/Pages/Booking/Booking';
import LogIn from '../src/Components/Pages/LogIn/LogIn';
import Header from '../src/Components/Pages/Shared/Header/Header';
import AddNewDestination from '../src/Components/Pages/AddNewDestination/AddNewDestination';
import PrivateRoute from '../src/Components/Pages/PrivateRoute/PrivateRoute';
import ManageAllBooking from '../src/Components/Pages/ManageAllBooking/ManageAllBooking';
import Footer from '../src/Components/Pages/Shared/Footer/Footer';
import AuthProvider from '../src/Components/Context/AuthProvider';
import MyBooking from '../src/Components/Pages/MyBooking/MyBooking';
import Contact from '../src/Components/Pages/Contact/Contact';
import Destination from '../src/Components/Pages/Destination/Destination';
function App() {
  return (
    <div className="body">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/destination'>
              <Destination></Destination>
            </Route>
            <PrivateRoute path='/addNewDestination'>
              <AddNewDestination></AddNewDestination>
            </PrivateRoute>
            <PrivateRoute path='/manageAllBooking'>
              <ManageAllBooking></ManageAllBooking>
            </PrivateRoute>
            <PrivateRoute path='/myBooking'>
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute  path='/booking/:id'>
              <Booking></Booking>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router> 
      </AuthProvider>
    </div>
  );
}

export default App;
