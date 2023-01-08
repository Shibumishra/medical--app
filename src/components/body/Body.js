import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ActivationEmail from "./auth/ActivationEmail";
import NotFound from "../utils/NotFound/NotFound";

import ForgotPass from "../body/auth/ForgotPassword";
import ResetPass from "../body/auth/ResetPassword";

import Profile from "../body/profile/Profile";
import EditUser from "../body/profile/EditUser";

import Home from "../body/home/Home";
import DoctorList from "../../components/DoctoreList";

import { useSelector } from "react-redux";
import DoctorsDetailsRegister from "./doctorsDetailsRegister/doctorsDetailsRegister";
import AllAppoimentData from "../Apportionment";
import DocctorSearch from "../../pages/DoctorSearch";
import GetSlot from "../GetSlot/index";
import AdminPanel from '../../pages/AdminPanel'
import DoctorsList from '../../pages/DoctorsList'
import DoctorDetail from '../../pages/DoctorDetail'
import DoctorBooking from '../../pages/DoctorBooking'
import BookingConfirm from '../../pages/BookingConfirm'
import BookingForm from '../../pages/BookingForm'
import Bookings from '../../pages/Bookings'
import MedicineList from '../../components/MedicineList/index';
import Ambulances from '../../components/Ambulances/index';
import BookNow from '../../components/Ambulances/BookNow';
// import CheckoutPage from '../../pages/checkout'
import MediceneHome from '../../components/MedicineList/ReactShoppingCart'
import Book from "../../pages/Book";
import Hospital from "../Hospital";
import Cart from "../MedicineList/Carts";
import Address from "../MedicineList/Address";
import OnlinePrescription from '../OnlinePrescription';
// import "assets/scss/style.scss";
// import "../../assets/scss/style.scss";

function Body() {
  const auth = useSelector((state) => state.auth);
  const { isLogged, isAdmin } = auth;
  return (
    <section>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/doctorList" component={DoctorList} />
        <Route path="/appointments" component={AllAppoimentData} />
        <Route path="/service" component={DocctorSearch} />
        <Route exact path="/admin" component={AdminPanel} />
        <Route exact path="/doctors" component={DoctorsList} />
        <Route exact path="/doctors/:id" component={DoctorDetail} />
        <Route path="/medicine" component={MedicineList} />
        <Route path="/ambulances" component={Ambulances} />
        <Route path="/booknow" component={BookNow} />
        <Route path="/cart" component={Cart} />
        <Route path="/address" component={Address} />
        <Route path="/book" component={Book} />
        <Route path="/hospital" component={Hospital} />
        {/* <Route path="/checkoutpage" component={CheckoutPage}/> */}
        <Route
          exact
          path="/doctors/:id/book"
          component={DoctorBooking}
        />
        <Route exact path="/confirm-booking" component={BookingForm} />
        <Route exact path="/confirmed" component={BookingConfirm} />
        <Route exact path="/bookings" component={Bookings} />
        <Route path="/getslot" component={GetSlot} />
        <Route path="/online-prescription" component={OnlinePrescription} />
        <Route path="/edit-user" component={EditUser} />

        <Route path="/login" component={isLogged ? NotFound : Login} exact />
        <Route
          path="/register"
          component={isLogged ? NotFound : Register}
          exact
        />

        <Route
          path="/forgot_password"
          component={isLogged ? NotFound : ForgotPass}
          exact
        />
        <Route
          path="/user/reset/:token"
          component={isLogged ? NotFound : ResetPass}
          exact
        />

        <Route
          path="/user/activate/:activation_token"
          component={ActivationEmail}
          exact
        />

        <Route
          path="/profile"
          component={Profile}
          exact
        />
        {/* <Route
          path="/edit_user"
          component={isAdmin ? EditUser : NotFound}
          exact
        /> */}
        <Route
          path="/doctorsDetailss"
          component={isLogged ? NotFound : DoctorsDetailsRegister}
          exact
        />
      </Switch>
    </section>
  );
}

export default Body;
