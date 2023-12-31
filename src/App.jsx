import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { ToastContainer } from "react-toastify";
import Dashboard from "./components/Dashboard";
import InputKeuangan from "./components/InputKeuanganDashboard.jsx";
import Edit from "./components/Edit";
import InputInvestasi from "./components/InputInvestasi";
import Statistik from "./components/Statistik";
import Beranda from "./pages/Beranda";
import Error404 from "./pages/Error404";
import Laporan from "./pages/Laporan.jsx";
import RekapInvestasi from "./components/RekapInvestasi.jsx";

function App() {
  return (
    <div className="app">
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inputkeuangan" element={<InputKeuangan />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/inputinvestasi" element={<InputInvestasi />} />
        <Route path="/statistik" element={<Statistik />} />
        <Route path="/laporan" element={<Laporan />} />
        <Route path="/rekapinvestasi" element={<RekapInvestasi />} />
        <Route path="/" element={<Beranda />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
