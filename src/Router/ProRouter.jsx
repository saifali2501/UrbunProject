import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../UI/Component/Header';
import Home from '../UI/Page/Home';
import SingIn from '../UI/Page/Auth/SingIn/SingIn';
import SingUp from '../UI/Page/Auth/Singup/SingUp';
import { Provider } from 'react-redux';
import Store from '../Redux/App/Store';
import Product from '../UI/Page/Admin/Prodact/Product';
import Dashbord from '../UI/Page/Admin/Dashbord/Dashbord';
import Profile from '../UI/Page/Common/Profile';
import User from '../UI/Page/Admin/User/User';
import AllProduct from '../UI/Page/Common/AllProduct.jsx/AllProduct';

export default function ProRouter() {
  return (
    <div>
      <BrowserRouter>
        <Provider store={Store}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />

            {/* ======Auth========= */}
            <Route path='signin' element={<SingIn />} />
            <Route path='signup' element={<SingUp />} />

            {/* =====admin========== */}
            <Route path='product' element={<Product />} />
            <Route path='dashboard' element={<Dashbord />} />
            <Route path='user' element={<User />} />

            {/* =======common======= */}
            <Route path='/product/:type' element={<AllProduct />} />
            <Route path='profile' element={<Profile />} />
            
            {/* Catch-all route for undefined paths */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

function NotFound() {
  return <h2>Page Not Found</h2>;
}
