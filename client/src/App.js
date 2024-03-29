import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './auth/Login';
import Register from './auth/Register';
import NavbarMenu from './components/NavbarMenu';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import {PrivateRoute} from './private/PrivateRoute';
import DashboardSeller from './pages/DashboardSeller';
import NewHotel from './components/NewHotel';

function App() {
  return (
    <BrowserRouter>
      <NavbarMenu />
      <ToastContainer />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="dashboard/seller"
          element={
            <PrivateRoute>
              <DashboardSeller />
            </PrivateRoute>
          }
        />
        <Route
          path="hotels/new"
          element={
            <PrivateRoute>
              <NewHotel />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
