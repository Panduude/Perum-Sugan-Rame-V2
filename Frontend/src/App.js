import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Products from "./pages/Products";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Berita from "./pages/Berita";
import DetailBerita from "./pages/DetailBerita";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile";
import Pembayaran from "./pages/Pembayaran";
import SubPembayaran from "./pages/SubPembayaran";
import InputPerintah from "./pages/InputPerintah";
import AddPerintah from "./pages/AddPerintah";
import EditPerintah from "./pages/EditPerintah";
import AcceptPerintah from "./pages/AcceptPerintah";
import ApprovePerintah from "./pages/ApprovePerintah";
import ApprovePembayaran from "./pages/ApprovePembayaran";
import Keuangan from "./pages/Keuangan";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/berita/detail/:id" element={<DetailBerita />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/update" element={<UpdateProfile />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/subpembayaran" element={<SubPembayaran />} />
          <Route path="/perintah" element={<InputPerintah />} />
          <Route path="/perintah/add" element={<AddPerintah />} />
          <Route path="/perintah/edit/:id" element={<EditPerintah />} />
          <Route path="/perintah/accept/:id" element={<AcceptPerintah />} />
          <Route path="/approve/:id" element={<ApprovePerintah />} />
          <Route path="/approve" element={<ApprovePembayaran />} />
          <Route path="/keuangan" element={<Keuangan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
