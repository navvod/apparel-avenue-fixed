import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

// Import Adminpage components
import ManagerRegister from "./componenets/adminPage/ManagerRegister";
import ManagerList from "./componenets/adminPage/ManagerList";
import EditManager from "./componenets/adminPage/EditManager";
import AdminList from "./componenets/adminPage/AdminList";
import AdminRegister from "./componenets/adminPage/AdminRegister";
import CustomerList from "./componenets/adminPage/CustomerList";
import EditAdmin from "./componenets/adminPage/EditAdmin";
import AdminManagerLogin from "./componenets/adminPage/AdminMangerLogin";
import AdminHome from "./componenets/adminPage/AdminHome";
import EditCustomer from "./componenets/adminPage/EditCustomer";
import ChangePassword from "./componenets/adminPage/ChangePassword";
// Import customer components
import CustomerRegister from "./componenets/customer/CustomerRegister";
import CustomerLogin from "./componenets/customer/CustomerLogin";
import Test from "./componenets/customer/Test";
import CustomerProfile from "./componenets/customer/CustomerProfile";
import EditCustomerProfile from "./componenets/customer/EditCustomerProfile";

//import ecom pages
import LandingPage from "./componenets/ecommercePages/LandingPage";

function App() {
  // Set default base URL for Axios
  axios.defaults.baseURL = "http://localhost:8500"; //  backend server URL

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Test" element={<Test />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/user/register-manager" element={<ManagerRegister />} />
          <Route path="/user/allmanagers" element={<ManagerList />} />
          <Route path="/user/update-manager/:Id" element={<EditManager />} />
          <Route path="/user/register-admin" element={<AdminRegister />} />
          <Route path="/user/allAdmins" element={<AdminList />} />
          <Route path="/user/update-admin/:Id" element={<EditAdmin />} />
          <Route path="/user/allcustomers" element={<CustomerList />} />
          <Route
            path="/user/change-password/:Id"
            element={<ChangePassword />}
          />
          <Route
            path="/user/login-adminAndManger"
            element={<AdminManagerLogin />}
          />
          <Route
            path="/user/register-customer"
            element={<CustomerRegister />}
          />
          <Route path="/user/login-customer" element={<CustomerLogin />} />
          <Route
            path="/user/customer-profile/:id"
            element={<CustomerProfile />}
          />
          <Route path="/user/update-customer/:id" element={<EditCustomer />} />
          <Route
            path="/user/update-customerProfile/:id"
            element={<EditCustomerProfile />}
          />
          <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
